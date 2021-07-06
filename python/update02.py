import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

city_ref = db.collection(u'cities').document(u'DC')

# 配列の要素を追加する
# Atomically add a new region to the 'regions' array field.
city_ref.update({u'regions': firestore.ArrayUnion([u'greater_virginia'])})