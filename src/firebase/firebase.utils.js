import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyC7NokDGv0g71J9EqhlUTzIs0cTrsn6pw8",
    authDomain: "petshop-db-5473f.firebaseapp.com",
    projectId: "petshop-db-5473f",
    storageBucket: "petshop-db-5473f.appspot.com",
    messagingSenderId: "618818997245",
    appId: "1:618818997245:web:fa9317b0da4e0d5e042794"
  }


 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({promp:'select_account'});
 export const signInWithbGoogle = ()=> auth.signInWithPopup(provider);

 export default firebase;
