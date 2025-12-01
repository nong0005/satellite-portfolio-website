import React from "react";
import AnimatedGradient from "./AnimatedGradient";

const AboutDetails = () => {
  return (
    <div className="max-w-[1250px] mx-auto w-full px-4 md:px-8 py-12 space-y-12">
      <AnimatedGradient>
        <section className="w-full space-y-12">
          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-secondary)]">Education</h2>
            <p><strong>Interactive Media Design</strong> – Algonquin College</p>
            <p>Program-related Skills: UI/UX Design, Web Development, Web Design, Graphic Design, CMS, Adobe Suite, Photography, Videography, Business Marketing, Project Management, Entrepreneurship Mindset.</p>
            <p>Dean's Honors List: W-24 (GPA: 4.0/4.0), S-24 (GPA: 3.85/4.0), W-25 (GPA: 3.95/4.0)</p>
          </div>

          {/* Certifications Section */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-secondary)]">Certifications</h2>
            <ul className="list-disc list-inside text-[var(--color-secondary)] space-y-2">
              <li>Google UX Design Professional Certificate</li>
              <li>Advanced Robotic Certificate – Edulife, India</li>
              <li>Google AI Essential Certificate</li>
            </ul>
          </div>

          {/* Work Experience Section */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-secondary)]">Work Experience</h2>
            <p><strong>Interactive Media Designer (Co-op)</strong> – Algonquin College, May 2025 - August 2025</p>
            <ul className="list-disc list-inside text-[var(--color-secondary)] space-y-2">
              <li>Designed and developed interactive media assets for Algonquin College’s immersive lab, aligning with branding and accessibility standards.</li>
              <li>Created promotional materials (digital and print) to highlight student achievements, program outcomes, and departmental initiatives.</li>
              <li>Produced visual content—infographics, short-form videos, and motion graphics—to enhance internal communications.</li>
              <li>Digitized manual processes using Microsoft Forms, Excel automations, and WordPress integrations.</li>
              <li>Collaborated with cross-functional teams including faculty, communications staff, and IT specialists.</li>
              <li>Applied creative problem-solving to translate complex information into engaging visual content.</li>
              <li>Contributed to strategic storytelling efforts by designing cohesive multimedia narratives across platforms.</li>
            </ul>
          </div>
        </section>
      </AnimatedGradient>
    </div>
  );
};

export default AboutDetails;