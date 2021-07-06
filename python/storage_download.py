import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

# Use a service account
cred = credentials.Certificate('firebase.json')

firebase_admin.initialize_app(cred, {
    'storageBucket': 'xxxx.appspot.com'
})

bucket = storage.bucket()
#ダウンロード元
blob = bucket.blob("zophie.jpg")
#ダウンロード先
blob.download_to_filename(r"download/zophie.jpg")