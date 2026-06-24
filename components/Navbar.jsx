"use client";
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Gets the current route (e.g., '/', '/about')

  // Define all links here for easy management
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 md:px-8 bg-white/10 backdrop-blur-md rounded-2xl mx-4 md:mx-8 border border-white/20 text-white shadow-lg sticky top-6 z-50">
      
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image 
          src="/assets/logo.png" 
          alt="Digroz Studio Logo" 
          width={40} 
          height={40} 
          className="object-cover rounded-md" // Added rounded-md just in case your logo is square
        />
        <span className="font-semibold tracking-wide text-lg">DIGROZ STUDIO</span>
      </Link>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden md:flex gap-8 font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <li key={link.name} className="relative flex flex-col items-center justify-center">
              <Link 
                href={link.href} 
                className={`transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
              
              {/* The Glowing Bottom Highlight for Active Link */}
              {isActive && (
                <span className="absolute -bottom-[21px] w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
      <button 
        className="md:hidden text-gray-200 hover:text-white transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium border-b border-white/5 pb-3 transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
      
    </nav>
  );
}