import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

data = {
    u'name': u'Tokyo',
    u'country': u'Japan',
    u'population': 9000000,
    u'regions': [u'kanto', u'honshu']
}

db.collection(u'cities').add(data)