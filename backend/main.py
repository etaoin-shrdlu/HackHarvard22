import csv

from user import User
from recipe import Recipe

class Database:
    def recipe_generator():
        recipies_file = csv.reader('recipies.csv')
        next(recipies_file) # Skip the first line
        for recipe in recipies_file:
            yield Recipe(
                name=recipe[0],
                
            )
            
    ALL_RECIPIES = [recipe for recipe in recipe_generator]
        






if __name__ == '__main__':
    u = User(

    )

