from user import User
from recipe import Recipe

class Database:
    ALL_RECIPIES = [
        Recipe()
    ]
    DESSERT_RECIPIES = [
        
    ]
    ENTREE_RECIPIES = [

    ]







r = Recipe()
u = User()

u.get_recipies()

r.get_priority(u.prefs)





if __name__ == '__main__':
    pass