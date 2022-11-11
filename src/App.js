import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home  from "./Components/Home/Home";
import { Payment } from "./Components/Payment/Payment";
import { Contact } from "./Components/Contact/Contact";
//import { Description } from "./Components/Description/Desc";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzYJplmMKv7FENN2_lkX2rZ2voF6dtwMU",
  authDomain: "ignitepnp-42ff6.firebaseapp.com",
  projectId: "ignitepnp-42ff6",
  storageBucket: "ignitepnp-42ff6.appspot.com",
  messagingSenderId: "915540276514",
  appId: "1:915540276514:web:caae1d4a801f7244ff617b",
  measurementId: "G-MCCTRR4VEW"
};

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/payment" element={<Payment/>} />
          {/* <Route path="/desc" element={<Description/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase

// const banshaj = async(userd) => {
  // try {
    //   const docRef = await addDoc(collection(db, "users"), {
      //     first: "Ada",
      //     last: "Lovelace",
      //     born: 1815
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }
        // }

        
const banshaj = async(userd) => {
        const db = getFirestore(app);
        firebase.firestore().collection("users").doc(documentId).get().then((snapshot) => {
          console.log(snapshot.data())
        }).catch((e) => console.log(e))
        // const docRef = doc(db, "users", "Lovelace");
        // const docSnap = await getDoc(docRef);
        
        // if(docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        // } else {
        //   console.log("No such document!");
        // }
};        
banshaj();
        export default App;
        