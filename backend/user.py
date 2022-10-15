from recipe import Recipe
from enum import Enum
from main import Database

class Restriction_Categories(Enum):
    EGG = 0

class User:
    def __init__(self, **kwargs : ...):
        
        

        self.update_recipe_prefs()

    def update_recipe_prefs(self):
        self.recipies_sorted = sorted(Database.ALL_RECIPIES, key=lambda recipe : recipe.get_priority(self))

    def get_recipies():
        """ Get the recipies of highest priority for a given user's preferences
        """
        max_recipe_priority = -1
        
        
        
        

