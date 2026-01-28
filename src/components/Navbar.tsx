import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Work', to: '/#projects' },
    { label: 'Research', to: '/#research' },
    { label: 'Skills', to: '/#skills' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Impact', to: '/#achievements' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <HashLink to="/#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-cyan flex gap-[2px] items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="w-1 h-3 bg-background rounded-full" />
            <div className="w-1 h-5 bg-background rounded-full" />
            <div className="w-1 h-3 bg-background rounded-full" />
          </div>
          <span className="text-white font-bold tracking-tighter text-xl">ATUL</span>
        </HashLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <HashLink
              key={link.label}
              to={link.to}
              smooth
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-colors"
            >
              {link.label}
            </HashLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1MjG0GUMb_wtP2tzm1kg7DvC8pNDZvEDC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-accent-cyan text-accent-cyan text-[10px] font-bold uppercase tracking-widest hover:bg-accent-cyan hover:text-background transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/5 p-6 md:hidden h-screen"
          >
            <div className="flex flex-col gap-8 items-center pt-20">
              {links.map(link => (
                <HashLink
                  key={link.label}
                  to={link.to}
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-gray-400 hover:text-white"
                >
                  {link.label}
                </HashLink>
              ))}
              <a
                href="https://drive.google.com/file/d/1MjG0GUMb_wtP2tzm1kg7DvC8pNDZvEDC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 rounded-lg bg-accent-cyan text-background font-bold uppercase tracking-wider text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

