import { motion } from 'framer-motion';
import transpersonalHero from '../assets/transpersonal-hero.png';
import transpersonalPoster from '../assets/bdaa79a9-ffcb-4057-ad7a-20956913bc49.jpg';
import therapyRoom from '../assets/therapy-room.png';

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={transpersonalHero} 
            alt="Terapia Transpersonal Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Terapia Transpersonal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto"
          >
            La terapia transpersonal es un enfoque donde se centra en el individuo como un ser total.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-stone-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Poster Image */}
              <div className="p-8 md:p-12">
                <img 
                  src={transpersonalPoster} 
                  alt="Mercedes Iglesias - Terapia Transpersonal" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right: Text Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl font-display font-bold text-stone-900 mb-2">Coach y Terapia Holística</h2>
                <p className="text-brand-primary font-bold mb-8 uppercase tracking-widest text-sm italic">en su totalidad</p>
                
                <div className="space-y-8 text-stone-700 leading-relaxed">
                  <p className="text-lg">
                    Acompaño a las personas como terapeuta transpersonal, coach y mentora, desde una visión integral que contempla mente, emociones, cuerpo y dimensión espiritual. Mi trabajo se centra en comprender los procesos internos y acompañar de forma respetuosa y personalizada, facilitando el autoconocimiento, el equilibrio y el crecimiento personal.
                  </p>
                  
                  <p className="text-lg">
                    La terapia transpersonal entiende a la persona como un todo, teniendo en cuenta mente, emociones, cuerpo y dimensión espiritual. No se centra únicamente en los síntomas, sino en comprender los procesos internos y la conciencia que influyen en nuestra forma de vivir, sentir y relacionarnos. Parte de la idea de que al integrar todos estos aspectos se favorece un mayor equilibrio, bienestar y crecimiento personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Room Photo Section */}
      <section className="w-full h-[60vh] relative">
        <img 
          src={therapyRoom} 
          alt="Consulta Terapia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2rem] border-l-8 border-brand-primary shadow-xl">
            <p className="text-lg text-stone-700 leading-relaxed">
              En este enfoque terapéutico, el proceso se desarrolla de manera respetuosa y personalizada, acompañando a la persona a explorar su mundo interior con mayor conciencia. A lo largo de las sesiones se trabajan emociones, patrones inconscientes y experiencias profundas mediante la palabra, la atención al cuerpo y la respiración consciente. Este acompañamiento facilita la integración de lo vivido, favoreciendo el equilibrio interno, el autoconocimiento y un bienestar más profundo y sostenido en el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* Subconscious Banner */}
      <section className="py-12 bg-stone-50 border-y border-stone-200">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-sm border border-stone-100 inline-block"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 tracking-[0.1em] uppercase">
              NO OLVIDEMOS QUE EL 90% DE NUESTRO CEREBRO ES INCONSCIENTE.
            </h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
