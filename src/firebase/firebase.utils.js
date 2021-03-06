import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyAdHKlXpM3VmmOc1NR7AjsB5YS7DEQmf1Y",
    authDomain: "react-ecommerce-web.firebaseapp.com",
    databaseURL: "https://react-ecommerce-web.firebaseio.com",
    projectId: "react-ecommerce-web",
    storageBucket: "react-ecommerce-web.appspot.com",
    messagingSenderId: "73496187721",
    appId: "1:73496187721:web:901df4a35cc6b2aa7c4098",
    measurementId: "G-TEZTBRP4S3"
  }

  export  const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
      
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, email,createdAt, ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }
return userRef;

  }

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;