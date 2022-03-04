import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


//step 1 -> put your .env in the git igore 

// step 2 
require('dotenv').config()

//

const firebaseConfig = {
      apiKey: process.env.FIRE_APIKEY,
      authDomain: process.env.FIRE_AUTHDOMAIN,
      databaseURL: process.env.FIRE_DATABASEURL,
      projectId: process.env.FIRE_PROJECTID,
      storageBucket: process.env.FIRE_STORAGEBUCKET,
      messagingSenderId: process.env.FIRE_MESSAGINGSENDERID,
      appId: process.env.FIRE_APPID
}

// https://github.com/dotenv-org/examples/tree/master/dotenv-nodejs

// now make a file in the root directory named .env 
// inside set it up as so 

// KEY=value
// KEY=value



// replace your front facing code that you want to hide (*not the truest purpost of .env but 99.95 percent safter then putting your keys below... bots will parse them then just crush you...)


// const firebaseConfig = {
//     apiKey: "AIzaSyBQ11P3uKVKXyLDABeZBJ3VxJO6Q1XKGRE",
//     authDomain: "tinder-clone-2967f.firebaseapp.com",
//     projectId: "tinder-clone-2967f",
//     storageBucket: "tinder-clone-2967f.appspot.com",
//     messagingSenderId: "670584000437",
//     appId: "1:670584000437:web:9f3f720bf687074a8d53fc",
//     measurementId: "G-0S598ZLXRJ"
//   };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  const auth = firebase.auth()
  export {auth}
  export default database;
