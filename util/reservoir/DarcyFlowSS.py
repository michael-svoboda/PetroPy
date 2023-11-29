from sympy import symbols, Eq, solve, pi, log

class DarcysLawBase:

    q, k, h, rw, re, Pwf, Pe, mu = symbols('q k h rw re Pwf Pe mu')

    def __init__(self, **kwargs):
        self.flow_rate = kwargs.get('q', None)
        self.permeability = kwargs.get('k', None)
        self.thickness = kwargs.get('h', None)
        self.inner_radius = kwargs.get('rw', None)
        self.outer_radius = kwargs.get('re', None)
        self.bottomhole_pressure = kwargs.get('Pwf', None)
        self.edge_pressure = kwargs.get('Pe', None)
        self.viscosity = kwargs.get('mu', None)

        #self.check_variables()

    def get_variable(self, variable):
        if hasattr(self, variable):
            return getattr(self, variable)
        else:
            raise ValueError(f"Variable '{variable}' not found.")

    def get_variables(self):
        # Get all variables initialized with numbers
        variables_with_values = {symbol: getattr(self, var) for symbol, var in self.get_variable_symbols().items() if isinstance(getattr(self, var), (int, float))}
        return variables_with_values

    def get_variable_symbols(self):
        # Define symbols and associate them with variable names
        q, k, h, rw, re, Pwf, Pe, mu = symbols('q k h rw re Pwf Pe mu')
        return {q: 'flow_rate', k: 'permeability', h: 'thickness', rw: 'inner_radius', re: 'outer_radius', Pwf: 'bottomhole_pressure', Pe: 'edge_pressure', mu: 'viscosity'}
    
    def check_variables(self):

        undefined_vars = [var for var in ['flow_rate', 'permeability', 'thickness', 'inner_radius', 'outer_radius', 'bottomhole_pressure', 'edge_pressure', 'viscosity'] if getattr(self, var) is None]
        
        if undefined_vars:
            raise ValueError(f"The following variables are not defined: {', '.join(undefined_vars)}")

    def solve(self, variable):

        equation = self.get_equation()
        rearranged_equation = solve(equation, self.get_variable(variable))[0]

        self.get_variables().keys()

        # Substitute numerical values into the solution
        values = self.get_variables()
        print("VALUES: ", values)
        solution_with_values = rearranged_equation.subs(values)

        # Round the solution to two decimal places
        #rounded_solution = round(solution_with_values, 4)


        return solution_with_values

    def get_equation(self):
        raise NotImplementedError("Subclasses must implement the get_equation method.")

class DarcysLawSI(DarcysLawBase):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def get_equation(self):
        # Define Darcy's law equation symbolically
        darcys_law_radial = Eq(self.q, (-2 * pi * self.k * self.h * (self.Pe - self.Pwf)) / ( log(self.re / self.rw)))
        return darcys_law_radial

class DarcysLawOF(DarcysLawBase):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def get_equation(self):
        # Define Darcy's law equation symbolically
        darcys_law_radial = Eq(self.q, (self.k * self.h * (self.Pe - self.Pwf)) / (self.mu * 141.22 * log(self.re / self.rw)))
        return darcys_law_radial



# Your class definition here...

# Sample implementation to print the result of get_variables
if __name__ == "__main__":
    # Create an instance of your class with some values
    q=137.5344
    k=1
    h=131.2
    rw=0.328
    re=1640
    Pwf=2320
    Pe=2900
    mu=0.46
    darcy_instance = DarcysLawOF(q=q, k=k, h=h, rw=rw, re=re, Pwf=Pwf, Pe=Pe)

    # List of variables to solve for
    variables_to_solve = ['q', 'k', 'h', 'rw', 're', 'Pwf', 'Pe']

    # Loop through each variable, solve, and print the result
    for variable in variables_to_solve:
        solution = darcy_instance.solve(variable)
        print(f"Solving for {variable}: {solution}")



'''# Example usage
si_darcy = DarcysLawSI(k=1.5, h=0.2, rw=2.0, re=4.0, Pwf=100.0, Pe=50.0)
solution_permeability = si_darcy.solve('permeability')
print(f"Permeability solution: {solution_permeability}")

oilfield_darcy = DarcysLawOilfield(k=2.0, h=0.3, rw=1.5, re=3.0, Pwf=120.0, Pe=60.0)
solution_thickness = oilfield_darcy.solve('thickness')
print(f"Thickness solution: {solution_thickness}")'''
