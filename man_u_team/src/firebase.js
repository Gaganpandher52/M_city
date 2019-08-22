import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCbdXo9QwRjTjKe48OakRseyvD8XgJu5bk",
  authDomain: "m-city-2dd85.firebaseapp.com",
  databaseURL: "https://m-city-2dd85.firebaseio.com",
  projectId: "m-city-2dd85",
  storageBucket: "",
  messagingSenderId: "959992814217",
  appId: "1:959992814217:web:5fd9d851dd1e6213"
};

firebase.initializeApp(firebaseConfig)

const firebaseDB = firebase.database()

firebaseDB.ref('matches').once('value').then((snapshot)=>{
  console.log(snapshot.val())


   
})