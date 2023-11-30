from abc import ABC, abstractmethod
from typing import Type, Dict
import re
from sympy import Float, latex, solve
from physics import *

class Function(ABC):
    def get_values(self, group: Dict[str, Type[PhysicalProperty]]) -> Dict[str, float]:
        """
        Get values of objects in the group that are of the specified property_type (Physical Property).

        Parameters:
        - group: Dictionary containing instances of PhysicalProperty subclasses.

        Returns:
        - Dictionary of values indexed by the symbolic versions of the variables.
        """
        print(group)
        values_dict = {}
        for key, obj in group.items():
            if isinstance(obj, PhysicalProperty) and obj.value is not None:
                values_dict[obj.symbol] = obj.value
        return values_dict

    def get_prefixes(self, group: Dict[str, Type[PhysicalProperty]]) -> Dict[str, str]:
        """
        Get all prefixes from objects in the group.

        Parameters:
        - group: Dictionary containing instances of PhysicalProperty subclasses.

        Returns:
        - Dictionary where keys are object names and values are prefixes.
        """
        prefixes = {}
        for key, obj in group.items():
            if obj.prefix is not None:
                prefixes[obj.symbol] = obj.prefix
        return prefixes

    def get_units(self, group: Dict[str, Type[PhysicalProperty]]) -> Dict[str, str]:
        """
        Get all units from objects in the group.

        Parameters:
        - group: Dictionary containing instances of PhysicalProperty subclasses.

        Returns:
        - Dictionary where keys are object names and values are units.
        """
        units = {}
        for key, obj in group.items():
            if obj.unit is not None:
                units[obj.symbol] = obj.unit
        return units

    def get_latex_equation(self):
        # Get the LaTeX representation of the right side of the rearranged equation
        right_side_latex = latex(self.get_equation(self.variable))

        # Concatenate the variable and equals sign to the left of the right side
        latex_equation = f"{latex(self.variable)} = {right_side_latex}"

        return latex_equation
    
    def get_latex_solution(self):
        # Solve the equation for the variable
        solution = solve(self.get_equation(self.variable), self.variable)



        if isinstance(self.solution, Float):
            # Get the LaTeX representation of the solution
            solution_latex = latex(round(self.solution, 4))
        else:
            solution_latex = latex(self.solution)
        
        print(type(self.solution))

        # Concatenate the variable, equals sign, and the solution on the right side
        latex_solution = f"{latex(self.variable)} = {solution_latex}"

        return latex_solution
    

    def sub_latex_equation(self):
        
        """
        Substitute numerical values into a LaTeX string.

        Parameters:
        - latex_string: LaTeX string with variables represented using sympy's latex function.
        - properties: Dictionary containing variable symbols as keys and their corresponding Property instances.

        Returns:
        - LaTeX string with variables replaced by their values, prefixes, and units, enclosed in square brackets.
        """
        latex_string = self.get_latex_equation()
        properties = self.get_variables()
        # Tokenize the LaTeX string based on commands like \left and \right
        tokens = re.split(r'(\\left|\\right|\\[a-zA-Z]+)', latex_string)

        # Iterate over the tokens
        for i, token in enumerate(tokens):
            # Skip tokens that are LaTeX commands
            if token.startswith("\\"):
                continue

            # Iterate over the variables and their values in the dictionary
            for variable, prop in properties.items():
                # Generate the LaTeX representation of the variable
                variable_latex = latex(prop.symbol)

                # Generate the replacement string with square brackets, value, prefix, and unit
                replacement_string = f"[{prop.value} {prop.prefix} {prop.unit}]" if prop.prefix else f"[{prop.value} {prop.unit}]"

                # Replace the variable in the token with the replacement string
                tokens[i] = re.sub(re.escape(variable_latex), replacement_string, tokens[i])

        # Reconstruct the LaTeX string from the tokens
        latex_string = ''.join(tokens)

        return latex_string