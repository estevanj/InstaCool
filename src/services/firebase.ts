import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyByEL1lD3hRy9ZZk9Hhv-eRwtD41s1lle4",
    authDomain: "instacool-30d46.firebaseapp.com",
    databaseURL: "https://instacool-30d46.firebaseio.com",
    messagingSenderId: "652990471640",
    projectId: "instacool-30d46",
    storageBucket: "instacool-30d46.appspot.com",
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();