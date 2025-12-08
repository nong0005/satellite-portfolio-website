import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/satellite-nongmaithem-2a29b4291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-secondary)] text-2xl hover:text-[var(--color-dark)] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nong0005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-secondary)] text-2xl hover:text-[var(--color-dark)] transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[var(--color-secondary)] text-sm text-center md:text-left">
          © {new Date().getFullYear()} Satellite Nongmaithem. All rights reserved.
        </p>

        {/* Footer navigation using Link */}
        <div className="flex gap-4 text-[var(--color-secondary)] mb-10 text-sm">
          <Link to="/about" className="hover:text-[var(--color-dark)] transition-colors">About</Link>
          <Link to="/projects" className="hover:text-[var(--color-dark)] transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-[var(--color-dark)] transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}