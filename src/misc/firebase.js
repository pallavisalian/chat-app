import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyCmWkVwouMYVX9OE58SbK3zFfub528hE5E',
  authDomain: 'chat-web-app-fcd51.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-fcd51-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-fcd51',
  storageBucket: 'chat-web-app-fcd51.appspot.com',
  messagingSenderId: '159536743898',
  appId: '1:159536743898:web:b610e281be3b51bed5ace3',
};

const app = firebase.initializeApp(config);
