import csv

from recipe import Recipe
from food import Recipe_Categories, Restriction_Categories

class Database:
    def __init__(self):
        self.recipies = [recipe for recipe in self.recipe_generator()]

    def recipe_generator(self):
        with open('recipes.csv') as f:
            recipies_file = csv.reader(f)
            next(recipies_file) # Skip the first line
            for recipe in recipies_file:
                yield Recipe(
                    name=recipe[0],
                    allergens=Restriction_Categories.strs_to_enum(recipe[1]),
                    description=recipe[2],
                    imgs=..., #TODO
                    ingredients=recipe[3][1:-1].split(';'),
                    directions=recipe[4][1:-1].replace(';', '\n'),
                    calories=int(recipe[5]),
                    prep_time=int(recipe[6]),
                    category=Recipe_Categories.str_to_enum(recipe[7]),
                    cuisine=recipe[8],
                    skill=recipe[9]
                )

class DatabaseConstants:
    ALL_RECIPIES = Database().recipies

if __name__ == '__main__':
    d = Database()
    for x in d.recipe_generator():
        print(x)