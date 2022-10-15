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
                ingredients=recipe[3][1:-1].split(';'),
                directions=recipe[4][1:-1].replace(';', '\n'),
                calories=int(recipe[5]),
                prep_time=int(recipe[6]),
                category=Recipe_Categories(recipe[7]),
                cuisine=recipe[8],
                skill=recipe[9]
            )
            
    ALL_RECIPIES = [recipe for recipe in recipe_generator]
        






if __name__ == '__main__':
    u = User(

    )

