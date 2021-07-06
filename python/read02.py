import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firebase.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'cities').document(u'SF')
doc = doc_ref.get()
if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print(u'No such document!')
