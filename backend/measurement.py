from enum import Enum
from fractions import Fraction

class Units(Enum):
    CUP = 0
    TABLESPOONS = 1
    ...

class Measurement:
    #UNIT_CONVERSIONS = [
    #    ...
    #]
    def __init__(self, num : Fraction, units : Units):
        if num is float:
            num = Fraction(num)
        self.n = num
        self.units = units

    def __str__(self):
        return str(self.num) + self.units.name
        

    #def get_amount(self):
    #    """ Return the amount in an arbitrary unit for comparisons
    #    """
    #    return self.n * self.UNIT_CONVERSIONS[self.units]