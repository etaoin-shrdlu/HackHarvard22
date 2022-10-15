from enum import Enum

class Units(Enum):
    CUP = 0
    TABLESPOONS = 0
    ...

class Measurement:
    def __init__(self, num : float, units : )