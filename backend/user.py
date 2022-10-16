from recipe import Recipe
from enum import Enum
from database import DatabaseConstants


from food import Restriction_Categories, Recipe_Categories

class User:
    def __init__(self, restrictions, cuisine : str, recipe_category=Recipe_Categories.ALL):
        """TODO: Pull from Firebase
        """
        self.restrictions = restrictions
        self.cuisine = cuisine
        self.recipe_category = recipe_category
        self.saved_recipies = []
        self.update_recipe_prefs()

    def get_priority(self, recipe : Recipe) -> float:
        if any(restriction in recipe.allergens for restriction in self.restrictions):
            return -2.0
        if (recipe.category != self.recipe_category) and (self.recipe_category != Recipe_Categories.ALL):
            return -1.0
        # The above is handled by update_recipe_prefs()
        
        if self.cuisine is None:
            priority = 3.0
        else:
            if (recipe.cuisine == self.cuisine):
                priority = 5.0
            else:
                priority = 3.0

        #priority -= sum(restriction in recipe for restriction in self.restrictions_preference)
        priority *= recipe.rating
        
        return priority

    def update_recipe_prefs(self):
        self.recipies_sorted = sorted((recipe for recipe in DatabaseConstants.ALL_RECIPIES if self.get_priority(recipe) != -2.0), key=lambda recipe : self.get_priority(recipe))
        
        #if self.recipe_category == Recipe_Categories.ALL:
        #    self.recipies_sorted = sorted(ALL_RECIPIES, key=lambda recipe : self.get_priority(recipe))
        #else:
        #    self.recipies_sorted = sorted((recipe for recipe in ALL_RECIPIES if self.recipe_category == recipe.category), key=lambda recipe : self.get_priority(recipe))

    def get_recipies(self):
        """ Get the recipies of highest priority for a given user's preferences
        """
        for recipe in self.recipies_sorted:
            yield recipe

    
        
        
        
        

