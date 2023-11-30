from ..physics.PhysicalProperty import PhysicalProperty
from sympy import symbols

class FlowRate(PhysicalProperty):

    def __init__(self, input_string):
        super().__init__(input=input_string)
        self.symbol = symbols('q')

    def __str__(self):
        return f'{self.value} {self.prefix} {self.unit}'

    def convert_units(self, new_unit):
        # get current unit
        # call unit convert function
        # error handle not supported unit
        pass

    def get_dimensions(self):
        return "Length per Time"

