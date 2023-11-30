from sympy import latex, symbols, Eq, solve, pi, log
from .Abstract import Function
from ..physics import Permeability, FlowRate, Thickness, RadiusEdge, RadiusWell, PressureBotHole, PressureEdge, Viscosity, PhysicalProperty

class DarcysLawBase(Function):

    q, k, h, rw, re, Pwf, Pe, mu = symbols('q k h rw re Pwf Pe mu')

    def __init__(self, **kwargs):

        self.flow_rate = FlowRate(kwargs.get('q', None))
        self.permeability = Permeability(kwargs.get('k', None))
        self.thickness = Thickness(kwargs.get('h', None))
        self.inner_radius = RadiusWell(kwargs.get('rw', None))
        self.outer_radius = RadiusEdge(kwargs.get('re', None))
        self.bottomhole_pressure = PressureBotHole(kwargs.get('Pwf', None))
        self.edge_pressure = PressureEdge(kwargs.get('Pe', None))
        self.viscosity = Viscosity(kwargs.get('mu', None))
        self.variable = 'q'
        self.solution = None

    def get_variable(self, variable):
        if hasattr(self, variable):
            return getattr(self, variable)
        else:
            raise ValueError(f"Variable '{variable}' not found.")
        
    def get_variables(self):
        # Assuming you have attributes directly assigned to PhysicalProperty objects
        variables_with_values = {attr: getattr(self, attr) for attr in dir(self) if isinstance(getattr(self, attr), PhysicalProperty)}
        
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
        self.variable = variable
        values = self.get_values(self.get_variables())
        solution_with_values = self.get_equation(variable).subs(values)
        self.solution = solution_with_values
        return solution_with_values

    def get_equation(self, variable):
        equation = self.base_equation()
        rearranged_equation = solve(equation, self.get_variable(variable))[0]
        return rearranged_equation
    
    

class DarcysLawSI(DarcysLawBase):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def base_equation(self):
        # Define Darcy's law equation symbolically
        darcys_law_radial = Eq(self.q, (-2 * pi * self.k * self.h * (self.Pe - self.Pwf)) / ( log(self.re / self.rw)))
        return darcys_law_radial

class DarcysLawOF(DarcysLawBase):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def base_equation(self):
        # Define Darcy's law equation symbolically
        darcys_law_radial = Eq(self.q, (self.k * self.h * (self.Pe - self.Pwf)) / (self.mu * 141.22 * log(self.re / self.rw)))
        return darcys_law_radial



    

