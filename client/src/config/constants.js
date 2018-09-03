import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkhAVgHTbHB1W_l4kFx6xIUj2Pq-mwQnE",
  authDomain: "stacked-dev.firebaseapp.com",
  databaseURL: "https://stacked-dev.firebaseio.com",
  projectId: "stacked-dev",
  storageBucket: "stacked-dev.appspot.com",
  messagingSenderId: "690563714441"
};

/* eslint no-restricted-globals: 0 */
firebase.initializeApp(config);
// const fire = firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth

// export default fire; 