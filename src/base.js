import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyAHO5CWkKv81z5hqvGqk3AMW9cZ8tf5sFo',
  authDomain: 'catch-of-the-day-aeab0.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-aeab0.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
