// Import stylesheets
import './style.css';
import firebase from 'firebase';
firebase.initializeApp({
  databaseURL: 'https://mt-iot-brn.firebaseio.com/',
});
let ref = firebase.database().ref('Tanks');
const app2 = document.getElementById('app2');
ref.on('value',(snapshot) => {
app2.innerHTML = snapshot.child('tank1').val();
});
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Tank water level</h1>`;