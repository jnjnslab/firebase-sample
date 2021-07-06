import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

washington_ref = db.collection(u'cities').document(u'DC')

# 数値を増やす
washington_ref.update({"population": firestore.Increment(50)})