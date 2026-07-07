'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030712] px-4 sm:px-6 md:px-8 pt-10"
      aria-labelledby="hero-title"
    >
      {/* Dynamic gradient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]"
      />

      {/* Top gold sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
      />

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs sm:text-sm font-semibold text-amber-400 border border-amber-500/20">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          Available for Freelance & Full-time Roles
        </span>

        {/* Title */}
        <h1
          id="hero-title"
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Danish Khan
            </span>
          </span>
        </h1>

        {/* Subtitle (expanded description) */}
        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Full-Stack Web Developer specializing in building high-performance, accessible, and scalable applications using{' '}
          <span className="font-semibold text-amber-400">Next.js</span>,{' '}
          <span className="font-semibold text-amber-400">React</span>,{' '}
          <span className="font-semibold text-amber-400">Node.js</span>, and{' '}
          <span className="font-semibold text-amber-400">Tailwind CSS</span>. 
          Bridging design and DevOps to deploy robust cloud infrastructures.
        </p>

        {/* Secondary line for credibility */}
        <div className="mx-auto mt-4 max-w-2xl flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-gray-400">
          <span>6+ Months Experience</span>
          <span className="text-gray-600">•</span>
          <span>Full-Stack MERN</span>
          <span className="text-gray-600">•</span>
          <span>DevOps & Docker</span>
          <span className="text-gray-600">•</span>
          <span>SEO Optimized</span>
        </div>

        {/* Social Icons row */}
        <div className="mt-6 flex justify-center items-center gap-5">
          <a
            href="https://github.com/danishkhan8909"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 text-2xl transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 text-2xl transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:khandanish909577@gmail.com"
            className="text-gray-400 hover:text-amber-400 text-2xl transition-all duration-300 hover:scale-110"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* CTA group */}
        <div className="mt-8 mx-auto w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 min-h-12 text-white text-base font-semibold shadow-lg hover:shadow-orange-500/20 hover:brightness-110 transition-all duration-300 active:translate-y-[1px]"
            aria-label="Contact danish"
          >
            Let&apos;s Connect
          </a>

          <a
            href="#projects"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 min-h-12 text-base text-gray-200 backdrop-blur hover:bg-white/10 hover:text-white transition-all duration-300"
            aria-label="View projects"
          >
            View My Work
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 px-6 py-3 min-h-12 text-base text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
            aria-label="Download Resume"
          >
            <FaFileDownload className="text-sm" /> Resume
          </a>
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#030712] to-transparent"
      />
    </section>
  );
};

export default Hero;

