from re import S
from user import User
from food import Restriction_Categories, Recipe_Categories

class Recipe:
    def __init__(self, name : str, description : str, imgs, allergens: list(Restriction_Categories), ingredients, directions, calories : int, prep_time : int, category : Recipe_Categories, cuisine : str, skill : str):
        self.name = name
        self.description = description
        self.imgs = imgs
        self.allergens = allergens
        self.ingredients = ingredients
        self.directions = directions
        self.calories = calories
        self.category = category
        self.cuisine = cuisine
        self.skill = skill
        
        self.rating = 5.0

        self.tags = [

        ]

