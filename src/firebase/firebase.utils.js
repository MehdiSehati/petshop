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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) =>{
  const CollectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  
  objectsToAdd.forEach(obj=> {
    const newDocRef = CollectionRef.doc();
    batch.set(newDocRef,obj);
    }
    );

return await batch.commit()
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
