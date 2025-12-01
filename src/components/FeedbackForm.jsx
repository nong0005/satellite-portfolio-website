import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !feedback) return alert("Please fill out all fields.");

    setLoading(true);
    const timestamp = new Date().toLocaleString();

    emailjs
      .send(
        "service_jigu2ji",       // Your EmailJS Service ID
        "template_nasyf2v",      // Replace with your EmailJS Template ID
        { name, message: feedback, time: timestamp },
        "x6kxd62hhmdKrL3Hm"        // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSent(true);
          setName("");
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
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3 text-sm"
          />
          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border rounded-lg p-3 resize-none h-24 text-sm"
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