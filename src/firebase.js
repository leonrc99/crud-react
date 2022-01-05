
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCuc_g5tulE4LQVKQ91aBfLN7yr1SygbCo",
  authDomain: "crud-react-b742f.firebaseapp.com",
  projectId: "crud-react-b742f",
  storageBucket: "crud-react-b742f.appspot.com",
  messagingSenderId: "76174502739",
  appId: "1:76174502739:web:5f4dbc72c0d6a905ca8fa6"
};


let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()