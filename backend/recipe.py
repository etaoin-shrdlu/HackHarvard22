from user import User
from food import Restriction_Categories, Recipe_Categories

class Recipe:
    def __init__(self, name : str, description : str, imgs, allergens: list(Restriction_Categories), ingredients, directions, calories, category : Recipe_Categories):
        self.name = name
        self.description = description
        self.imgs = imgs
        self.allergens = allergens
        self.ingredients = ingredients
        self.directions = directions
        self.calories = calories
        self.category = category
        
        self.rating = 5.0

        self.tags = [

        ]

