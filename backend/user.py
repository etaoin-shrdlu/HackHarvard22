from recipe import Recipe
from enum import Enum
from main import Database

from food import Restriction_Categories, Recipe_Categories

class User:
    def __init__(self, restrictions_strict : list(Restriction_Categories), restrictions_preference : list(Restriction_Categories), **kwargs : ...):
        
        self.restrictions_strict = restrictions_strict
        self.restrictions_preference = restrictions_preference
        self.recipe_catogry = None
        self.update_recipe_prefs()

    def get_priority(self, recipe : Recipe) -> float:
        if any(restriction in recipe for restriction in self.restrictions_strict):
            return -1.0
        
        priority = 10.0

        priority -= sum(restriction in recipe for restriction in self.restrictions_preference)
        priority *= recipe.rating
        
        return priority

    def update_recipe_prefs(self, category=Recipe_Categories.ALL):
        if category == Recipe_Categories.ALL:
            self.recipies_sorted = sorted(Database.ALL_RECIPIES, key=lambda recipe : self.get_priority(recipe))
        else:
            self.recipies_sorted = sorted((recipe for recipe in Database.ALL_RECIPIES if category == recipe.category), key=lambda recipe : self.get_priority(recipe))

    def get_recipies():
        """ Get the recipies of highest priority for a given user's preferences
        """
        max_recipe_priority = -1
        
        
        
        

