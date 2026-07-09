'use client';

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const sendEmail = async (e) => {
  e.preventDefault();

  setStatus("sending");

  try {
    console.log("SERVICE ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log("✅ Email Sent Successfully:", result);

    setStatus("success");

    // Reset form only after successful send
    e.target.reset();

    setTimeout(() => {
      setStatus(null);
    }, 5000);

  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    console.log("Status:", error.status);
    console.log("Message:", error.text);

    setStatus("error");

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-[#030712] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-[100px]" />

      <div className="max-w-3xl w-full text-center relative z-10">
        <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto text-base sm:text-lg">
          Got a project idea, want to collaborate, or just want to say hello? Drop me a message and I&apos;ll get back to you!
        </p>

        <form className="space-y-5 bg-white/5 border border-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-left" onSubmit={sendEmail}>
          
          {/* Status Message */}
          {status === 'success' && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center font-medium">
              Message sent successfully! I will get back to you soon. ✅
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium">
              Something went wrong. Please try again or email me directly. ❌
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3.5 rounded-xl border border-white/10
                         bg-white/5 text-white placeholder-gray-500
                         focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              required
              disabled={status === 'sending'}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3.5 rounded-xl border border-white/10
                         bg-white/5 text-white placeholder-gray-500
                         focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              required
              disabled={status === 'sending'}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3.5 rounded-xl border border-white/10
                         bg-white/5 text-white placeholder-gray-500
                         focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              required
              disabled={status === 'sending'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:brightness-110 shadow-lg shadow-orange-500/10 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <FaSpinner className="animate-spin text-lg" /> Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="text-sm" /> Send Message
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-6 border-t border-white/5 text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm sm:text-base">
            Email:{' '}
            <a
              href="mailto:khandanish909577@gmail.com"
              className="text-amber-400 hover:underline hover:text-amber-300 transition-colors"
            >
              khandanish909577@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base">Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

