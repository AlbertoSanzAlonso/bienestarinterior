import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import mercedesPhoto from '../assets/mercedes-home.jpg';
import dejarFumarImg from '../assets/dejar-fumar.png';
import parejaCrisisImg from '../assets/pareja-crisis.png';
import presencialImg from '../assets/presencial.png';
import onlineImg from '../assets/online.png';
import packsImg from '../assets/packs.png';
import { Phone, ChevronRight, MessageSquare, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Sobre Mí Section - Reverted to two-column layout with original photo */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src={mercedesPhoto} 
                  alt="Mercedes Iglesias" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-stone-100/20 backdrop-blur-[0.5px]"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-amber-200/20 rounded-full blur-2xl -z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Mercedes Iglesias</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8 leading-tight">
                Un puente hacia tu <br /> <span className="text-brand-primary italic font-serif">ser esencial</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Mi nombre es Mercedes Iglesias y mi propósito es acompañarte en tu proceso de autodescubrimiento y sanación. Entiendo el bienestar como un equilibrio dinámico entre el cuerpo, la mente y el espíritu.
              </p>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                A través de la terapia transpersonal y diversas herramientas de mentoría, trabajamos no solo los síntomas, sino la raíz de lo que te impide vivir una vida plena y con sentido.
              </p>
              <Link 
                to="/sobre-mi" 
                className="text-brand-primary font-bold flex items-center gap-2 group border-b-2 border-brand-primary pb-1 hover:text-brand-accent hover:border-brand-accent transition-all inline-flex"
              >
                Conoce más sobre mi trayectoria
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Training Banner */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white">
                <Star size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-display font-bold text-stone-900">Formación Especializada</h3>
                <p className="text-stone-500">Liderazgo Humano y Gestión Emocional</p>
              </div>
            </div>
            <Link to="/formacion" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all flex items-center gap-2 group">
              Saber más <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Catalog / WhatsApp Section */}
      <section className="py-24 bg-brand-primary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Catálogo disponible vía WhatsApp</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Terapia de Pareja', img: parejaCrisisImg, color: 'bg-red-500' },
              { title: '¿Quieres Adelgazar?', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400', color: 'bg-orange-500' },
              { title: 'Dejar de Fumar', img: dejarFumarImg, color: 'bg-blue-500' },
              { title: 'Hipnosis Transpersonal', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400', color: 'bg-brand-accent' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="h-48 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 ${item.color}/40 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-stone-900 mb-4">{item.title}</h3>
                  <a href="https://wa.me/34646164431" className="text-xs font-bold text-brand-primary uppercase tracking-widest flex items-center justify-center gap-2">
                    Ver en WhatsApp <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultas Section - Circular items */}
      <section className="py-32 bg-stone-50">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Consultas y Terapias</h2>
            <p className="text-stone-500 italic">Encuentra el espacio de sanación que mejor se adapte a ti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Consulta Presencial', desc: 'Sevilla y Alrededores', icon: presencialImg },
              { title: 'Consulta Online', desc: 'Desde cualquier lugar', icon: onlineImg },
              { title: 'Packs y Promociones', desc: 'Bonos y sesiones especiales', icon: packsImg }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl mb-8 border-4 border-white hover:scale-105 transition-transform duration-500">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500 mb-6">{item.desc}</p>
                <Link to={item.title === 'Packs y Promociones' ? '/tarifas' : '/contacto'} className="bg-brand-primary/10 text-brand-primary px-8 py-2 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/20">
                  {item.title === 'Packs y Promociones' ? 'VER TARIFAS' : 'RESERVAR CITA'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot / Testimonials Section */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="section-container">
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-stone-100 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-brand-primary text-brand-primary" />)}
            </div>
            <h3 className="text-3xl font-display font-bold text-stone-900 mb-6">Testimonios de Bienestar</h3>
            <p className="text-stone-400 font-medium mb-8">Nuestros pacientes avalan la calidad de nuestro acompañamiento</p>
            <div className="flex items-center gap-3 text-brand-primary font-bold">
              <Star className="w-5 h-5 fill-brand-primary" />
              <span>Trustpilot</span>
              <div className="w-px h-6 bg-stone-200 mx-2"></div>
              <Link to="/testimonios" className="hover:underline">Leer todos los comentarios →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-20 bg-stone-900 text-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">¿Hablamos?</h2>
          <p className="text-stone-400 mb-12 max-w-xl mx-auto">Estoy aquí para escucharte y acompañarte en tu proceso. No dudes en contactarme para cualquier consulta.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:34646164431" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-all border border-white/10">
              <Phone className="text-brand-primary" /> 646 16 44 31
            </a>
            <a href="https://wa.me/34646164431" className="flex items-center gap-3 bg-brand-primary hover:bg-brand-accent px-8 py-4 rounded-full transition-all shadow-lg shadow-brand-primary/20">
              <MessageSquare /> Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
