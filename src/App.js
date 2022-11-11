import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Payment } from "./Components/Payment/Payment";
import { Contact } from "./Components/Contact/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function App() {
  const [product, setProduct] = useState({
    name: "mahima",
    price: 10,
  });
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/pay`, {
      method: "  POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("status", status);
      })
      .catch((err) => console.log("error"));
  };

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
                <StripeCheckout
                  stripeKey="pk_test_51M2tsDEkKK5QsPCeUrjHOWxDwTrFdPQEXZz7WY6ZCi0zbvWgos14kFzySODxqaWnIXfU1lZZsYjpBmMBWtzUk0Y600rMEEYJd8"
                  token={makePayment}
                  name="Spectacle brand 1"
                  amount={product.price}
                >
                  <button className="btn-large pink">
                    buy me at {product.price} $
                  </button>
                </StripeCheckout>
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
