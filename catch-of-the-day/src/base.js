import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAzj1Wc8E08KX_jBzSHO50S_8OKRDfhGWk',
    authDomain: 'catch-of-the-day-sztxr.firebaseapp.com',
    databaseURL: 'https://catch-of-the-day-sztxr.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;