import React, { useState } from "react";
import "./Contact.css";
import logo from "../src/assets/logo.png"; // adjust the path as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error sending message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section"id="contact">
      {!submitted ? (
        <div className="contact-container">
          <h2 className="contact-heading">
            Get in <span>Touch</span>
          </h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      ) : (
        <div className="thankyou-container">
          <img src={logo} alt="Logo" className="thankyou-logo" />
          <h2 className="thankyou-text">THANK YOU!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
