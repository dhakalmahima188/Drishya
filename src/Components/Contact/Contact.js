import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <Card>
        <Card.Header>
          
          <Card.Title>Contact us</Card.Title>
          <Card.Text>
            <h6> Name: PNP</h6>
            <h6> Location:</h6>
            <h6> Phone No: 9742357373</h6>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Header>
        <Card.Title> Please Enter Your Query For More</Card.Title>
        <Card.Body>
         
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Your message"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <button
                className="bg-blue-500 text-black active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};
