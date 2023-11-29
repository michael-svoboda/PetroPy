from abc import ABC, abstractmethod
import re


class PhysicalProperty(ABC):

    UNIT_PREFIXES = {
        'm': 1e-3,   # milli
        'c': 1e-2,   # centi
        'k': 1e3,    # kilo
        'M': 1e6,    # mega
        'G': 1e9,    # giga
        # Add more prefixes as needed
    }

    def __init__(self, value, prefix, unit):
        self.value = value
        self.prefix = prefix
        self.unit = unit 

    @abstractmethod
    def convert_units(self, new_unit):
        pass

    @abstractmethod
    def get_dimensions(self):
        pass

    @classmethod
    def parse_string(cls, input_string):
        # Use a regex pattern to capture three groups: numeric_value, unit_prefix, and unit_string
        match = re.match(r'^([\d.]+)\s*([a-zA-Z]+)\|?([a-zA-Z]*)$', input_string)
        if match:
            numeric_value, unit_prefix, unit_string = match.groups()

            numeric_value = float(numeric_value)

            return numeric_value, unit_prefix, unit_string

        else:
            raise ValueError("Invalid input string format")