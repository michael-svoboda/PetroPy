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

    def __init__(self, input):
        if input is not None:
            parsed_property = self.set(input)
            self.value = parsed_property[0]
            self.prefix = parsed_property[1]
            self.unit = parsed_property[2]
        else:
            # Set all values to None if input is None
            self.value = None
            self.prefix = None
            self.unit = None

    @abstractmethod
    def convert_units(self, new_unit):
        pass

    @abstractmethod
    def get_dimensions(self):
        pass

    @classmethod
    def set(cls, input_string):
        # Check if the input contains the '|' symbol
        if '|' in input_string:
            # Use the original regex pattern to capture three groups: numeric_value, prefix, and unit
            match = re.match(r'^([\d.]+)\s*([^|]*)\|?(.*)$', input_string)
            if match:
                numeric_value, prefix, unit = match.groups()

                numeric_value = float(numeric_value)

                return numeric_value, prefix.strip(), unit.strip()

        else:
            # Use a new regex pattern for the case without '|'
            match = re.match(r'^([\d.]+)\s*(.*)$', input_string)
            if match:
                numeric_value, unit = match.groups()

                numeric_value = float(numeric_value)

                return numeric_value, '', unit.strip()

        raise ValueError("Invalid input string format")