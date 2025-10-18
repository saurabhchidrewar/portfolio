'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (index: number) => {
    const sections = [
      0, // Header
      800, // About
      1600, // Experience
      2400, // Skills
      3200, // Projects
      4000, // Awards
      4800, // Contact
    ];

    if (sections[index] !== undefined) {
      window.scrollTo({
        top: sections[index],
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', index: 0 },
    { label: 'About', index: 1 },
    { label: 'Experience', index: 2 },
    { label: 'Skills', index: 3 },
    { label: 'Projects', index: 4 },
    { label: 'Awards', index: 5 },
    { label: 'Contact', index: 6 },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              style={{
                color: isScrolled ? '#6C63FF' : 'white',
              }}
              whileHover={{ scale: 1.05 }}
            >
              SC
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.index)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-[#6C63FF]'
                      : 'text-white hover:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: isScrolled ? '#6C63FF' : 'white' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-20 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl p-6 md:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.index)}
                className="text-left px-4 py-3 text-gray-700 hover:text-[#6C63FF] hover:bg-gray-50 rounded-lg transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
