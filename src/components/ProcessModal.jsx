import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FeedbackForm from "./FeedbackForm"; // Import the separate FeedbackForm

export default function ProcessModal({ open, onClose }) {
  const [step, setStep] = useState(0);

  const totalSteps = 8;
  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const progress = ((step + 1) / totalSteps) * 100;

  const slides = [
    // STEP 0 — Context / Hook
    {
      title: "Imagine This…",
      description:
        "You’ve just finished reading an article on your favorite news app and decide it’s time to log out. But when you tap the logout button, things get confusing…",
      content: (
        <div className="w-full flex flex-col items-center mt-6">
          <p className="text-center text-sm text-secondary opacity-80 leading-relaxed">
            Let’s see how a logout experience can leave users puzzled and frustrated.
          </p>
        </div>
      ),
    },

    // STEP 1 — Bad UX
    {
      title: "Confusing Logout Screen",
      description:
        "Here’s a logout screen that users often encounter — vague, cluttered, and stressful.",
      content: (
        <div className="w-full flex justify-center mt-6">
          <div className="bg-[var(--color-accent-light)] border border-gray-300 shadow-md rounded-xl px-6 py-5 w-[310px] text-center">
            <h2 className="font-semibold text-lg italic opacity-90">Logout</h2>
            <p className="mt-2 text-sm italic opacity-70 leading-snug">
              Your session will be ended shortly due to
              <br />
              *something*... maybe inactivity?
            </p>
            <p className="text-xs italic text-red-500 mt-1 opacity-70">
              (This action cannot be undone… probably.)
            </p>
            <div className="mt-3 text-[10px] italic opacity-60">
              Upgrade to Premium to stay logged in longer!
            </div>
            <button className="mt-4 w-full py-2 bg-gray-300 text-gray-700 rounded-lg text-sm italic">
              OK
            </button>
          </div>
        </div>
      ),
    },

    // STEP 2 — UX Analysis
    {
      title: "Why It’s Confusing",
      description:
        "Breaking down the bad UX to understand why users feel uncertain and frustrated.",
      content: (
        <div className="flex flex-col gap-4 mt-6 text-sm text-secondary leading-relaxed">
          <p>• The ‘OK’ button is vague — users don’t know the consequence of clicking it.</p>
          <p>• Extra messaging (ads) distracts from the primary task: logging out.</p>
          <p>• Text like “cannot be undone… probably” creates anxiety and mistrust.</p>
        </div>
      ),
    },

    // STEP 3 — UX Process: Empathize + Define
    {
      title: "UX Process — Understanding Users",
      description:
        "Phase 1 & 2: Empathize and Define — understanding users and identifying pain points.",
      content: (
        <div className="flex flex-col gap-4 mt-6 text-sm text-secondary leading-relaxed">
          <p>1. <strong>Empathize:</strong> Understand the user. Here, the user wants to log out quickly and confidently after reading the article. Anxiety or distractions interrupts this goal.</p>
          <p>2. <strong>Define:</strong> Identify the pain points — vague buttons, extra ads, and ambiguous warning text.</p>
        </div>
      ),
    },

    // STEP 4 — UX Process: Ideate + Prototype
    {
      title: "UX Process — Generating Solutions",
      description: "Phase 3 & 4: Ideate and Prototype — brainstorm and create mockups.",
      content: (
        <div className="flex flex-col gap-4 mt-6 text-sm text-secondary leading-relaxed">
          <p>3. <strong>Ideate:</strong> Brainstorm solutions — replace vague labels with clear actions, remove distractions, and clarify consequences.</p>
          <p>4. <strong>Prototype:</strong> Create a mockup of the improved logout flow, focusing on clarity, accessibility, and hierarchy of actions.</p>
        </div>
      ),
    },

    // STEP 5 — UX Process: Test + Implement
    {
      title: "UX Process — Testing & Implementation",
      description: "Phase 5 & 6: Test and Implement — validate and finalize design.",
      content: (
        <div className="flex flex-col gap-4 mt-6 text-sm text-secondary leading-relaxed">
          <p>5. <strong>Test:</strong> Validate with users — can they log out confidently? Do they understand each option without stress?</p>
          <p>6. <strong>Implement:</strong> Finalize the design based on feedback, ensuring the logout flow is clear, safe, and intuitive.</p>
        </div>
      ),
    },

    // STEP 6 — Final Good UX
    {
      title: "Clean, Clear Logout",
      description:
        "The final logout flow is accessible, clear, and reduces user stress.",
      content: (
        <div className="w-full flex justify-center mt-6">
          <div className="bg-white border shadow-sm rounded-xl px-6 py-5 w-[320px] text-center">
            <h2 className="font-semibold text-lg">Log Out of Your Account?</h2>
            <p className="mt-2 text-sm text-secondary leading-relaxed">
              You’ll need to sign in again to access your dashboard.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <button className="btn-secondary w-full">Stay Logged In</button>
              <button className="btn-primary w-full">Log Out</button>
            </div>
          </div>
        </div>
      ),
    },

    // STEP 7 — Feedback Slide
    {
      title: "Share Insights to Improve My Design",
      description:
        "Feedback is core to UX improvement. Please share your thoughts about this experience.",
      content: <FeedbackForm />,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center px-4"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="bg-[var(--color-accent-warm)] shadow-xl rounded-2xl p-6 max-w-lg w-full relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/10"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-secondary">
              {slides[step].title}
            </h2>

            {/* Description */}
            <p className="text-sm text-secondary mt-2 opacity-80">
              {slides[step].description}
            </p>

            {/* Slide Content */}
            {slides[step].content}

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 mt-8 h-[6px] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-[var(--color-primary)]"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 0 ? (
                <button onClick={prevStep} className="btn-secondary px-5">
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps - 1 ? (
                <button onClick={nextStep} className="btn-primary px-5">
                  Next
                </button>
              ) : (
                <button onClick={onClose} className="btn-primary px-5">
                  Finish
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}