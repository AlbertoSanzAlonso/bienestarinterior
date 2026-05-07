import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/logo-improved.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="Bienestar Interior" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm">
              Acompañamiento terapéutico integral para el equilibrio emocional y el crecimiento personal. Mercedes Iglesias, Terapeuta Transpersonal.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a 
                href="https://www.instagram.com/bienestarinteriorsevilla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-stone-900" />
              </a>
              <a 
                href="https://www.facebook.com/bienestarinteriorsevilla?fref=ts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-stone-900" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mercedes-iglesias-canle-6b96bb27/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-stone-900" />
              </a>
              <a 
                href="https://www.youtube.com/@BienestarYSer-o1b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-stone-900" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-white/70 transition-colors">Un poco de mí</Link></li>
              <li><Link to="/servicios" className="hover:text-white/70 transition-colors">Terapeuta y Mentoría</Link></li>
              <li><Link to="/cursos" className="hover:text-white/70 transition-colors">Terapias y Cursos</Link></li>
              <li><Link to="/formacion" className="hover:text-white/70 transition-colors">Formación Especializada</Link></li>
              <li><Link to="/contacto" className="hover:text-white/70 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm font-medium flex flex-col items-center md:items-start">
              <li className="flex items-start gap-3 text-white/90">
                <Phone className="w-5 h-5 text-white/70 shrink-0" />
                <span>646 16 44 31</span>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <Mail className="w-5 h-5 text-white/70 shrink-0" />
                <span className="break-all">mercedesiglesias@bienestarinterior.org</span>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <MapPin className="w-5 h-5 text-white/70 shrink-0" />
                <span>Dos Hermanas, Sevilla</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Reserva tu cita</h4>
            <p className="text-white/90 text-sm mb-6">
              Comienza hoy mismo tu camino hacia el bienestar interior.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all w-full text-center shadow-lg shadow-black/5"
            >
              Contactar ahora
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/70 font-medium">
          <p>© {currentYear} Bienestar Interior. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
