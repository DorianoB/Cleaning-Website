import { useState } from "react";
import ReactDOM from "react-dom/client";
import quote from "../images/quote.jpg";

export default function QuoteForm({ submitUrl }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for submitting your details");
    fetch("http://localhost:3001/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        address: inputs.address,
        beds: inputs.beds,
        bathrooms: inputs.bathrooms,
        gym: inputs.gym,
        pool: inputs.pool,
        bbq: inputs.bbq,
        comments: inputs.comments,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label id="firstname">
            First Name:{" "}
            <input
              id="firstname"
              required
              type="text"
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleChange}
            />
          </label>

          <label id="lastname">
            Last Name:{" "}
            <input
              id="lastname"
              required
              type="text"
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleChange}
            />
          </label>

          <label id="email">
            Email:{" "}
            <input
              id="email"
              required
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
          <label id="phone">
            Phone:{" "}
            <input
              id="phone"
              required
              type="text"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
          </label>
          <label id="address">
            Property Address:{" "}
            <input
              id="address"
              type="text"
              name="address"
              value={inputs.address || ""}
              onChange={handleChange}
            />
          </label>
          <p id="size">Property Size</p>
          <label id="beds">
            Bedrooms:{" "}
            <input
              id="beds"
              required
              type="text"
              name="beds"
              value={inputs.beds || ""}
              onChange={handleChange}
            />
          </label>
          <label id="baths">
            Bathrooms:{" "}
            <input
              id="baths"
              required
              type="text"
              name="bathrooms"
              value={inputs.bathrooms || ""}
              onChange={handleChange}
            />
          </label>
          <p id="size">Facilities</p>
          <div className="checkbox">
            <input
              id="gym"
              type="radio"
              name="gym"
              value={inputs.gym || ""}
              onChange={handleChange}
            />
            <label>Gym</label>
            <input
              id="pool"
              type="radio"
              name="pool"
              value={inputs.pool || ""}
              onChange={handleChange}
            />
            <label>Pool</label>
            <input
              id="bbq"
              type="radio"
              name="bbq"
              value={inputs.bbq || ""}
              onChange={handleChange}
            />
            <label>BBQ area</label>
          </div>
          <label id="comments">
            Tell us about your needs:{" "}
            <textarea
              id="comment"
              required
              type="text"
              name="comments"
              value={inputs.comments || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <input id="submit" type="submit" value={"Contact us"} />
        </fieldset>
      </form>
      <img className="quotepic" src={quote} />
    </>
  );
}
