// Import stylesheets
import './style.css';
import firebase from 'firebase';
firebase.initializeApp({
  databaseURL: 'https://mt-iot-brn.firebaseio.com/',
});

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Tank water level</h1>`;