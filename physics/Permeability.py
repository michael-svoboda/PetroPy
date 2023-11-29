from physics.PhysicalProperty import PhysicalProperty

class Permeability(PhysicalProperty):

    value = None
    prefix = None
    unit = None

    def __init__(self, input_string):
        # Call parse_string in the constructor to set value and unit
        parsed_property = self.parse_string(input_string)
        #print(parsed_property[0], parsed_property[2])
        super().__init__(value=parsed_property[0], prefix=parsed_property[1],unit=parsed_property[2])
        print(self.value)

    def __str__(self):
        return f'{self.value} {self.prefix} {self.unit}'


    def convert_units(self, new_unit):
        # Add logic for unit conversion here
        # For simplicity, let's assume that conversion is not needed in this example
        self.unit = new_unit

    def get_dimensions(self):
        return "Length per Time"