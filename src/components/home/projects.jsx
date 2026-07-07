'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

// Custom inline SVG for External Link to guarantee compatibility
const ExternalLinkIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-lg"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const projectsData = [
  {
    title: 'Weather App',
    description: 'A full-stack MERN application that provides real-time weather information with a clean, dynamic, and responsive user interface using weather APIs.',
    category: 'MERN Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Weather API', 'Tailwind CSS'],
    github: 'https://github.com/danishkhan8909/weather-app',
    live: 'https://danish-weather-app.vercel.app',
    gradient: 'from-amber-500/20 to-orange-500/10'
  },
  {
    title: 'Employee Tracking System',
    description: 'A complete MERN Stack application for managing employees, tracking tasks, monitoring team progress, and improving overall workflow efficiency.',
    category: 'MERN Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    github: 'https://github.com/danishkhan8909/employee-tracking-system',
    live: 'https://danish-employee-tracker.vercel.app',
    gradient: 'from-orange-500/20 to-rose-500/10'
  },
  {
    title: 'Todo App',
    description: 'A full-stack task management application that allows users to create, update, delete, and organize their daily tasks with secure database storage.',
    category: 'MERN Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/danishkhan8909/todo-app',
    live: 'https://danish-todo-app.vercel.app',
    gradient: 'from-rose-500/20 to-amber-500/10'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'MERN Stack'];

  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 sm:py-28 bg-[#070c1b] relative overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">My Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Projects I&apos;ve Built</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-amber-500 text-[#030712] shadow-lg shadow-amber-500/20 font-semibold'
                  : 'bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col h-full rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm overflow-hidden group hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card visual accent */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6 border-b border-white/5`}>
                <div className="absolute inset-0 bg-[#030712]/30 backdrop-blur-[2px]" />
                <span className="relative font-bold text-lg text-white/90 text-center select-none font-mono">
                  {project.title.split(' - ')[0]}
                </span>
                <span className="absolute top-3 right-3 bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 text-gray-400 text-xs px-2.5 py-1 rounded-lg border border-white/5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200"
                  >
                    <FaGithub className="text-base" /> View Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs sm:text-sm font-semibold hover:brightness-110 shadow-md shadow-orange-500/10 transition-all duration-200"
                  >
                    <ExternalLinkIcon /> Live Demo
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
