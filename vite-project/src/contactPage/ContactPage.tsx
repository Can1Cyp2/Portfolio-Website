import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <div className="contact-info-item left">
          <h3>Email</h3>
          <p>yourname@example.com</p>
        </div>
        <div className="contact-info-item right">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-info-item left">
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/your-profile
            </a>
          </p>
        </div>
        <div className="contact-info-item right">
          <h3>Location</h3>
          <p>City, Country</p>
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
  );
};

export default ContactPage;
