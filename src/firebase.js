// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDph2SDwdpAkUaT1UrWsW0h4p4VXMhxk6g",
  authDomain: "markdown-previewer-682fd.firebaseapp.com",
  databaseURL: "https://markdown-previewer-682fd.firebaseio.com",
  projectId: "markdown-previewer-682fd",
  storageBucket: "markdown-previewer-682fd.appspot.com",
  messagingSenderId: "172467199477",
  appId: "1:172467199477:web:72b032e3d5d7e0ea12d4bc",
  measurementId: "G-2HSTEM6T4W",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
