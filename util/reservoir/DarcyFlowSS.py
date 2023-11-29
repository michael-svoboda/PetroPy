from sympy import symbols, pi, log, solve

class DarcysLawBase:
    def __init__(self, **kwargs):
        self.permeability = kwargs.get('k', None)
        self.thickness = kwargs.get('h', None)
        self.inner_radius = kwargs.get('rw', None)
        self.outer_radius = kwargs.get('re', None)
        self.bottomhole_pressure = kwargs.get('Pwf', None)
        self.edge_pressure = kwargs.get('Pe', None)

        self.check_variables()

    def check_variables(self):
        undefined_vars = [var for var in ['permeability', 'thickness', 'inner_radius', 'outer_radius', 'bottomhole_pressure', 'edge_pressure'] if getattr(self, var) is None]
        if undefined_vars:
            raise ValueError(f"The following variables are not defined: {', '.join(undefined_vars)}")

    def solve(self, variable):
        if variable not in ['permeability', 'thickness', 'inner_radius', 'outer_radius', 'bottomhole_pressure', 'edge_pressure']:
            raise ValueError(f"Invalid variable '{variable}'")

        equation = self.get_equation(variable)
        return solve(equation, variable)[0]

    def get_equation(self, variable):
        raise NotImplementedError("Subclasses must implement the get_equation method.")

class DarcysLawSI(DarcysLawBase):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def calculate_flow_rate(self):
        numerator = -2 * pi * self.permeability * self.thickness * (self.edge_pressure - self.bottomhole_pressure)
        denominator = log(self.outer_radius / self.inner_radius)
        return numerator / denominator

    def get_equation(self, variable):
        # Define generic equation for Darcy's Law in SI units
        equation_dict = {
            'permeability': self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (-2 * pi * self.thickness * self.delta_P),
            'thickness': -self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (2 * pi * self.permeability * self.delta_P),
            'inner_radius': self.inner_radius,
            'outer_radius': self.outer_radius,
            'delta_P': -self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (2 * pi * self.permeability * self.thickness)
        }
        return equation_dict[variable]

class DarcysLawOilfield(DarcysLawBase):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def calculate_flow_rate(self):
        # Implement calculation with oilfield units
        # Adjust units as needed
        numerator = -2 * pi * self.permeability * self.thickness * self.delta_P
        denominator = log(self.outer_radius / self.inner_radius)
        return numerator / denominator

    def get_equation(self, variable):
        # Define generic equation for Darcy's Law in oilfield units
        equation_dict = {
            'permeability': self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (-2 * pi * self.thickness * self.delta_P),
            'thickness': -self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (2 * pi * self.permeability * self.delta_P),
            'inner_radius': self.inner_radius,
            'outer_radius': self.outer_radius,
            'delta_P': -self.calculate_flow_rate() * log(self.outer_radius / self.inner_radius) / (2 * pi * self.permeability * self.thickness)
        }
        return equation_dict[variable]