import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-brand-primary p-1.5 rounded-full">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Bienestar Interior
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Acompañamiento terapéutico integral para el equilibrio emocional y el crecimiento personal. Mercedes Iglesias, Terapeuta Transpersonal.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Inicio</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-brand-primary transition-colors">Un poco de mí</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-primary transition-colors">Terapeuta y Mentoría</Link></li>
              <li><Link to="/cursos" className="hover:text-brand-primary transition-colors">Terapias y Cursos</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>646 16 44 31</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="break-all">mercedesiglesias@bienestarinterior.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Dos Hermanas, Sevilla</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Reserva tu cita</h4>
            <p className="text-stone-400 text-sm mb-6">
              Comienza hoy mismo tu camino hacia el bienestar interior.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all w-full text-center"
            >
              Contactar ahora
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500">
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
