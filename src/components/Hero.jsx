import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ProcessModal from "./ProcessModal";
import AnimatedGradient from "./AnimatedGradient";

const ROLES = [
  "Interactive Media Designer",
  "UX Designer",
  "Front-End Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update mobile flag correctly without triggering dependency mismatch
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);

    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Optimized timings (Option B)
  const intervalTime = isMobile ? 3000 : 2200;

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      intervalTime
    );
    return () => clearInterval(t);
  }, [intervalTime]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.10,
        delayChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="pt-20 pb-0 px-4 sm:px-6 w-full">
        <div className="max-w-[1200px] mx-auto w-full">

          <AnimatedGradient>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 text-center motion-smooth"
            >

              {/* Heading */}
              <motion.h1
                variants={item}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl leading-tight flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                Hi, I’m <span className="font-semibold">Satellite Nongmaithem</span>

                {!isMobile && (
                  <svg
                    className="w-16 h-16 sm:w-14 sm:h-14 md:w-18 md:h-18"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden
                  >
                    <circle cx="20" cy="20" r="10" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
                    <circle cx="30" cy="20" r="3" fill="var(--color-secondary)">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 20 20"
                        to="360 20 20"
                        dur="7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                )}
              </motion.h1>

              {/* Roles */}
              <motion.div
                variants={item}
                className="text-[var(--color-accent-dark)] text-xl sm:text-2xl md:text-3xl font-medium motion-smooth"
              >
                <div className="overflow-hidden h-9 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROLES[roleIdx]}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="inline-block"
                      style={{ minWidth: "18ch" }}
                    >
                      {ROLES[roleIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={item}
                className="text-base sm:text-lg md:text-xl text-secondary max-w-prose mx-auto"
              >
                I orbit real-world problems, transforming curiosity into actionable insights
                and human-centered solutions. From UX design to front-end implementation,
                I build products that solve real user challenges.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={item}
                className="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-center mt-6 w-full"
              >
                <Link to="/projects" className="btn-primary">
                  View Projects
                </Link>

                <button onClick={() => setModalOpen(true)} className="btn-secondary">
                  My UX Process
                </button>
              </motion.div>

            </motion.div>
          </AnimatedGradient>

        </div>
      </section>

      <ProcessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}