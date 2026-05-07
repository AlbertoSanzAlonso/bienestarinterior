import { motion } from 'framer-motion';
import { Brain, Sparkles, Heart, Zap, Waves, Sun } from 'lucide-react';

const services = [
  {
    title: 'Coaching y Mentoría',
    desc: 'Acompañamiento personalizado para alcanzar tus metas y potenciar tu desarrollo personal.',
    icon: Sparkles,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'PNL e Hipnosis',
    desc: 'Herramientas potentes para reprogramar tu mente inconsciente y superar bloqueos.',
    icon: Brain,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Terapia Transpersonal',
    desc: 'Un enfoque holístico que integra la dimensión espiritual y psicológica del ser humano.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Bioneurodescodificación',
    desc: 'Descubre el origen emocional de tus síntomas físicos para sanar desde la raíz.',
    icon: Zap,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Mindfulness y Meditación',
    desc: 'Técnicas de atención plena para reducir el estrés y vivir en el presente.',
    icon: Waves,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Registros Akáshicos',
    desc: 'Accede a la sabiduría de tu alma para obtener guía y claridad en tu camino.',
    icon: Sun,
    color: 'bg-orange-50 text-orange-600',
  },
];

const ServicesSummary = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
            Herramientas para tu <span className="text-brand-primary">Transformación</span>
          </h2>
          <p className="text-lg text-stone-600">
            Utilizo una combinación de técnicas vanguardistas y milenarias para ofrecerte un acompañamiento integral y profundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
