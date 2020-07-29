import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/analytics";

const firebaseConfig = () => {
  try {
    const conf = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_FIREBASE_DATABASE,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    };

    firebase.initializeApp(conf);
    firebase.analytics();
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.log('Firebase error: ', error.stack);
    }
  }

  return firebase;
};

export default firebaseConfig;