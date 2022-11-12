import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home  from "./Components/Home/Home";
import { Payment } from "./Components/Payment/Payment";
import { Contact } from "./Components/Contact/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBzYJplmMKv7FENN2_lkX2rZ2voF6dtwMU",
  authDomain: "ignitepnp-42ff6.firebaseapp.com",
  projectId: "ignitepnp-42ff6",
  storageBucket: "ignitepnp-42ff6.appspot.com",
  messagingSenderId: "915540276514",
  appId: "1:915540276514:web:caae1d4a801f7244ff617b",
  measurementId: "G-MCCTRR4VEW"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers(db) {
  const users = collection(db, 'users');
  const userSnapshot = await getDocs(users);
  const userList = userSnapshot.docs.map(doc => doc.data());
  console.log(userList);
}

getUsers(db);

function App() {
  const [product, setProduct] = useState({
    name: "mahima",
    price: 10,
  });
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/payment"
            element={
              <>
                <Payment />
                
              </>
            }
          />
          <Route path="/desc" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
