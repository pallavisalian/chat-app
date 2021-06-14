const functions = require('firebase-functions');

const admin = require('firebase-admin');

const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://chat-web-app-fcd51-default-rtdb.asia-southeast1.firebasedatabase.app',
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.sendFcm =
