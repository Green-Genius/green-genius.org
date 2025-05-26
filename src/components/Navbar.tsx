'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VagaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTrialClick = () => {
    console.log('Trial started');
    // Add your trial logic here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className='text-black scale-150'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-leaf-fill" viewBox="0 0 16 16">
                <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z" />
              </svg>
            </span>
            <span className="text-2xl font-bold text-black">GreenGenius</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleTrialClick}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Essai Gratuit
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-black hover:text-gray-600 transition-colors py-2 text-left"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-black hover:text-gray-600 transition-colors py-2 text-left"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-gray-600 transition-colors py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}