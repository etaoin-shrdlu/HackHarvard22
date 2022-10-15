from user import User

class Recipe:
    def __init__(self, name : str, description : str, imgs, ingredients, directions, calories, category):
        self.name = name
        self.description = description
        self.imgs = imgs
        self.ingredients = ingredients
        self.directions = directions
        self.calories = calories
        self.category = category
        
        self.ratings = []

        self.tags = []
