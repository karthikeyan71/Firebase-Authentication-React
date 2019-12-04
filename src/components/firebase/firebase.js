import app from 'firebase/app';
import 'firebase/auth';
import config from '../../config';

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID
};

export default class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();

    console.log(this.auth);
  }

  newUserCreation = ( email, password ) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInUser = ( email, password ) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOutUser = () => {
    return this.auth.signOut();
  }

  passwordReset = async (email) => {
    console.log(email);
    return await this.auth.sendPasswordResetEmail(email);
  }

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

}
