import firebase from 'firebase';

// Initialize Firebase
 const config = {
   apiKey: "AIzaSyCItw6TzPN4FkWfPg8HbE5xNSDpUMROb1A",
   authDomain: "workshop-b0ef7.firebaseapp.com",
   databaseURL: "https://workshop-b0ef7.firebaseio.com",
   projectId: "workshop-b0ef7",
   storageBucket: "workshop-b0ef7.appspot.com",
   messagingSenderId: "833417485573"
 };
 const fire = firebase.initializeApp(config);

 export default fire;
