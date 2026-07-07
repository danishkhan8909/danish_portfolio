'use client';

import React from 'react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '6+', label: 'Months Experience' },
    { value: '12+', label: 'Tech Stack Skills' },
    { value: '100%', label: 'Commitment & Support' },
  ];

  return (
    <section id="about" className="min-h-[75vh] flex items-center bg-[#070c1b] px-4 sm:px-6 md:px-8 py-16 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left">
          <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">Who I Am</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            Hello! I&apos;m <span className="font-semibold text-amber-400">Danish Khan</span>. I&apos;m a passionate <span className="text-white font-medium">MERN Stack Developer</span> and <span className="text-white font-medium">DevOps Engineer</span> dedicated to building modern web applications that are highly functional, blazing fast, and visually engaging.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            I specialize in crafting pixel-perfect responsive layouts with <span className="text-amber-400 font-medium">Next.js/React</span> and setting up reliable backend systems using <span className="text-amber-400 font-medium">Node.js, Express, and MongoDB</span>. Additionally, I configure automated deployment pipelines and Docker containers to ensure smooth, production-ready operations.
          </p>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Glowing border background */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-600 to-rose-500 opacity-60 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <img
              src="/danish.jpeg"
              alt="Danish Khan Profile"
              className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-2xl shadow-2xl object-cover border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

