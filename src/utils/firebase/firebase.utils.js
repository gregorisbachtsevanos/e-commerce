import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";

import { 
   getFirestore,
   doc,
   getDoc,
   setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBDdK6y_VizNoUnTi7TSN3gvpJeveRfCC8",
   authDomain: "e-store-app-e6007.firebaseapp.com",
   projectId: "e-store-app-e6007",
   storageBucket: "e-store-app-e6007.appspot.com",
   messagingSenderId: "13537068159",
   appId: "1:13537068159:web:427f432d68e3bb92026b4a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
   prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)  => {
   const userDocRef = doc(db, 'users', userAuth.uid);

   console.log(userDocRef);
   const userSnapshot = await getDoc(userDocRef)
   console.log(userSnapshot.exists());

   if(!userSnapshot.exists()) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
         })
      } catch (error) {
         console.error(error)
      }
   }else{
      return userDocRef
   }

}