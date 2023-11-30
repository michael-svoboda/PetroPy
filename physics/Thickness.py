from physics import PhysicalProperty
from sympy import symbols

class Thickness(PhysicalProperty):

    def __init__(self, input_string):
        super().__init__(input=input_string)
        self.symbol = symbols('h')  # Assuming 'h' is the symbol for thickness

    def __str__(self):
        return f'{self.value} {self.prefix} {self.unit}'

    def convert_units(self, new_unit):
        # Implement unit conversion logic here if needed
        pass

    def get_dimensions(self):
        return "Length"  # Adjust based on the actual dimensions