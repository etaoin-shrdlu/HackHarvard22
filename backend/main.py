import csv
from tkinter import image_names

from user import User
from recipe import Recipe
from food import Recipe_Categories, Restriction_Categories

class Database:
    def recipe_generator():
        recipies_file = csv.reader('recipies.csv')
        next(recipies_file) # Skip the first line
        for recipe in recipies_file:
            yield Recipe(
                name=recipe[0],
                allergens=Restriction_Categories(recipe[1]),
                description=recipe[2],
                imgs=..., #TODO
                ingredients=recipe[3],
                directions=recipe[4],

            )
            
    ALL_RECIPIES = [recipe for recipe in recipe_generator]
        






if __name__ == '__main__':
    u = User(

    )

