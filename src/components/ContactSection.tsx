"use client";
 
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
 
export default function ContactSection() {
  return (
    <section className="relative flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#0d0d0d] text-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 py-20 flex flex-col items-center justify-center flex-grow"
      >
        <SectionTitle>
          Get in <span className="text-cyan-400">Touch!</span>
        </SectionTitle>
 
        <p className="text-neutral-300 max-w-xl mx-auto mt-6 mb-8 leading-relaxed">
          I am actively looking for opportunities in construction management, project management, and digital delivery. Whether you have a role, a project, or just want to connect — feel free to reach out.
        </p>
 
        <div className="flex justify-center mb-10">
          <Link
            href="/contact"
            className="bg-[#06b6d4] hover:bg-[#0ea5e9] text-white font-medium px-6 py-2 rounded-lg transition shadow-[0_0_12px_rgba(6,182,212,0.3)]"
          >
            Contact Me
          </Link>
        </div>
 
        <div className="flex justify-center gap-6 text-neutral-400 mb-16">
          <Link
            href="https://github.com/Khalil-ib21"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/khalilibrahim21"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="mailto:Khalil.ib2111@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <Mail size={22} />
          </Link>
        </div>
      </motion.div>
 
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-30 right-6 sm:bottom-25 sm:right-10 bg-[#06b6d4] hover:bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)] transition w-[38px] h-[38px]"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </button>
 
      <footer className="border-t border-neutral-800 text-neutral-400 text-sm py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Khalil Ibrahim | All rights reserved.</p>
        <a
          href="https://github.com/Khalil-ib21/portfolio_Khalil_Ibrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition mt-2 md:mt-0"
        >
          github.com/Khalil-ib21/portfolio_Khalil_Ibrahim
        </a>
      </footer>
    </section>
  );
}