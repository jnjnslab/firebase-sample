import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

# Use a service account
cred = credentials.Certificate('firebase.json')

firebase_admin.initialize_app(cred, {
    'storageBucket': 'xxxx.appspot.com'
})

bucket = storage.bucket()
#アップロード先
blob = bucket.blob("zophie.jpg")
#アップロード元
blob.upload_from_filename(r"images/zophie.jpg")

