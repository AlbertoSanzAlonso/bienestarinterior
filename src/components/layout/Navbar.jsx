import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo-improved.webp';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsHidden(false); // Ensure navbar is visible when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed w-full z-50 px-2 sm:px-4 py-4 sm:py-6"
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto flex justify-between items-center rounded-full px-4 md:px-6 py-1.5 md:py-3 border transition-all duration-500",
            isScrolled || isOpen
              ? "bg-brand-primary border-brand-accent shadow-2xl text-white" 
              : "bg-white/90 backdrop-blur-md border-white/20 text-stone-900 shadow-lg"
          )}
        >
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src={logo} 
              alt="Bienestar Interior" 
              className={cn(
                "h-8 sm:h-12 md:h-20 w-auto transition-all duration-500",
                (isScrolled || isOpen) ? "brightness-0 invert" : ""
              )} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {/* ... (rest of the links) */}
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Un poco de mí', path: '/sobre-mi' },
              { name: 'Terapia Transpersonal y Mentoría', path: '/servicios' },
              { name: 'Terapias y Cursos', path: '/cursos' },
              { name: 'Valor Consultas', path: '/tarifas' },
              { name: 'Formación Especializada', path: '/formacion' },
            ].map((link) => (
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
              "lg:hidden transition-colors p-2 rounded-full",
              (isScrolled || isOpen) ? "text-white hover:bg-white/10" : "text-stone-600 hover:bg-stone-100"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] lg:hidden bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-brand-primary p-8 pt-32 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2 overflow-y-auto">
                {[
                  { name: 'Inicio', path: '/' },
                  { name: 'Un poco de mí', path: '/sobre-mi' },
                  { name: 'Terapia Transpersonal y Mentoría', path: '/servicios' },
                  { name: 'Terapias y Cursos', path: '/cursos' },
                  { name: 'Valor Consultas', path: '/tarifas' },
                  { name: 'Formación Especializada', path: '/formacion' },
                ].map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'flex items-center justify-between text-2xl font-display font-bold py-4 border-b border-white/10 transition-colors',
                        location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                      )}
                    >
                      {link.name}
                      {location.pathname === link.path && <ArrowRight size={20} />}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  to="/contacto"
                  className="block text-center py-5 rounded-2xl bg-white text-brand-primary font-bold text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
                >
                  Contacto
                </Link>
                <p className="text-center text-white/40 text-sm mt-8 font-medium">
                  © 2024 Bienestar Interior
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
