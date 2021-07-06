import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

city_ref = db.collection(u'cities').document(u'LA')

# 一部のフィールドを更新する
# Set the capital field
city_ref.update({u'capital': True})