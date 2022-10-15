from enum import Enum

class Units(Enum):
    CUP = 0
    TABLESPOONS = 0
    ...

class Measurement:
    UNIT_CONVERSIONS = [
        ...
    ]
    def __init__(self, num : float, units : Units)
        self.n = num
        self.units = units

    def get_amount(self):
        """ Return the amount in an arbitrary unit for comparisons
        """
        return self.n * self.UNIT_CONVERSIONS[self.units]