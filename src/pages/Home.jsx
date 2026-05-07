import Hero from '../components/sections/Hero';
import ServicesSummary from '../components/sections/ServicesSummary';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <section className="py-24 bg-brand-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Terapia Bienestar" 
                  className="w-full h-full object-cover"
                />
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8">
                Un puente hacia tu <br /> <span className="text-brand-primary italic font-serif">ser esencial</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Mi nombre es Mercedes Iglesias y mi propósito es acompañarte en tu proceso de autodescubrimiento y sanación. Entiendo el bienestar como un equilibrio dinámico entre el cuerpo, la mente y el espíritu.
              </p>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                A través de la terapia transpersonal y diversas herramientas de mentoría, trabajamos no solo los síntomas, sino la raíz de lo que te impide vivir una vida plena y con sentido.
              </p>
              <button className="text-brand-primary font-bold flex items-center gap-2 group border-b-2 border-brand-primary pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
                Conoce más sobre mi trayectoria
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSummary />

      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 blur-[120px] -z-0"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              ¿Listo para iniciar tu camino hacia el <span className="text-brand-primary">bienestar</span>?
            </h2>
            <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
              Agenda una primera sesión informativa para conocernos y ver cómo puedo ayudarte en tu proceso personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-accent transition-all shadow-2xl shadow-brand-primary/20">
                Reservar Cita Online
              </button>
              <button className="bg-stone-800 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-stone-700 transition-all border border-stone-700">
                Enviar un Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
