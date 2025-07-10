import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name, // Maps to {{from_name}} in EmailJS template
      reply_to: formData.email, // Maps to {{reply_to}} in EmailJS template
      message: formData.message, // Maps to {{message}} in EmailJS template
      to_name: "Sebastian", // Maps to {{to_name}} in EmailJS template
    };

    emailjs
      .send(
        "service_portfolio", // EmailJS service ID
        "template_v7rdyih", // template ID
        templateParams,
        "TW2CZ1oM6qoDgEhmm" // Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.status, result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form after sending
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert(
            "Failed to send message. Please try again later or email me directly at 99SebastianL@gmail.com"
          );
        }
      );
  };

  return (
    <>
      <Header />
      <section className="contact-page">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <div className="contact-info-item left">
            <h3>Email</h3>
            <p>99SebastianL@gmail.com</p>
          </div>
          <div className="contact-info-item right">
            <h3>Phone</h3>
            <p>(647) 575-3734</p>
          </div>
          <div className="contact-info-item left">
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/sebastian-landry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sebastian-landry/
              </a>
            </p>
          </div>
          <div className="contact-info-item right">
            <h3>Location</h3>
            <p>Toronto, ON, Canada</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Get in Touch</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
