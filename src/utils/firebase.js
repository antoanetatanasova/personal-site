import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCt32-CKB1E9VB8MkW5vhSCTbKpSUEiK8w",
  authDomain: "antoanetatanasova-site.firebaseapp.com",
  projectId: "antoanetatanasova-site",
  storageBucket: "antoanetatanasova-site.appspot.com",
  messagingSenderId: "1005504232222",
  appId: "1:1005504232222:web:ba155cfef218c7213e670f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();