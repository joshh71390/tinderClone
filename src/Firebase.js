import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQ11P3uKVKXyLDABeZBJ3VxJO6Q1XKGRE",
    authDomain: "tinder-clone-2967f.firebaseapp.com",
    projectId: "tinder-clone-2967f",
    storageBucket: "tinder-clone-2967f.appspot.com",
    messagingSenderId: "670584000437",
    appId: "1:670584000437:web:9f3f720bf687074a8d53fc",
    measurementId: "G-0S598ZLXRJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  const auth = firebase.auth()
  export {auth}
  export default database;