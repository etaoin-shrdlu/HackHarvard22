#python3 -m pip install firebase-admin
import json

from backend.user import User
from backend.food import Recipe_Categories, Restriction_Categories

import firebase_admin
from firebase_admin import credentials, firestore


def main():
    rh = RequestHandler()
    #rh.addUser(u'user123', '', 'test@example.org', [])
    #rh.addUser(u'bman', 'Bob', 'ajsdfa@gmail.com', [])
    #rh.addUser(u'thebest', 'Rob', 'test2@example.org', [1])
    #rh.addUser(u'nbclark', 'Nathan', 'nathan.clark@example.org', [1, 2, 8])
    print(rh.user('nbclark'))
    
    rh.handleRequest({
        'username': 'nbclark',
        'cuisine': None,
        'category': None
    })

    """
    me : User = User(
        restrictions_strict=['Egg','Dairy'],
        restrictions_preference=[],
        skill_level=0
    )
    for recipe in me.get_recipies():
        print(recipe)
    """

class RequestHandler():
    def __init__(self):
        cred = credentials.Certificate("serviceAccountKey.json")
        #TODO: generate new private keys after end of Hackathon to maintain security
        self.app = firebase_admin.initialize_app(cred, name='request_handler')
        self.db = firestore.client(self.app)
        self.users_ref = self.db.collection(u'users')
        self.user_recipes = {}

    def user(self, username : str, cuisine=None, category=None):
        docs = self.db.collection(u'users').where(u'username', u'==', username).stream()
        try:
            user = next(docs)
        except:
            return LookupError('User not found')
        restrictions = user.get('restrictions')
        return User(
            restrictions=restrictions,
            cuisine=cuisine,
            recipe_category=category
        )

    def handleRequest(self, request):
        """
            accepts JSON data or a dict in the following format:

                username: "username"
                category: "..."
                cuisine_preference: "..."

            returns the next recipe this user would have to view as a dictionary ? JSON object ?
        """
        username = request['username']
        user : User = self.user(username)
        category = request['category']
        cuisine_preference = request['cuisine_preference']
        if username not in self.user_recipes:
            self.user_recipes[username] = user.get_recipies()
        
        return next(self.user_recipes[username])

        
    def addUser(self, username, name, email, restrictions):
        doc_ref = self.users_ref.document(username)
        doc_ref.set({
            u'username': username,
            u'name': name,
            u'email': email,
            u'restrictions': restrictions
        })

if __name__ == '__main__':
    main()