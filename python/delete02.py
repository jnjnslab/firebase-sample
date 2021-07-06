import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# フィールドを削除する
city_ref = db.collection(u'cities').document(u'BJ')
city_ref.update({
    u'capital': firestore.DELETE_FIELD
})