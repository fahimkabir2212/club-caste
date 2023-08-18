import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore} from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBGXUuKtnuDLY9BV-rpOnOSywgHN-upKNU",
  authDomain: "club-caste-auth.firebaseapp.com",
  projectId: "club-caste-auth",
  storageBucket: "club-caste-auth.appspot.com",
  messagingSenderId: "550448021147",
  appId: "1:550448021147:web:1e7e91738e65f1ad2b103e"
})

export const auth = app.auth();
export const db = getFirestore(app);
export default app;