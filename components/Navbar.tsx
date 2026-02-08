import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic classes for scroll state
  const navBg = isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent border-transparent';
  const textColor = isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-300 hover:text-white';
  const logoColor = isScrolled ? 'text-slate-900' : 'text-white';
  const mobileBtnColor = isScrolled ? 'text-slate-500' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg text-white shadow-lg">
                <Code2 size={24} />
              </div>
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoColor}`}>AVR.dev</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`font-medium transition-colors text-sm cursor-pointer ${textColor}`}
              >
                {link.name}
              </a>
            ))}
            <div className={`flex items-center space-x-4 pl-4 border-l ${isScrolled ? 'border-slate-200' : 'border-slate-700'}`}>
              <a href={`https://github.com/${RESUME_DATA.contact.github}`} target="_blank" rel="noreferrer" className={`${textColor}`}>
                <Github size={20} />
              </a>
              <a href={`https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className={`${textColor}`}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${mobileBtnColor}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};