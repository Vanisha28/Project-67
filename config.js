import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
    apiKey: "AIzaSyAYFx7ra-HrfM4EtWSgyJVlTnqmePeuPOA",
    authDomain: "project-67-5dc83.firebaseapp.com",
    projectId: "project-67-5dc83",
    storageBucket: "project-67-5dc83.appspot.com",
    messagingSenderId: "522299952217",
    appId: "1:522299952217:web:0d8e3e213ac5f48502f548"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();