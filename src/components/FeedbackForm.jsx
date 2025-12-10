import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    if (!email || !feedback) return alert("Please fill out all fields.");

    setLoading(true);

    const templateParams = {
      email,          // User email collected
      message: feedback,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_jigu2ji",     // Feedback service
        "template_nasyf2v",    // Feedback template
        templateParams,
        "x6kxd62hhmdKrL3Hm"   // Your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          setEmail("");
          setFeedback("");
          setLoading(false);
        },
        (err) => {
          console.error("Email send error:", err);
          alert("Failed to send feedback. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col mt-6 gap-4">
      {sent ? (
        <p className="text-green-600 text-sm">Thank you for your feedback!</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 text-sm"
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border rounded-lg p-3 resize-none h-24 text-sm"
            required
          />
          <button
            className="btn-primary w-full"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>
        </>
      )}
      <p className="text-xs text-gray-600 mt-2">
        Feedback helps us improve continuously. Thank you!
      </p>
    </div>
  );
}