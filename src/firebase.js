import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDWBzvKg1f8-8Ijsyi5JoU6oYDziSZ3EyQ",
    authDomain: "test-app-4b520.firebaseapp.com",
    databaseURL: "https://test-app-4b520-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-app-4b520",
    storageBucket: "test-app-4b520.appspot.com",
    messagingSenderId: "116274295112",
    appId: "1:116274295112:web:c21a041c70eff0d216c37d",
    measurementId: "G-4NWJQVGJPY"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;