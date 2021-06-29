const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// /A/ https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const express = require('express');
const app = express();

app.use(express.json())

const cors = require('cors')({origin: true});
app.use(cors);

// データベースの参照を作成
var fireStore = admin.firestore()

app.post('/find', (req, res) => {
    let id = req.body.id;

    res.header('Content-Type', 'application/json; charset=utf-8');

    var docRef = fireStore.collection('users').doc(id)
    docRef.get()
    .then(doc => {
      if (!doc.exists) {
        res.send({result: "not found"})
      } else {
        res.status(200).send(doc.data())
      }
    })
    .catch(err => {
      res.send({result: "error"})
    })

});

app.get('/list', (req, res) => {

    res.header('Content-Type', 'application/json; charset=utf-8');

    fireStore.collection('users').onSnapshot((snapshotChange) => {
        let items = new Array();
        snapshotChange.forEach((doc) => {
            items.push({
                key: doc.id,
                name: doc.data().name,
                age: doc.data().age
            })
        });
        res.status(200).send({users: items});
    })

});

app.post('/add', (req, res) => {
    let data = req.body;

    res.header('Content-Type', 'application/json; charset=utf-8');                
    
    fireStore.collection('users').add(data)
    .then(() => {
        res.status(200).send({result: "added"})
    }).catch((error) => {
        res.send({result: error})
    });

});

app.post('/delete', (req, res) => {
    let id = req.body.id;

    res.header('Content-Type', 'application/json; charset=utf-8');

    fireStore.collection('users').doc(id).delete()
    .then(() => {
        res.status(200).send({result: "deleted"})
    })
    .catch((error) => {
        res.send({result: error})
    })

});



exports.v1 = functions.https.onRequest(app);
