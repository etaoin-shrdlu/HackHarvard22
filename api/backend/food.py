from enum import Enum

class Restriction_Categories():
    @staticmethod
    def str_to_enum(name : str):
        lookup_table = {
            'Dairy': 1,
            'Egg': 2,
            'Fish': 3,
            'Shellfish': 4,
            'Tree Nuts': 5,
            'Peanuts': 6,
            'Wheat': 7,
            'Soy': 8,
            'Meat': 9,
            'Gluten': 10,
            'Red Meat': 11
        }
        return lookup_table[name]

    @staticmethod
    def strs_to_enum(names : str):
        return [Restriction_Categories.str_to_enum(name.strip()) for name in names.split(';')]
    
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
    @staticmethod
    def str_to_enum(name : str):
        lookup_table = { #CSV file format to enum
            'All': Recipe_Categories.ALL,
            'Entree': Recipe_Categories.ENTREE,
            'Sides': Recipe_Categories.SIDE,
            'Dessert': Recipe_Categories.DESSERT
        }
        return lookup_table[name]

    def __str__(self):
        lookup_table = { #Enum to Frontend display string
            Recipe_Categories.ALL: 'All',
            Recipe_Categories.ENTREE: 'Entree',
            Recipe_Categories.SIDE: 'Appetizer',
            Recipe_Categories.DESSERT: 'Dessert'
        }
        return lookup_table[self]

    ALL = 0
    ENTREE = 1
    SIDE = 2
    DESSERT = 3

class Ingredient:
    def __init__(self, name : str, allergens):
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