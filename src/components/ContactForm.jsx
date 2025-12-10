// src/components/ContactForm.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      subject: formData.subject
        ? `${formData.subject} (from Portfolio Website)`
        : "(from Portfolio Website)",
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_nm10222", "template_e731q1s", templateParams, "x6kxd62hhmdKrL3Hm")
      .then(
        () => {
          setSuccessMessage(
            `Thank you, ${formData.name || "there"}! Your message has been received. I’ll get back to you soon.`
          );
          setFormData({
            name: "",
            email: "",
            organization: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setSuccessMessage(""), 7000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="relative w-full">
      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium rounded-lg p-4 text-center shadow-lg z-50"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="flex-1 p-3 rounded-lg border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            required
            className="flex-1 p-3 rounded-lg border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization Name (optional)"
            className="flex-1 p-3 rounded-lg border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="flex-1 p-3 rounded-lg border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
          className="p-3 rounded-lg border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          className="btn-primary w-max mt-2 self-center sm:self-start"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}