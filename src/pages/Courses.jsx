import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const integrativeAreas = [
  {
    title: 'Mente Consciente',
    subtitle: 'Parte consciente y emocional',
    desc: 'Para gestionar con herramientas psicológicas cognitivas-conductuales, para cambiar nuestro enfoque, nuestra verdad sobre cualquier cuestión, afinar y gestionar nuestras emociones y por tanto dejar de "sufrir por nada externo".',
    tools: 'COACHING, TERAPIA DE PAREJA, EMDR, y multitud de estrategias y HERRAMIENTAS CONDUCTUALES para llegar a tu propia verdad.',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-100',
    icon: Brain
  },
  {
    title: 'Mindfulness',
    subtitle: 'Cuerpo, mente y alma',
    desc: 'El mindfulness es una práctica de atención plena que consiste en estar presente en el aquí y ahora, tomando conciencia de lo que ocurre en nuestro interior y a nuestro alrededor sin juzgar.',
    details: 'Cuando hablamos de mindfulness aplicado al cuerpo, la mente y el alma, nos referimos a un enfoque integral que busca equilibrio y bienestar en todas las dimensiones del ser.',
    color: 'bg-purple-50 text-purple-900 border-purple-100',
    icon: Heart
  },
  {
    title: 'Mente Inconsciente',
    subtitle: 'Herramientas para cambios profundos',
    desc: 'Herramientas para cambios psicológicos de patrones o creencias limitantes, miedos, fobias o culpas que bloquean la sanación que en gran parte de las ocasiones tienen raíces inconscientes y transgeneracionales.',
    tools: 'PROGRAMACIÓN NEUROLINGÜÍSTICA (PNL), HIPNOSIS CLÍNICA, BIONEURODESCODIFICACIÓN, RECONECTIVA, MUSICOTERAPIA CON MENSAJES SUBLIMINALES...',
    color: 'bg-cyan-50 text-cyan-900 border-cyan-100',
    icon: Sparkles
  },
  {
    title: 'Cuerpo Energético',
    subtitle: 'Conexión espiritual',
    desc: 'Conectando con nuestra parte espiritual clínica con herramientas tales como la RECONEXIÓN (desde 1993 como terapia complementaria válida para la medicina y para trastornos emocionales).',
    details: 'Flores de Bach, registros akásicos... donde se reconectan nuestros cuerpos que son fundamentales para nuestro equilibrio.',
    color: 'bg-amber-50 text-amber-900 border-amber-100',
    icon: Activity
  }
];

const modules = [
  {
    title: "EDUCACIÓN Y GESTIÓN EMOCIONAL",
    desc: "Comprende tus emociones, su función y aprende a gestionarlas de forma consciente."
  },
  {
    title: "ESTRÉS - GESTIÓN Y HERRAMIENTAS MENTALES",
    desc: "Identifica el origen del estrés y desarrolla recursos prácticos para equilibrarlo."
  },
  {
    title: "PSICOLOGÍA HOLÍSTICA",
    desc: "Una visión integral del ser humano: mente, emoción, cuerpo y esencia."
  },
  {
    title: "LA COMUNICACIÓN COMO ELEMENTO CLAVE EN LA ESTRUCTURA DE UNA TERAPIA TRANSPERSONAL",
    desc: "Aprende a comunicar desde la empatía, la escucha y la conexión profunda."
  },
  {
    title: "LAS CREENCIAS CUANDO LAS POSIBILIDADES SE HACEN INFINITAS",
    desc: "Descubre cómo transformar creencias limitantes en impulso para tu crecimiento."
  },
  {
    title: "PROGRAMACIÓN NEUROLINGÜÍSTICA (PNL)",
    desc: "Herramientas para reprogramar pensamientos, conductas y resultados."
  },
  {
    title: "HIPNOSIS Y PATRONES HIPNÓTICOS",
    desc: "Explora el poder del subconsciente como motor de cambio y transformación."
  },
  {
    title: "INTELIGENCIA EMOCIONAL",
    desc: "Desarrolla la capacidad de comprender, gestionar y canalizar emociones."
  },
  {
    title: "LIDERAZGO",
    desc: "Lidera tu vida desde la conciencia, la coherencia y el propósito."
  },
  {
    title: "NUTRICIÓN CONSCIENTE",
    desc: "Conecta con una alimentación equilibrada para cuerpo y mente."
  },
  {
    title: "MINDFULNESS",
    desc: "Entrena la atención plena para vivir el presente con serenidad."
  },
  {
    title: "HO'OPONOPONO",
    desc: "Una práctica de liberación emocional basada en el perdón y la reconciliación interior."
  },
  {
    title: "PRÁCTICAS",
    desc: "Integración real de los aprendizajes a través de experiencias guiadas."
  }
];

const Courses = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  return (
    <div className="pt-48 pb-24 bg-brand-bg/30">
      <div className="section-container">
        {/* ... (Header and Integrative Areas remain same) */}
        <div className="max-w-4xl mx-auto text-center mb-20 bg-white p-12 rounded-[2rem] shadow-xl border border-stone-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-8">Terapias Integrativas</h1>
            <p className="text-lg text-stone-600 leading-relaxed italic">
              Todas estas terapias van enfocadas a integrar y favorecer la COHERENCIA ENTRE ESPÍRITU, ALMA, MENTE Y CUERPO (HACER y sentir lo que se piensa). Para ello utilizo una serie de técnicas integrales que trabajan las partes más importantes de un ser humano: consciente e inconsciente, alma, cuerpo físico y cuerpo emocional.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {integrativeAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${area.color} p-10 rounded-[2.5rem] border shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="p-3 bg-white/50 rounded-2xl">
                  <area.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">{area.title}</h3>
                  <p className="text-sm font-medium opacity-70 uppercase tracking-widest">{area.subtitle}</p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed">{area.desc}</p>
              {area.tools && (
                <div className="bg-white/30 p-4 rounded-xl border border-white/20">
                  <p className="text-xs font-bold uppercase mb-1 opacity-60">Herramientas:</p>
                  <p className="text-sm font-bold">{area.tools}</p>
                </div>
              )}
              {area.details && (
                <p className="text-sm italic opacity-80">{area.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Modular Training Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Formación Especializada</h2>
            <p className="text-lg text-stone-600">Programa formativo por módulos diseñado para tu crecimiento integral.</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-100">
            <div className="p-2 space-y-1">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setExpandedModule(index)}
                  onMouseLeave={() => setExpandedModule(null)}
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="flex flex-col p-6 rounded-[1.5rem] hover:bg-stone-50 transition-all cursor-pointer group border-b border-stone-50 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-bold text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                        {index === modules.length - 1 ? "FIN" : `MÓDULO ${(index + 1).toString().padStart(2, '0')}`}
                      </span>
                      <span className="text-lg font-bold text-stone-800 uppercase tracking-tight leading-tight">{module.title}</span>
                    </div>
                    <CheckCircle2 className={cn(
                      "w-5 h-5 transition-all duration-300",
                      expandedModule === index ? "text-brand-primary opacity-100 scale-110" : "text-emerald-500 opacity-0 group-hover:opacity-40"
                    )} />
                  </div>
                  
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-4 md:pl-24 flex items-start gap-2 text-stone-600">
                          <span className="text-brand-primary text-lg mt-0.5">🔹</span>
                          <p className="text-base font-medium leading-relaxed">{module.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-brand-primary/5 px-8 py-4 rounded-2xl border border-brand-primary/10">
              <p className="text-brand-primary font-bold italic">
                "No olvidemos que el 90% de nuestro cerebro es inconsciente."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
