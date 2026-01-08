'use client';

import React from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          alert("Email sent successfully ✅");
        },
        () => {
          alert("Something went wrong ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-50"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact Me
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Got a project idea or just want to say hello? Fill out the form below.
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>

          {/* Name */}
          <div className="text-left">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Message */}
          <div className="text-left">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg
                       hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p>
            Email:{' '}
            <a
              href="mailto:khandanish909577@gmail.com"
              className="text-orange-600 hover:underline"
            >
              khandanish909577@gmail.com
            </a>
          </p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
