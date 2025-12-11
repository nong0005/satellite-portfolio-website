// src/pages/ACMakerspacePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Monitor } from "lucide-react";
import AnimatedGradient from "../../../components/AnimatedGradient";

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ACMakerspacePage() {
  return (
    <div className="mx-auto  px-4 py-12 max-w-[1200px] font-body text-gray-800 space-y-12">

      {/* HERO */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="relative rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src="/images/project-banners/ac-makerspace-banner-resized.jpeg"
          alt="AC Makerspace Hero"
          className="w-full h-64 md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start gap-3 p-6  md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white px-3 py-1 rounded">
            Algonquin College — MakerSpace Project
          </h1>
          <p className="text-sm md:text-base text-white px-3 py-1 rounded max-w-2xl">
          Lead UX Designer – Satellite Nongmaithem: Led UX research, IA, user flows, wireframes, and usability testing to deliver an effective user-centered training system.          </p>
        </div>
      </motion.header>

      {/* Role / Project / Timeline */}
      <AnimatedGradient>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-3 p-5 rounded-2xl shadow-lg">
            <Monitor className="text-secondary w-6 h-6" />
            <div>
              <h3 className="font-semibold text-secondary">Project</h3>
              <p className="text-secondary text-sm">Immersive Lab — MakerSpace Safety UX</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-2xl shadow-lg">
            <Users className="text-secondary w-6 h-6" />
            <div>
              <h3 className="font-semibold text-secondary">Role & Team</h3>
              <p className="text-secondary text-sm">Lead UX Designer | UX Team (5) + Video Team (5)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-2xl shadow-lg">
            <Clock className="text-secondary w-6 h-6" />
            <div>
              <h3 className="font-semibold text-secondary">Timeline</h3>
              <p className="text-secondary text-sm">September — December 2025</p>
            </div>
          </div>
        </motion.section>
      </AnimatedGradient>

      {/* Project Overview */}
      <AnimatedGradient>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Project Overview</h2>
          <p>
            Students often felt a mix of excitement and intimidation in the Makerspace. While the tools and potential outcomes were motivating, they struggled with uncertainty around safety protocols, unclear starting points, and scattered documentation. 
          </p>
          <p className="mt-2">
            Our goal was to create a warm, guided experience that helps learners go from curious to confident quickly — making the first steps in the Makerspace less stressful and more rewarding.
          </p>
        </motion.section>
      </AnimatedGradient>

      {/* Discover */}
      <AnimatedGradient>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Discover / Research</h2>
          <p className="mb-2">We explored how students and staff interacted with the Makerspace and identified key pain points:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Stakeholder interviews with faculty and Stephen Gagné</li>
            <li>Student interviews and workshop observations</li>
            <li>Audit of existing Makerspace documentation</li>
          </ul>
          <p className="mt-2 font-semibold">Insights & Outcomes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Prioritized user pain points and project goals</li>
            <li>Empathy mapping revealed students value visual guidance, repeatable practice, and efficient learning.</li>
          </ul>

          <p className="mt-4 font-semibold">Competitive Analysis:</p>
<div className="flex gap-6 mt-2 items-center overflow-x-auto pb-2">
  {/* Canada Museum History */}
  <div className="flex flex-col items-center min-w-[140px]">
    <img
      src="/images/ac-makerspace/canada-meseum-history.jpeg"
      alt="Canada Museum History"
      className="w-32 rounded shadow-md"
    />
    <p className="text-sm mt-1 text-center">Canada Museum History</p>
  </div>

  {/* Canada Museum Nature */}
  <div className="flex flex-col items-center min-w-[140px]">
    <img
      src="/images/ac-makerspace/canada-meseum-natute.jpeg"
      alt="Canada Museum Nature"
      className="w-32 rounded shadow-md"
    />
    <p className="text-sm mt-1 text-center">Canada Museum Nature</p>
  </div>

  {/* Ingenium */}
  <div className="flex flex-col items-center min-w-[140px]">
    <img
      src="/images/ac-makerspace/ingenium.jpeg"
      alt="Ingenium"
      className="w-32 rounded shadow-md"
    />
    <p className="text-sm mt-1 text-center">Ingenium</p>
  </div>
</div>

<ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
  <li>Competitors lack true hands-on simulations, so our system allows learners to actually practice machine operation and safety steps virtually.</li>
  <li>Current museum programs are not self-paced.</li>
  <li>Competitors mainly offer live, observation-based workshops, while our platform provides interactive, repeatable training that strengthens recall and confidence.</li>
</ul>
        </motion.section>
      </AnimatedGradient>

      {/* Define / Personas */}
      <AnimatedGradient>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Define / Personas</h2>
          <p>Synthesized research into problem statements, user needs, and personas.</p>
          <p className="mt-2 font-semibold">Problem Statement:</p>
          <p>Students need a clear, accessible path to safely use Makerspace equipment. Current guidance is fragmented and intimidating, reducing confidence and participation.</p>

          <div className="mt-4 flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 pb-4">
            {/* Mary */}
            <div className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100">
              <img src="/images/ac-makerspace/personas/persona-1.jpeg" alt="Mary Thompson" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-[#1A1A1A]">Mary Thompson</h4>
              <p className="text-sm text-gray-600 font-medium">Beginner Engineering Student</p>
              <p className="text-gray-700 text-sm mt-2">Needs step-by-step onboarding and quick access to staff support.</p>
            </div>

            {/* Alex */}
            <div className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100">
              <img src="/images/ac-makerspace/personas/persona-2.jpeg" alt="Alex Gallo" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-[#1A1A1A]">Alex Gallo</h4>
              <p className="text-sm text-gray-600 font-medium">Student Technician</p>
              <p className="text-gray-700 text-sm mt-2">Needs repeatable training, troubleshooting references, and emergency practice scenarios.</p>
            </div>

            {/* Sofia */}
            <div className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100">
              <img src="/images/ac-makerspace/personas/persona-3.jpeg" alt="Sofia Ramirez" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-[#1A1A1A]">Sofia Ramirez</h4>
              <p className="text-sm text-gray-600 font-medium">Part-time Designer</p>
              <p className="text-gray-700 text-sm mt-2">Needs time-efficient guides and clear booking info for evening/weekend work.</p>
            </div>
          </div>

          <p className="mt-4 font-semibold">How Might We:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Make the Makerspace easier for new users like Mary to learn safety rules and machine steps</li>
            <li>Create a fun, simple training program that helps Alex remember safety steps better</li>
            <li>Help users like Sofia learn complex machines confidently in a short time</li>
          </ul>

          <p className="mt-2 font-semibold">Goal Statement:</p>
          <p>Our immersive learning system allows students and staff to safely and confidently learn, recall, and apply safety and machine operation steps through interactive, visual, and self-paced training.</p>
        </motion.section>
      </AnimatedGradient>
       {/* Ideate Phase */}
<AnimatedGradient>
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionFade}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Ideate Phase</h2>
    <p className="text-gray-700 font-semibold">Brainstormed Features:</p>
    <ul className="list-disc list-inside text-gray-700 mb-2">
      <li>Interactive hotspots</li>
      <li>Step-by-step safety guides</li>
      <li>Quick reference cards</li>
      <li>Modular web hub</li>
    </ul>
    <p className="text-gray-700 font-semibold">Deliverables:</p>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>Information Architecture (IA) diagrams</li>
      <li>User flows</li>
    </ul>

    <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2">
      <a href="https://www.figma.com/design/DGhNERSaUqSuVsAV7rpwaW/Immersive-Lab-UX-Design--Fall-?node-id=100-193&p=f&t=LgSxIr5gq5C6pU9V-0" target="_blank" rel="noopener noreferrer">
        <img src="/images/ac-makerspace/ia-banner.jpeg" alt="Information Architecture" className="rounded-lg shadow-md" />
      </a>
      <a href="https://www.figma.com/board/asQ32griIeMMAAjCoH23ZP/Immersive-Lab-UX-Design-Figjam-Board?node-id=44-186&p=f&t=6AjVsAZ62TQfIQAq-0" target="_blank" rel="noopener noreferrer">
        <img src="/images/ac-makerspace/userflow-banner.jpeg" alt="User Flows" className="rounded-lg shadow-md" />
      </a>
    </div>
  </motion.section>
</AnimatedGradient>

{/* Prototype Phase */}
<AnimatedGradient>
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionFade}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Prototype Phase</h2>
    <p className="text-gray-700 mb-2">
      Built low-fidelity wireframes, iterated into high-fidelity interactive prototypes (Figma). Focus on clear onboarding, hotspot interactions, and tool-specific step flows.
    </p>
    <p className="text-gray-700 font-semibold">Deliverables:</p>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>Lo-fi & hi-fi prototypes (Figma)</li>
    </ul>

    <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2">
      <a href="https://www.figma.com/design/DGhNERSaUqSuVsAV7rpwaW/Immersive-Lab-UX-Design--Fall-?node-id=136-194&p=f&t=LgSxIr5gq5C6pU9V-0" target="_blank" rel="noopener noreferrer">
        <img src="/images/ac-makerspace/lofi-banner.jpeg" alt="Lo-fi Prototype" className="rounded-lg shadow-md" />
      </a>
      <a href="https://www.figma.com/design/DGhNERSaUqSuVsAV7rpwaW/Immersive-Lab-UX-Design--Fall-?node-id=240-3&p=f&t=LgSxIr5gq5C6pU9V-0" target="_blank" rel="noopener noreferrer">
        <img src="/images/ac-makerspace/hifi-banner.jpeg" alt="Hi-fi Prototype" className="rounded-lg shadow-md" />
      </a>
    </div>
  </motion.section>
</AnimatedGradient>
      {/* Test / Usability */}
<AnimatedGradient>
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionFade}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Test / Usability</h2>

    <p className="font-semibold">MakerSpace Usability Test Plan:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Moderator: Introduce tasks neutrally, encourage think-aloud, clarify only if stuck.</li>
      <li>Time Tracker: Record start/end times and delays.</li>
      <li>Note Taker: Record actions, comments, first impressions, and emotions.</li>
      <li>Observers: Watch body language, hesitation, excitement, mistakes, and interaction with hotspots, icons, and the 3D printer.</li>
    </ul>

    <p className="mt-2 font-semibold">Tasks:</p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Initial Impressions – “What do you notice? How does it feel?”</li>
      <li>Hotspot Exploration – “What do these hotspots do?”</li>
      <li>Locate MakerSpace – “Find it on the map.”</li>
      <li>Explore 3D Printer – “Try exploring it.”</li>
      <li>Menu & End Session – “Use the menu and end the session.”</li>
      <li>Reflection – “What worked well? What was confusing? Suggestions?”</li>
    </ol>

    <p className="mt-2 font-semibold">Guidelines / Planning:</p>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Ask open-ended questions to encourage detailed feedback.</li>
      <li>Encourage participants to think aloud as they perform tasks.</li>
      <li>Observe users first, only intervene if they are completely stuck.</li>
      <li>Capture both actions and verbal feedback for detailed analysis.</li>
    </ul>

    <p className="mt-2 font-semibold">Participants & Findings:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Abel: Smooth navigation, completed all tasks including quiz, suggested adding text/audio & icon labels.</li>
      <li>Observed issues: 3D printer confusion, restart not working, overlapping text, unclear icon labels, inconsistent quiz gradients.</li>
      <li>Question structure needs to be rephrased for clarity and easy scanning.</li>
      <li>The font should closely match Algonquin College’s branding, even though the software does not support the official Algonquin font.</li>
    </ul>

    <p className="mt-4 font-semibold">Updated Screenshots:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      <img src="/images/ac-makerspace/updated-screen-1.png" alt="Updated Screen 1" className="rounded shadow-md" />
      <img src="/images/ac-makerspace/updated-screen-2.png" alt="Updated Screen 2" className="rounded shadow-md" />
    </div>
  </motion.section>
</AnimatedGradient>
     {/* Deliver Phase */}
     <AnimatedGradient>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Deliver Phase</h2>
          <p className="text-gray-700 mb-2">
            Finalized interactive prototype and trainer guide. Handoff included IA, annotated flows, and accessibility considerations.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Competitive analysis</li>
            <li>Personas & user journey maps</li>
            <li>IA & user flows</li>
            <li>Lo-fi & hi-fi prototypes</li>
            <li>Usability report</li>
          </ul>
          <p className="text-gray-700 mb-2 font-semibold">Impact & Next Steps:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Increased clarity and confidence among testers.</li>
            <li>Integrate video team assets, add adaptive learning paths, pilot with a wider student cohort.</li>
          </ul>
        </motion.section>
      </AnimatedGradient>
    </div>
  );
}