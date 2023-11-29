class FlowRate:
    UNIT_CONVERSION_FACTORS = {
        'm3/s': 1.0,      # cubic meters per second (base unit)
        'L/min': 1 / 60000.0,  # liters per minute
        'gal/min': 0.264172,  # gallons per minute
        # Add more units and conversion factors as needed
    }

    def __init__(self, value, unit='m3/s'):
        self.value = value
        self.unit = unit

    def __str__(self):
        return f'{self.value} {self.unit}'

    def convert_units(self, new_unit):
        if new_unit not in self.UNIT_CONVERSION_FACTORS:
            raise ValueError(f"Unsupported unit: {new_unit}")

        conversion_factor = self.UNIT_CONVERSION_FACTORS[new_unit] / self.UNIT_CONVERSION_FACTORS[self.unit]
        self.value *= conversion_factor
        self.unit = new_unit

# Example Usage:
flow_rate = FlowRate(value=0.01, unit='m3/s')
print("Initial Flow Rate:", flow_rate)

# Convert units
flow_rate.convert_units('L/min')
print("Converted Flow Rate:", flow_rate)
