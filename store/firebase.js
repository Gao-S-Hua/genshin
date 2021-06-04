import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMoe_-_P_2y3EVqBcnV-CZ0D4gEINyAn0",
  authDomain: "genshin-4632b.firebaseapp.com",
  projectId: "genshin-4632b",
  storageBucket: "genshin-4632b.appspot.com",
  messagingSenderId: "205986429226",
  appId: "1:205986429226:web:dda183b983b2a08f778653",
  measurementId: "G-JEQ1EMKXNZ"
};
if (firebase.apps.length === 0) { // This is to avoid multiple init
  firebase.initializeApp(firebaseConfig);
}

export default firebase;