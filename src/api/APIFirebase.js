// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA69_VSzRhqjIWBA95YgBv5a3Qhz9Tc-os",
  authDomain: "ecommercetappi.firebaseapp.com",
  projectId: "ecommercetappi",
  storageBucket: "ecommercetappi.appspot.com",
  messagingSenderId: "400809455091",
  appId: "1:400809455091:web:1317806df7dfdab607f686"
};



 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //seleccionar la db de firestore
 const db =getFirestore(app);
 const colRef =collection(db,'productos');
 getDocs(colRef).then((snapshot) => {
 
   console.log('>>snapshot.docs: ',snapshot.data);
   const productosConFormato =snapshot.docs.map((rawDoc) =>{

     return {

       id:rawDoc.id,
       ...rawDoc.data()

     }
   });
 }, (error) => {
 
 });
 
 console.log(colRef);