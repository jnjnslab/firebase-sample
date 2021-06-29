import firebase from "firebase";

//const settings = { timestampsInSnapshots: true };

var firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings(settings);

//export const db = firebase.firestore();
export const fire = firebase;