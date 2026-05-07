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
    { name: 'Formación Especializada', path: '/formacion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 px-4 py-6">
      <div 
        className={cn(
          "max-w-7xl mx-auto flex justify-between items-center rounded-full px-4 md:px-6 py-2 md:py-3 border transition-all duration-500",
          isScrolled 
            ? "bg-brand-primary border-brand-accent shadow-2xl text-white" 
            : "bg-white/10 backdrop-blur-md border-white/20 text-stone-900"
        )}
      >
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img 
            src={logo} 
            alt="Bienestar Interior" 
            className={cn(
              "h-12 md:h-20 w-auto transition-all duration-500",
              isScrolled ? "brightness-0 invert" : ""
            )} 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[13px] xl:text-sm font-medium transition-colors relative py-1 whitespace-nowrap',
                isScrolled 
                  ? (location.pathname === link.path ? 'text-stone-900' : 'text-stone-300 hover:text-white')
                  : (location.pathname === link.path ? 'text-brand-primary' : 'text-stone-700 hover:text-brand-primary')
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5",
                    isScrolled ? "bg-stone-900" : "bg-brand-primary"
                  )}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contacto"
            className={cn(
              "px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold transition-all hover:shadow-lg active:scale-95 whitespace-nowrap uppercase tracking-wider",
              isScrolled
                ? "bg-stone-900 text-white hover:bg-black shadow-black/10"
                : "bg-brand-primary text-white hover:bg-brand-accent shadow-brand-primary/20"
            )}
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors p-2",
            isScrolled ? "text-white" : "text-stone-600"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "absolute top-24 left-4 right-4 rounded-3xl p-6 shadow-2xl border lg:hidden flex flex-col gap-2 max-h-[80vh] overflow-y-auto",
              isScrolled ? "bg-brand-primary border-brand-accent" : "bg-white/95 backdrop-blur-xl border-stone-100"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 px-4 rounded-xl transition-colors',
                  location.pathname === link.path 
                    ? 'bg-brand-primary/20 text-brand-primary font-bold' 
                    : (isScrolled ? 'text-white/80 hover:bg-white/10 hover:text-white' : 'text-stone-600 hover:bg-stone-50')
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className={cn(
                "mt-4 text-center py-4 rounded-xl font-bold shadow-lg uppercase tracking-widest",
                isScrolled ? "bg-stone-900 text-white" : "bg-brand-primary text-white"
              )}
            >
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
