import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const config = {
    apiKey: process.env.CREATE_REACT_API_KEY,
    authDomain: process.env.CREATE_REACT_API_KEY,
    databaseURL: process.env.CREATE_REACT_DATABASE_URL,
    projectId: process.env.CREATE_REACT_PROJECT_ID,
    storageBucket: process.env.CREATE_REACT_STORAGE_BUCKET,
    messagingSenderId: process.env.CREATE_REACT_MESSENGING_SENDER_ID,
    appId: process.env.CREATE_REACT_APP_ID,
    measurementId: process.env.CREATE_REACT_MEASUREMENT_ID
  };

export const app = firebase.initializeApp(config);
export const db = firebase.firestore();