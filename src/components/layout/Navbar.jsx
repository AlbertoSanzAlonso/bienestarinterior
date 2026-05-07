import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo-improved.webp';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Un poco de mí', path: '/sobre-mi' },
    { name: 'Terapeuta y Mentoría', path: '/servicios' },
    { name: 'Terapias y Cursos', path: '/cursos' },
    { name: 'Valor Consultas', path: '/tarifas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-transparent backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Bienestar Interior" className="h-25 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary relative py-1',
                location.pathname === link.path ? 'text-brand-primary' : 'text-stone-600'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95"
          >
            Reservar Cita
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
        >
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
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-stone-100 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 px-4 rounded-xl transition-colors',
                  location.pathname === link.path ? 'bg-brand-primary/10 text-brand-primary' : 'text-stone-600 hover:bg-stone-50'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-brand-primary text-white text-center py-3 rounded-xl font-bold"
            >
              Reservar Cita
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
