import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedGradient from "./AnimatedGradient";
import {
  SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign,
  SiAdobepremierepro, SiAdobeaudition, SiWordpress, SiShopify,
  SiGithub, SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiPhp
} from "react-icons/si";

const tools = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Illustrator", icon: <SiAdobeillustrator /> },
  { name: "InDesign", icon: <SiAdobeindesign /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
  { name: "Audition", icon: <SiAdobeaudition /> },
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "Shopify", icon: <SiShopify /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "PHP", icon: <SiPhp /> },
];

export default function AboutMe() {
  const [duration, setDuration] = useState(25); // default desktop speed

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 768) {
        setDuration(15); // faster on mobile
      } else {
        setDuration(30); // slower on desktop
      }
    };

    updateDuration(); // initial check
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  // Parent container variants for staggered child animations
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  // Individual child variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      className="max-w-[1200px] mx-auto w-full h-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatedGradient>
        <motion.div className="md:flex md:w-full md:h-full" variants={containerVariants}>
          
          {/* Left side: Image */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 md:h-full"
          >
            <img
              src="/images/satellite-headshot.png"
              alt="Satellite Nongmaithem"
              className="md:w-full md:h-full object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Right side: Content */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex flex-col justify-center p-8 gap-6 text-left"
          >
            {/* Quote */}
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)] leading-tight">
              “Design is where creativity meets purpose — a bridge between imagination and impact.”
            </h2>

            {/* Bio */}
            <div className="space-y-4 text-[var(--color-secondary)] text-base md:text-lg leading-relaxed">
              <p>
                From childhood sketches to award-winning paintings, creativity has always been my language. Over time, my curiosity grew—I wanted to merge artistry with problem-solving. This led me to UX design, where I found the perfect balance between creativity and impact.
              </p>
              <p>
                Studying Interactive Media Design at Algonquin College and completing the Google UX Design Certificate deepened my approach. Today, I focus on crafting intuitive digital experiences, blending creativity with technology to solve real-world challenges. For me, design is about understanding people, simplifying complexity, and creating experiences that truly resonate.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Software & Languages Marquee */}
        <div className="mt-6 overflow-hidden w-full">
          <h4 className="text-lg font-semibold mb-3 mt-2 text-[var(--color-secondary)] text-center">
            Software & Languages
          </h4>

          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            {tools.concat(tools).map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 min-w-[120px] md:min-w-[140px]"
              >
                <span className="text-3xl md:text-4xl text-black">{tool.icon}</span>
                <span className="font-medium text-black">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedGradient>
    </motion.section>
  );
}