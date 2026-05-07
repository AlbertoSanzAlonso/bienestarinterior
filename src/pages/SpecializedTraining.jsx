import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Phone, Mail, Instagram, ChevronRight } from 'lucide-react';
import therapyImg from '../assets/therapy-room.png';

const SpecializedTraining = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Hero Section - Inspired by the Poster */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={therapyImg} 
            alt="Consulta Terapia" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Circular Logo Pattern Style Overlay */}
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-[2.5]">
                <div className="w-64 h-64 border-[1px] border-brand-primary rounded-full animate-ping"></div>
                <div className="absolute w-56 h-56 border-[1px] border-brand-primary rounded-full"></div>
                <div className="absolute w-48 h-48 border-[1px] border-brand-primary rounded-full"></div>
              </div>
              
              <div className="relative z-10 space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 tracking-tight">
                  TERAPEUTA <br /> 
                  <span className="font-bold tracking-[0.2em] text-brand-primary">TRANSPERSONAL</span>
                </h2>
                <p className="text-xl md:text-2xl italic text-stone-600 font-display">especialista en</p>
                <h1 className="text-7xl md:text-9xl font-display font-bold text-stone-900 drop-shadow-sm tracking-tight">
                  HIPNOSIS
                </h1>
              </div>
            </div>

            <div className="mt-16 space-y-4">
              <h3 className="text-3xl font-display text-stone-800">Mercedes Iglesias Canle</h3>
              <div className="flex flex-wrap justify-center gap-6 text-stone-600 font-medium">
                <a href="tel:646164431" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Phone size={18} /> 646 16 44 31
                </a>
                <a href="mailto:mercedesiglesias@bienestarinterior.org" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Mail size={18} /> mercedesiglesias@bienestarinterior.org
                </a>
                <a href="https://instagram.com/bienestarinteriorsevilla" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Instagram size={18} /> @bienestarinteriorsevilla
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="section-container mb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-6">Coach y Terapia Holística</h2>
            <p className="text-xl text-brand-primary font-medium italic">"En la terapia transpersonal se considera a la persona en su totalidad"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 flex flex-col justify-center"
            >
              <p className="text-lg leading-relaxed text-stone-700">
                Acompaño a las personas como terapeuta transpersonal, coach y mentora, desde una visión integral que contempla mente, emociones, cuerpo y dimensión espiritual. Mi trabajo se centra en comprender los procesos internos y acompañar de forma respetuosa y personalizada, facilitando el autoconocimiento, el equilibrio y el crecimiento personal.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10" />
              <p className="text-lg leading-relaxed italic relative z-10">
                La terapia transpersonal entiende a la persona como un todo. No se centra únicamente en los síntomas, sino en comprender los procesos internos y la conciencia que influyen en nuestra forma de vivir, sentir y relacionarnos.
              </p>
            </motion.div>
          </div>

          <div className="bg-emerald-50 p-12 rounded-[3.5rem] border border-emerald-100 shadow-inner">
            <p className="text-lg text-emerald-900 leading-relaxed text-center">
              En este enfoque terapéutico, el proceso se desarrolla de manera respetuosa y personalizada, acompañando a la persona a explorar su mundo interior con mayor conciencia. A lo largo de las sesiones se trabajan emociones, patrones inconscientes y experiencias profundas mediante la palabra, la atención al cuerpo y la respiración consciente. Este acompañamiento facilita la integración de lo vivido, favoreciendo el equilibrio interno, el autoconocimiento y un bienestar más profundo y sostenido en el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* Hypnosis Deep Dive */}
      <section className="bg-stone-50 py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-display font-bold text-stone-900 mb-8">Hipnosis Clínica y Transpersonal</h2>
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed mb-10">
                <p>
                  La hipnosis es una de las herramientas más potentes para acceder al 90% de nuestra mente: el subconsciente. A través de un estado de relajación profunda y enfoque dirigido, podemos reprogramar patrones de conducta, liberar bloqueos emocionales y transformar creencias que nos limitan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    'Gestión de ansiedad y estrés', 
                    'Superación de miedos y fobias', 
                    'Cambio de hábitos (Tabaco, Peso)', 
                    'Mejora de la autoestima'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="text-sm font-bold text-stone-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-stone-800 transition-all shadow-xl"
              >
                Reservar Consulta de Hipnosis
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-brand-primary/20 rounded-[5rem] blur-3xl -rotate-6"></div>
              <div className="relative bg-white p-6 rounded-[5rem] shadow-2xl rotate-2 overflow-hidden border border-stone-100">
                <div className="aspect-[4/5] bg-stone-200">
                  <img 
                    src={therapyImg} 
                    alt="Transformación Mental" 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-4 bg-brand-primary text-white p-10 rounded-[3rem] shadow-2xl max-w-xs -rotate-3 border-4 border-white">
                <p className="text-xl font-display italic">"El subconsciente es la llave del cambio real."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecializedTraining;
