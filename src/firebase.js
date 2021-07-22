import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyArrKuNuCyq3aqlI8K288GPR2ASoeK1yuA',
  authDomain: 'arpositions-44ac8.firebaseapp.com',
  databaseURL:
    'https://arpositions-44ac8-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'arpositions-44ac8',
  storageBucket: 'arpositions-44ac8.appspot.com',
  messagingSenderId: '258478185358',
  appId: '1:258478185358:web:f3e2b4a96322609fa7e2df',
  measurementId: 'G-NG3GRNQ5M1'
};

firebase.initializeApp(config);

export default firebase;
