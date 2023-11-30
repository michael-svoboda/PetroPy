from physics.PhysicalProperty import PhysicalProperty
from sympy import symbols

class PressureEdge(PhysicalProperty):

    def __init__(self, input_string):
        super().__init__(input=input_string)
        self.symbol = symbols('Pe')

    def __str__(self):
        return f'{self.value} {self.prefix} {self.unit}'

    def convert_units(self, new_unit):
        # Implement unit conversion logic here if needed
        pass

    def get_dimensions(self):
        return "Length"  # Adjust based on the actual dimensions