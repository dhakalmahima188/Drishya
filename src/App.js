import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Payment } from "./Components/Payment/Payment";
import { Contact } from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/desc" element={<Payment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
