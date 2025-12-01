import React from "react";
import {
  ArrowRight,
  Users,
  MapPin,
  Monitor,
  Video,
  Layers,
  Link2,
  CheckCircle,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ACMakerspace() {
  return (
    <div className="ac-makerspace-page mx-auto px-4 py-12 font-body text-secondary">
      {/* root container constrained to 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* HERO */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/project-banners/ac-makerspace-banner.jpg"
            alt="AC Makerspace Hero"
            className="w-full h-64 md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start gap-3 p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ffffff] px-3 py-1 rounded">
              Immersive Lab — Makerspace Training Experience
            </h1>
            <p className="text-sm md:text-base text-[#ffffff] px-3 py-1 rounded max-w-2xl">
              UX-led design for an interactive, visual training system — combining
              web modules, 360/standard video, and 3D assets to teach safe Makerspace
              use and increase user confidence.
            </p>
          </div>
        </motion.header>

        {/* Top details: role, client, timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          <div className="bg-white/60 p-5 rounded-lg shadow">
            <h3 className="text-[#1A1A1A] font-heading font-semibold flex items-center gap-2">
              <Monitor size={18} /> Project
            </h3>
            <p className="text-gray-700 mt-2">
              Immersive Lab — Makerspace training UX & web module (Algonquin College)
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg shadow">
            <h3 className="text-[#1A1A1A] font-heading font-semibold flex items-center gap-2">
              <Users size={18} /> Role & Team
            </h3>
            <p className="text-gray-700 mt-2">
              Lead UX Designer: Satellite Nongmaithem. UX Team (5) + Video Team (6).
              Focus: UX research, IA, wireframes, prototypes, usability testing.
            </p>
          </div>

          <div className="bg-white/60 p-5 rounded-lg shadow">
            <h3 className="text-[#1A1A1A] font-heading font-semibold flex items-center gap-2">
              <Clock size={18} /> Timeline
            </h3>
            <p className="text-gray-700 mt-2">September — December 2025 (4 months)</p>
            <p className="text-gray-700 mt-1 text-sm">Client: Stephen Gagné (AC Entrepreneurship)</p>
          </div>
        </motion.section>

        {/* Problem statement */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="bg-accent-warm/60 p-6 rounded-lg border-l-4 border-[#1A1A1A]"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] flex items-center gap-3">
            <ArrowRight size={20} className="text-[#1A1A1A]" />
            Problem Statement
          </h2>

          {/* single-sentence, Google-style problem: concise */}
          <p className="mt-4 text-lg text-gray-800">
            Students at Algonquin College need a clear, accessible path to learn how to safely
            find and operate Makerspace equipment because current guidance is fragmented,
            inconsistent, and intimidating — reducing confidence and usage.
          </p>
        </motion.section>

        {/* Context & Story */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <MapPin size={20} className="text-[#1A1A1A]" />
            Context & Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Students reported feeling excitement and intimidation in equal measure at the
            Makerspace. While tools and outcomes were motivating, uncertainty around safety
            protocols, where to begin, and scattered documentation made first experiences
            stressful. I led UX to build a friendly, visual, and scaffolded learning path
            — reducing friction and helping learners move quickly from curious to confident.
          </p>
        </motion.section>

        {/* UX Phases — full flow */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Layers size={20} className="text-[#1A1A1A]" />
            UX Phases (Discover → Define → Ideate → Prototype → Test → Deliver)
          </h2>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Discover */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Discover</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Research: stakeholder interviews (Stephen Gagné & faculty), student interviews,
                workshop observation, and audit of current Makerspace docs. Outcome: prioritized
                list of user pain points and initial project goals.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Deliverables: research notes, competitive analysis, empathy maps.
              </p>
            </div>

            {/* Define */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Define</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Synthesized research into a single problem statement, HMWs, and core user needs.
                Created three personas and a user journey to map moments of friction and opportunity.
              </p>
              <p className="mt-3 text-sm text-gray-600">Deliverables: personas, problem & HMW statements.</p>
            </div>

            {/* Ideate */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Ideate</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Brainstormed features: interactive hotspots, step-by-step safety guides, quick
                reference cards, and a modular web hub. Sketched user flows and IA to prioritize
                the MVP experience.
              </p>
              <p className="mt-3 text-sm text-gray-600">Deliverables: IA, user flows, Crazy-8 sketches.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Prototype */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Prototype</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Built low-fidelity wireframes, iterated into high-fidelity interactive prototypes
                (Figma). Focus: clear onboarding, hotspot interactions, and tool-specific step flows.
              </p>
              <p className="mt-3 text-sm text-gray-600">Deliverables: lo-fi & hi-fi prototypes (Figma).</p>
            </div>

            {/* Test */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Test</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Conducted moderated usability tests with student participants and video team members.
                Measured task success, confusion points (3D printer interaction, icon labels), and reaction.
              </p>
              <p className="mt-3 text-sm text-gray-600">Deliverables: usability test notes & updated designs.</p>
            </div>

            {/* Deliver */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1A1A]">Deliver</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Finalized interactive prototype and trainer guide for instructors. Handoff included
                IA, annotated flows, and accessibility considerations.
              </p>
              <p className="mt-3 text-sm text-gray-600">Deliverables: final prototype, trainer guide, asset pack.</p>
            </div>
          </div>
        </motion.section>

        {/* Competitive Analysis short */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4"
        >
          <h3 className="text-2xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Video size={18} className="text-[#1A1A1A]" /> Competitive summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <img
              src="/images/ac-makerspace/ingenium-competitor-logo.jpg"
              alt="Ingenium"
              className="h-20 object-contain"
            />
            <img
              src="/images/ac-makerspace/canada-meseum-natute-competitor-logo.png"
              alt="Nature"
              className="h-20 object-contain"
            />
            <img
              src="/images/ac-makerspace/canada-meseum-history-competitor-logo.png"
              alt="History"
              className="h-20 object-contain"
            />
          </div>

          <p className="text-gray-700">
            Key lessons: interactive guided tours, curriculum alignment, and take-home activities
            work well. Gaps we targeted: hands-on tool operation simulation, safety walkthroughs,
            and troubleshooting practice.
          </p>
        </motion.section>

        {/* Personas — horizontal on mobile, grid on desktop */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
        >
          <h3 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Users size={20} className="text-[#1A1A1A]" /> Personas
          </h3>

          <p className="text-gray-700 mt-2">
            Three core user types guided the product decisions — each represents a common learner need.
          </p>

          <div className="mt-4">
            <div className="flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 pb-4">
              {/* Mary */}
              <motion.article
                className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/ac-makerspace/personas/persona-1.jpg"
                  alt="Mary Thompson"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-[#1A1A1A]">Mary Thompson</h4>
                <p className="text-sm text-gray-600 font-medium">Engineering student — Beginner</p>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Needs visual, step-by-step onboarding and quick access to staff support — wants to feel
                  confident using 3D printers and laser cutters.
                </p>
              </motion.article>

              {/* Alex */}
              <motion.article
                className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/ac-makerspace/personas/persona-2.jpg"
                  alt="Alex Gallo"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-[#1A1A1A]">Alex Gallo</h4>
                <p className="text-sm text-gray-600 font-medium">Student technician</p>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Needs repeatable training, troubleshooting references, and emergency practice scenarios to
                  confidently help other users.
                </p>
              </motion.article>

              {/* Sofia */}
              <motion.article
                className="min-w-[280px] md:min-w-0 bg-white rounded-xl shadow p-4 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/ac-makerspace/personas/persona-3.jpg"
                  alt="Sofia Ramirez"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-[#1A1A1A]">Sofia Ramirez</h4>
                <p className="text-sm text-gray-600 font-medium">Part-time designer</p>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Needs time-efficient, intermediate guides and clear booking info so evening/weekend work is productive.
                </p>
              </motion.article>
            </div>
          </div>
        </motion.section>

        {/* IA & User Flows banners */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4"
        >
          <h3 className="text-2xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Layers size={18} className="text-[#1A1A1A]" /> Information Architecture & Flows
          </h3>

          <p className="text-gray-700">
            The IA groups content into: Onboarding → Tool Library → Safety Guides → Interactive Scenarios → Quiz/Assessment → Trainer Dashboard.
            Below are visual banners linking to the full diagrams (Figma).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/ac-makerspace/ia-banner.jpg"
                alt="Information architecture banner"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </a>

            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/ac-makerspace/userflow-banner.jpg"
                alt="User flow banner"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </a>

            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/ac-makerspace/lofi-banner.jpg"
                alt="Lo-fi wireframes"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </a>
          </div>
        </motion.section>

        {/* Wireframes & Hi-fi */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Video size={18} className="text-[#1A1A1A]" /> Wireframes & High-fidelity
          </h3>

          <p className="text-gray-700">
            Iterated from sketches to clickable prototypes. Focus areas: onboarding flow, hotspot interactions,
            and the quick-check safety quiz. Click through the prototype for full interaction.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="/images/ac-makerspace/lofi-banner.jpg"
              alt="Lo-fi"
              className="w-full h-56 object-cover rounded-lg shadow"
            />
            <img
              src="/images/ac-makerspace/hifi-banner.jpg"
              alt="Hi-fi"
              className="w-full h-56 object-cover rounded-lg shadow"
            />
          </div>

          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-[#1A1A1A] font-semibold"
          >
            <Link2 size={16} /> View interactive prototype
          </a>
        </motion.section>

        {/* Usability Testing summary */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4"
        >
          <h3 className="text-2xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <CheckCircle size={18} className="text-[#1A1A1A]" /> Usability Testing (Round 1)
          </h3>

          <p className="text-gray-700">
            Two participants from the video team tested core flows (map → hotspot → 3D printer → quiz).
            What worked: hotspots, audio clarity, map navigation.
            What needed improvement: icon labels, 3D printer affordance, restart/quiz reset behavior.
          </p>

          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Action: added visible text labels below icons and captions for audio.</li>
            <li>Action: redesigned quiz restart to reset progress and provide confirmation.</li>
            <li>Outcome: improved first-time task success and reduced confusion in follow-up tests.</li>
          </ul>
        </motion.section>

        {/* Deliverables & Outcomes */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="space-y-4 pb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] flex items-center gap-2">
            <Monitor size={18} className="text-[#1A1A1A]" /> Deliverables & Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold text-[#1A1A1A]">Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Competitive analysis, personas, user journey maps</li>
                <li>IA & user flow diagrams (Figma)</li>
                <li>Lo-fi & hi-fi interactive prototypes</li>
                <li>Usability report & trainer guide</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold text-[#1A1A1A]">Impact & Next steps</h4>
              <p className="text-gray-700 mt-2">
                Early results showed increased clarity and confidence in testers. Next steps:
                integrate video team assets, add adaptive learning paths, and pilot the training
                with a wider student cohort.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}