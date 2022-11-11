import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home  from "./Components/Home/Home";
import { Payment } from "./Components/Payment/Payment";
import { Contact } from "./Components/Contact/Contact";
// import Modelv from "./Components/3dModel/gltf";

//import { Description } from "./Components/Description/Desc";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from 'firebase/app';

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
          {/* <Route path="/model" element={<Modelv/>} /> */}
          {/* <Route path="/desc" element={<Description/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

const app = initializeApp(firebaseConfig);

export default App;
