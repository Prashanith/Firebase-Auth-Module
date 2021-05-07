import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBvLBKG1lASa6LIq4495MdQEAebx3vnxsU",
  authDomain: "authentication-modu.firebaseapp.com",
  projectId: "authentication-modu",
  storageBucket: "authentication-modu.appspot.com",
  messagingSenderId: "33174131043",
  appId: "1:33174131043:web:ac1a7703b8d2465887c356"
};

  // Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
const auth=app.auth()

 export {auth, app};