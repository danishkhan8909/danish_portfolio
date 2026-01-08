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
        (result) => {
          alert("Email sent successfully ✅");
          console.log(result.text);
        },
        (error) => {
          alert("Error ❌");
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id='contact' className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Got a project idea or just want to say hello? Fill out the form below or reach out via Email.
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>

          {/* Name */}
          <div className="text-left">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Message */}
          <div className="text-left">
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p>Email: <a href="mailto:your.email@example.com" className="text-orange-600 hover:underline">khandanish909577@gmail.com</a></p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
