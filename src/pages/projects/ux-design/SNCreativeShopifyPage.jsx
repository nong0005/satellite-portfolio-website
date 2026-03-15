// src/pages/projects/ux-design/TailgatorsPage.jsx
import React from "react";

const TailgatorsPage = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-gray-800">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        TailGators Website Redesign
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Enhancing Ottawa’s Top Sports Bar Digital Experience <br />
        A Case Study by Satellite Nongmaithem
      </p>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-2">
          TailGators, a popular sports bar in Ottawa, sought to modernize its online presence
          to reflect its dynamic atmosphere, improve user experience, and increase customer
          engagement. I took on the challenge of redesigning their website to align with their
          brand vision and long-term growth strategy.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
        <p className="mb-2">
          The existing TailGators website lacked excitement and engagement, feeling more like an
          information hub than an interactive destination. Customers struggled with navigation,
          finding event schedules, and making reservations. Additionally, the site was not
          optimized for mobile users, impacting accessibility and conversions.
        </p>
      </section>

      {/* Project Goals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Project Goals & Objectives</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Feature a modern, user-friendly interface with seamless navigation.</li>
          <li>
            Enhance digital engagement by integrating interactive event calendars, online
            booking, and social media.
          </li>
          <li>
            Reinforce TailGators as Ottawa’s premier sports bar through a bold and engaging
            design.
          </li>
          <li>Improve the website’s mobile responsiveness for accessibility across devices.</li>
        </ul>
      </section>

      {/* Research & Discovery */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Research & Discovery</h2>

        {/* User Research */}
        <h3 className="text-xl font-semibold mt-4 mb-2">User Research</h3>
        <p className="mb-2">
          We conducted surveys and interviews with TailGators’ customers, staff, and sports
          enthusiasts to identify pain points and needs.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Users wanted a better event scheduling system.</li>
          <li>Navigation was unclear – essential sections were hard to find.</li>
          <li>Mobile experience was lacking.</li>
          <li>Branding felt outdated and did not capture the vibrant venue.</li>
        </ul>

        {/* Competition Analysis */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Competition Analysis</h3>
        <p className="mb-2">
          We compared TailGators with competitors like MacLaren’s and Local Heroes to identify
          strengths and gaps. This helped optimize online presence, SEO, and social media
          engagement.
        </p>
      </section>

      {/* Design Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Design Process</h2>

        {/* Personas */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Personas</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Sarah - Sports Enthusiast:</strong> Wants live games, interactive activities,
            and a user-friendly website to check schedules and book events.
          </li>
          <li>
            <strong>Anna - Meeting Planner:</strong> Wants clear website info for group party
            bookings.
          </li>
          <li>
            <strong>Jake - Pool Player:</strong> Wants an easy-to-find league schedule and sign-up
            process.
          </li>
        </ul>

        {/* Moodboard */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Moodboard & Branding</h3>
        <p className="mb-2">
          Colors: Deep greens & reds reflecting the sports bar theme. <br />
          Wood textures for warmth. <br />
          Bold typography & high-energy visuals for engagement.
        </p>

        {/* Sitemap & Wireframing */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Sitemap & Wireframing</h3>
        <p className="mb-2">
          Restructured sitemap for intuitive navigation. Created low-fi and high-fi wireframes
          to test layout, usability, and UI elements.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Conclusion & Learnings</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Understanding the audience is key to meaningful digital experiences.</li>
          <li>Clear navigation significantly enhances usability.</li>
          <li>Visual storytelling strengthens brand identity.</li>
          <li>Mobile optimization is essential for accessibility and engagement.</li>
        </ul>
        <p className="mt-4">
          Through this redesign, TailGators’ website became a modern, interactive platform that
          solidifies its reputation as Ottawa’s go-to sports bar.
        </p>
      </section>
    </section>
  );
};

export default TailgatorsPage;