'use client';
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-[#030712] py-8 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Danish Khan. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-600">Built with Next.js, Tailwind CSS, and React 19.</p>
        </div>
      </footer>
    </>
  );
}

