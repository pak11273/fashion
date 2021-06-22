import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";
import { firebaseConfig } from "./config";

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig).firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };
