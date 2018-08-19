import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB9FQdioqvrk7cNfg1elQ6i6Nsf2_fu2Z8",
  authDomain: "expensify-app-fde84.firebaseapp.com",
  databaseURL: "https://expensify-app-fde84.firebaseio.com",
  projectId: "expensify-app-fde84",
  storageBucket: "expensify-app-fde84.appspot.com",
  messagingSenderId: "932298798307"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default}

