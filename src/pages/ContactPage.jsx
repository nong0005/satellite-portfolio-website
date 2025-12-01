import React from "react";
import ContactForm from "../components/ContactForm";
import AnimatedGradient from "../components/AnimatedGradient";
import "../styles/contact.css";

const ContactPage = () => {
  const getLocalTime = () => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Toronto",
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date());
  };

  return (
    <div className="min-h-screen bg-[var(--color-white)] py-16">

      {/* Page Title */}
      <h1 className="contact-page-title">Contact Me</h1>

      {/* Main container */}
      <div className="contact-page-container">

        {/* Grid */}
        <div className="contact-wrapper">

          {/* LEFT: Contact Form */}
          <AnimatedGradient className="contact-gradient">
            <div className="contact-card">

              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--color-secondary)] 
                text-center md:text-left"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let’s create something amazing together
              </h2>

              <p className="text-[var(--color-secondary)] mb-8 text-lg text-center md:text-left">
                I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </AnimatedGradient>

          {/* RIGHT: Profile Section */}
          <AnimatedGradient className="contact-gradient">
            <div className="contact-card text-[var(--color-secondary)] flex flex-col items-center md:items-start gap-6">

              <img
                src="/images/satellite-headshot.png"
                alt="Satellite"
                className="contact-profile-img"
              />

              <div className="w-16 h-1 bg-[var(--color-secondary)] rounded-full"></div>

              <div className="flex flex-col gap-4 w-full items-center md:items-start text-center md:text-left">

                <a
                  href="mailto:nong0005@algonquinlive.com"
                  className="btn-secondary w-full sm:w-auto px-4 py-2 break-words whitespace-normal"
                >
                  nong0005@algonquinlive.com
                </a>

                <a
                  href="tel:+3435582283"
                  className="btn-secondary w-full sm:w-auto px-4 py-2 break-words whitespace-normal"
                >
                  +343 5582283
                </a>

                <div>
                  <span className="font-bold">Address:</span> Ottawa, Canada
                </div>

                <div>
                  <span className="font-bold">Local Time:</span> {getLocalTime()} EST
                </div>

              </div>
            </div>
          </AnimatedGradient>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;