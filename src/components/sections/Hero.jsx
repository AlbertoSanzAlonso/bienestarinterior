import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/home-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bienestar Interior Background"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-stone-100/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/80 via-stone-100/40 to-transparent"></div>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Mercedes Iglesias • Terapeuta Transpersonal
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 leading-[1.1] mb-8">
              Encuentra tu equilibrio <br />
              <span className="text-brand-primary">Interior.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
              Acompañamiento terapéutico y mentoría para sanar desde la consciencia y transformar tu vida de manera profunda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group">
                Reservar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/80 backdrop-blur-md text-stone-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all border border-stone-200">
                Conoce mi método
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
