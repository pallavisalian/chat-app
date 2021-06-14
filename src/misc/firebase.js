// import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
// import 'firebase/functions';
// import { isLocalhost } from './helpers';

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

// export const fcmVapidKey = '';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
// export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BN2RCQTg0pEprNiY9VcKSHIkBL9uR6-fyJamSWc7Qgf78_I-M0r58mHRmndSI_5MuHl3RZYWKSkxEcU61Y0ffww'
  );

  messaging.onMessage(data => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
}
