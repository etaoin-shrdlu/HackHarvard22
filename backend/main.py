#python3 -m pip install firebase-admin
import json

from user import User
from food import Recipe_Categories, Restriction_Categories

import firebase_admin
from firebase_admin import credentials, firestore


def main():
    rh = RequestHandler()
    rh.addUser(u'user123')
    


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

    def handleRequest(self, request):
        """
            accepts JSON data or a dict in the following format:

                username: "username"
                category: "..."
                cuisine_preference: "..."

            returns the next recipe this user would have to view as a dictionary ? JSON object ?
        """
        
        username = request['username']
        category = request['category']
        cuisine_preference = request['cuisine_preference']

        
    def addUser(self, username):
        doc_ref = self.db.collection(u'users').document(username)
        doc_ref.set({
            u'username': username,
            u'data': 1234
        })

if __name__ == '__main__':
    main()