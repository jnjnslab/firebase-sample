import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

data = {
    u'name': u'Los Angeles',
    u'state': u'CA',
    u'country': u'USA',
    u'population': 3900000,
    u'regions': [u'west_coast', u'socal']
}

db.collection(u'cities').document(u'LA').set(data)
