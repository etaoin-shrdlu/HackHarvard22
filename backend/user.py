from recipe import Recipe
from enum import Enum
from main import Database

from food import Restriction_Categories, Recipe_Categories

class User:
    def __init__(self, restrictions_strict : list(Restriction_Categories), restrictions_preference : list(Restriction_Categories), skill_level : int, **kwargs : ...):
        """TODO: Pull from Firebase
        """
        self.restrictions_strict = restrictions_strict
        self.restrictions_preference = restrictions_preference
        self.recipe_category = Recipe_Categories.ALL
        self.skill_level = 0
        self.saved_recipies = []
        self.update_recipe_prefs()

    def get_priority(self, recipe : Recipe) -> float:
        if any(restriction in recipe for restriction in self.restrictions_strict):
            return -2.0
        if (recipe.category != self.recipe_category) and (self.recipe_category != Recipe_Categories.ALL):
            return -1.0
        
        

        if (recipe.cuisine == ):
            priority = 5.0
        elif (recipe.cuisine == 'General'):

        priority = 

        priority -= sum(restriction in recipe for restriction in self.restrictions_preference)
        priority *= recipe.rating
        
        return priority

    def update_recipe_prefs(self):
        if self.recipe_category == Recipe_Categories.ALL:
            self.recipies_sorted = sorted(Database.ALL_RECIPIES, key=lambda recipe : self.get_priority(recipe))
        else:
            self.recipies_sorted = sorted((recipe for recipe in Database.ALL_RECIPIES if self.recipe_category == recipe.category), key=lambda recipe : self.get_priority(recipe))

    def get_recipies(self):
        """ Get the recipies of highest priority for a given user's preferences
        """
        for recipe in self.recipies_sorted:
            yield recipe

    
        
        
        
        

