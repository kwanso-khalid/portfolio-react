
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { SunIcon, MoonIcon } from './icons';
import Logo from './Logo';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary-dark/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                   ${isActive 
                      ? 'text-accent-blue bg-primary-dark' 
                      : 'text-light-secondary hover:text-text-light-primary hover:bg-slate-700'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-light-secondary hover:bg-slate-700 hover:text-text-light-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full text-light-secondary hover:bg-slate-700 hover:text-text-light-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-secondary hover:text-text-light-primary hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 z-40 bg-secondary-dark shadow-lg rounded-b-lg animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium
                   ${isActive 
                      ? 'text-accent-blue bg-primary-dark' 
                      : 'text-light-secondary hover:text-text-light-primary hover:bg-slate-700'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
