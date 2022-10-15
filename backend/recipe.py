from user import User

class Recipe:
    def __init__(self, description : str, imgs, ingredients, directions, calories):
        self.description = description
        self.imgs = imgs
        self.ingredients = ingredients
        self.directions = directions
        self.calories = calories
        self.ratings = []

        self.tags = []

    def get_priority(self, user : User) -> float:
        
        
        
        return priority