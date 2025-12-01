// src/components/AnimatedGradient.jsx
import { motion } from "framer-motion";

export default function AnimatedGradient({ children }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg border border-white/20">
      {/* Layer 1: Moving linear gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, var(--color-primary), var(--color-accent-warm), var(--color-white), var(--color-accent-warm))`,
          backgroundSize: "300% 300%",
          zIndex: 0,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Layer 2: Soft radial gradients (glowing spots) */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)", filter: "blur(150px)", zIndex: 0, top: "-20%", left: "-10%" }}
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, var(--color-accent-warm) 0%, transparent 70%)", filter: "blur(120px)", zIndex: 0, top: "50%", left: "60%" }}
        animate={{ x: [-20, 20, -10, 0], y: [10, -10, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, var(--color-white) 0%, transparent 70%)", filter: "blur(100px)", zIndex: 0, top: "30%", left: "30%" }}
        animate={{ x: [10, -10, 10, 0], y: [-10, 10, -20, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stable content */}
      <div className="relative z-10 p-8 md:p-12 bg-white/20 backdrop-blur-xl rounded-3xl">
        {children}
      </div>
    </div>
  );
}