from enum import Enum

class Restriction_Categories(Enum):
    def __init__(self, name : str):
        pass#return Restriction_Categories.
    UNKOWN = -1
    
    DAIRY = 1
    EGG = 2
    FISH = 3
    SHELLFISH = 4
    TREE_NUTS = 5
    PEANUTS = 6
    WHEAT = 7
    SOY = 8
    MEAT = 9 # not including fish
    GLUTEN = 10
    RED_MEAT = 11 # always extends MEAT

class Recipe_Categories(Enum):
    ALL = 0
    ENTREES = 1
    SIDES = 2
    DESSERTS =3

class Ingredient:
    def __init__(self, name : str, allergens : list(Restriction_Categories)):
        self.name = name
        if Restriction_Categories.MEAT not in allergens and Restriction_Categories.RED_MEAT in allergens:
            allergens += Restriction_Categories.MEAT
        self.allergens = allergens

    def __eq__(self, x):
        if x is Ingredient:
            x : Ingredient = x
            return (self.name == x.name) and (self.allergens == x.allergens)
        elif x is int:
            return (x in self.allergens)
        else:
            raise ValueError(f"Can't compare Ingredient to type {type(x)}")