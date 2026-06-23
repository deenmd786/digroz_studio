"use client";

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full flex flex-col items-center z-10 relative">
      
      {/* Page Title */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
          Get in Touch
        </h1>
      </div>

      {/* Glassmorphism Form Container */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-6 md:p-10 shadow-2xl relative mb-12">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-200">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="What can we help you with?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-400 text-center text-sm font-medium mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm font-medium mt-2">Something went wrong. Please try again.</p>
          )}

        </form>
      </div>

      {/* Direct Email Display Card */}
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center gap-3 hover:bg-white/15 transition-colors cursor-pointer">
        <Mail size={40} className="text-cyan-400 mb-2 drop-shadow-md" />
        <a href="mailto:digrozstudio@gmail.com" className="text-lg font-medium text-white tracking-wide">
          digrozstudio@gmail.com
        </a>
      </div>

    </div>
  );
}