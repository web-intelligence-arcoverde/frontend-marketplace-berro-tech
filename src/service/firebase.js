import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnpVIF75FIbibREczg1w86OwqVXn9zFUM',
  authDomain: 'berrotech-df084.firebaseapp.com',
  projectId: 'berrotech-df084',
  storageBucket: 'berrotech-df084.appspot.com',
  messagingSenderId: '766145534601',
  appId: '1:766145534601:web:365a1a4b3d493775288458',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export {firebase, auth, app};
