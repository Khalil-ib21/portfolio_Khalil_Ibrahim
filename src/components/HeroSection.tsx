"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Download, FileText } from "lucide-react";
 
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0d0d0d] to-[#161616] flex flex-col items-center justify-center text-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div
          className="relative mb-8"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/profile.jpg"
            alt="Khalil Ibrahim"
            width={180}
            height={180}
            className="rounded-full border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.25)] object-cover"
          />
        </motion.div>
 
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Khalil Ibrahim
        </h1>
 
        {/* Role badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            Graduate Civil Engineer
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            Project Management
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            Digital & BIM
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            Data Science & AI
          </span>
        </div>
 
        {/* Tagline */}
        <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed text-sm">
          MEng Civil Engineering · MSc Data Science & AI — University of Birmingham
        </p>
 
        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-8">
          <Link
            href="mailto:Khalil.ib2111@gmail.com"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Mail size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/khalilibrahim21"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="https://github.com/Khalil-ib21"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Github size={22} />
          </Link>
        </div>
 
        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <motion.a
            href="/KHALIL_IBRAHIM_CV_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-cyan-500 text-black font-medium px-5 py-2.5 rounded-full hover:bg-cyan-400 transition text-sm shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <Download size={16} /> View CV
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-neutral-700 text-neutral-300 font-medium px-5 py-2.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
          >
            <FileText size={16} /> View Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}