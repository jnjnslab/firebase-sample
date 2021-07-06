import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

# Use a service account
cred = credentials.Certificate('firebase.json')

firebase_admin.initialize_app(cred, {
    'storageBucket': 'xxxx.appspot.com'
})

bucket = storage.bucket()

all_blobs = bucket.getFiles()

for blob in all_blobs:
    print(blob.name)
