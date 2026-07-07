'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiFirebase } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-[#a855f7]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    ]
  },
  {
    title: 'Tools & Control',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id='skills' className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-[#030712] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="max-w-5xl w-full text-center relative z-10">
        <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">My Toolbox</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-16">Skills & Technologies</h2>
        
        <div className="space-y-12 text-left">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-5">
              <h3 className="text-xl font-semibold text-gray-200 border-l-4 border-amber-500 pl-3">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10 hover:-translate-y-1 group"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

