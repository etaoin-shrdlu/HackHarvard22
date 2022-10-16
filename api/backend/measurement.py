from enum import Enum
from fractions import Fraction

class Units(Enum):
    CUP = 0
    TABLESPOONS = 1
    TEASPOONS = 2
    OZ = 3
    OUNCES = 4
    POUNDS = 5
    NUM = 6

class Measurement:
    def __init__(self, num : Fraction, units : Units):
        if num is float:
            num = Fraction(num)
        self.n = num
        self.units = units

    def __str__(self):
        return str(self.n) + " of " + self.units.name