from user import User
from food import Recipe_Categories, Restriction_Categories

if __name__ == '__main__':
    user : User = User(
        restrictions=[Restriction_Categories.EGG],
        cuisine=None
    )
    for recipe in user.get_recipies():
        print(recipe)



