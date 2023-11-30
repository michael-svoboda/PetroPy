from ..physics.PhysicalProperty import PhysicalProperty
from sympy import symbols

class Permeability(PhysicalProperty):

    def __init__(self, input_string):
        super().__init__(input=input_string)
        self.symbol = symbols('k')

    def __str__(self):
        return f'{self.value} {self.prefix} {self.unit}'

    def convert_units(self, new_unit):
        # Add logic for unit conversion here
        # For simplicity, let's assume that conversion is not needed in this example
        pass

    def get_dimensions(self):
        return "Length per Time"