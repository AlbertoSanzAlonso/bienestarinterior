import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, ChevronRight, Users, Clock, Play, Calendar } from 'lucide-react';
import trainingBg from '../assets/training-hero.png';

const SpecializedTraining = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg">
      <div className="section-container">
        {/* Editorial Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                Formación Especializada
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 mb-8 leading-[1.1]">
                Liderazgo <br /> <span className="text-brand-primary">Humano.</span>
              </h1>
              <div className="space-y-6 text-xl text-stone-600 leading-relaxed italic border-l-4 border-brand-primary/20 pl-8 py-2">
                <p>
                  "Reaccionar es un impulso; decidir es una conquista. Aceptar nuestra vulnerabilidad no nos hace frágiles, nos hace reales, pero es la capacidad de integrarla lo que nos otorga el verdadero mando."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={trainingBg} 
                  alt="Liderazgo Humano" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                {/* White Fade Overlays */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-80"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Block */}
        <section className="max-w-4xl mx-auto mb-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-2xl md:text-3xl font-display text-stone-800 leading-snug">
              Lo humano no es evitar la tormenta interna, sino habitarla con la lucidez necesaria para que no sea ella quien dicte el camino.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              La soberanía personal nace cuando dejamos de pelearnos con lo que sentimos y empezamos a usarlo como combustible para la claridad. Quien niega su mundo interno fractura su autoridad; quien lo integra, construye una presencia inquebrantable. No buscamos la ausencia de emoción, sino la maestría de nuestra respuesta.
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Para, respira y decide.</span>
              <div className="w-16 h-1 bg-brand-primary/20 rounded-full"></div>
            </div>
            <h3 className="text-3xl font-display font-bold text-stone-900 mt-12">
              Liderar es el arte de habitar tu propia verdad para proyectar una dirección que nadie pueda cuestionar.
            </h3>
          </motion.div>
        </section>

        {/* Courses Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Live Courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-stone-100 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-brand-primary rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg shadow-brand-primary/20 group-hover:rotate-6 transition-transform">
              <Calendar size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold text-stone-900 mb-6">Cursos en Directo</h3>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Aprende en tiempo real con acompañamiento cercano y guía personalizada en cada sesión con nuestros cursos en directo.
            </p>
            <div className="mt-auto w-full">
              <Link
                to="/contacto"
                className="w-full py-5 rounded-2xl bg-brand-primary text-white font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2"
              >
                Reservar plaza
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Asynchronous Courses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-[3.5rem] p-12 shadow-2xl flex flex-col items-center text-center group text-white"
          >
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-10 border border-white/20 group-hover:-rotate-6 transition-transform">
              <Play size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">Contenido a tu ritmo</h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Accede al contenido cuando quieras y avanza a tu propio ritmo, adaptándolo a tu día a día con nuestros cursos asíncronos.
            </p>
            <div className="mt-auto w-full">
              <Link
                to="/cursos"
                className="w-full py-5 rounded-2xl bg-white text-stone-900 font-bold text-lg hover:bg-stone-100 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Mi bienestar, mis reglas
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Holistic Section Footer */}
        <div className="mt-40 text-center">
          <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Coach y Terapia Transpersonal</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedTraining;
