import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, ShieldCheck } from 'lucide-react';
import mercedesPhoto from '../assets/mercedes.webp';

const About = () => {
  return (
    <div className="pt-48 pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={mercedesPhoto} 
                alt="Mercedes Iglesias" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-stone-100 max-w-xs">
              <p className="italic text-stone-600 font-serif leading-relaxed">
                "Mi misión es ayudarte a encontrar la paz que ya reside en ti, despejando los obstáculos que el ego y la mente han construido."
              </p>
              <div className="mt-4 font-display font-bold text-brand-primary">— Mercedes Iglesias</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Sobre mí</span>
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-8 leading-tight">
              Este camino me eligió, <br /> <span className="text-brand-primary">no lo elegí yo</span>
            </h1>
            
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 space-y-6">
              <p className="text-xl font-medium italic text-brand-accent">
                "En todo este proceso me he formado en la mayor de las escuelas, la vida."
              </p>
              <p>
                Soy Mercedes Iglesias, Terapeuta Transpersonal y Mentora. Mi camino en el mundo del bienestar comenzó hace más de 15 años, movida por una búsqueda personal de sentido y equilibrio.
              </p>
              <p>
                A lo largo de mi trayectoria, he integrado diversas disciplinas que me permiten abordar la salud desde una perspectiva holística: desde la Programación Neurolingüística (PNL) y la Hipnosis, hasta la Bioneurodescodificación y la Terapia Transpersonal.
              </p>
              <p>
                Mi enfoque no se queda en la superficie del problema. Busco acompañarte a las profundidades de tu ser, donde residen las causas reales de tus conflictos y también tus mayores recursos de sanación.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Award className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 mb-1">Formación</h4>
                  <p className="text-sm text-stone-500">Certificada en Terapia Transpersonal, PNL y Bioneurodescodificación.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 mb-1">Experiencia</h4>
                  <p className="text-sm text-stone-500">Más de una década acompañando a personas en su desarrollo personal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 mb-1">Pasión</h4>
                  <p className="text-sm text-stone-500">Comprometida con la evolución consciente y el bienestar integral.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 mb-1">Ética</h4>
                  <p className="text-sm text-stone-500">Espacio seguro, confidencial y libre de juicios para tu proceso.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
