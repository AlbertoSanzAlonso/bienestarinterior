import { motion } from 'framer-motion';
import { Sparkles, Zap, Brain, Heart } from 'lucide-react';

const serviceList = [
  {
    id: 'mentoring',
    title: 'Mentoría Personalizada',
    subtitle: 'Acompañamiento Estratégico',
    description: 'Un proceso enfocado en resultados, donde trabajamos tus metas personales y profesionales con herramientas de coaching avanzado.',
    icon: Sparkles,
    features: ['Claridad de objetivos', 'Superación de bloqueos', 'Plan de acción real', 'Seguimiento continuo'],
  },
  {
    id: 'transpersonal',
    title: 'Terapia Transpersonal',
    subtitle: 'Más allá de la mente',
    description: 'Un viaje hacia el interior para conectar con tu esencia y sanar heridas profundas desde un nivel de consciencia superior.',
    icon: Heart,
    features: ['Integración emocional', 'Sentido de vida', 'Crecimiento espiritual', 'Paz interior'],
  },
  {
    id: 'pnl',
    title: 'PNL e Hipnosis',
    subtitle: 'Reprogramación Mental',
    description: 'Cambia tus patrones de pensamiento automáticos y elimina fobias o hábitos negativos de forma rápida y efectiva.',
    icon: Brain,
    features: ['Cambio de creencias', 'Gestión emocional', 'Fobias y traumas', 'Nuevos hábitos'],
  },
  {
    id: 'bio',
    title: 'Bioneurodescodificación',
    subtitle: 'La biología de la emoción',
    description: 'Entiende qué te está diciendo tu cuerpo a través de tus síntomas físicos y libera la carga emocional asociada.',
    icon: Zap,
    features: ['Origen del síntoma', 'Liberación emocional', 'Conexión mente-cuerpo', 'Sanación profunda'],
  },
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-6">Terapeuta y Mentoría</h1>
            <p className="text-xl text-stone-600">
              Diferentes modalidades de acompañamiento adaptadas a tu momento actual y a tus necesidades específicas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="text-brand-primary w-8 h-8" />
              </div>
              <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-2 block">{service.subtitle}</span>
              <h3 className="text-3xl font-display font-bold text-stone-900 mb-6">{service.title}</h3>
              <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-stone-900 text-white font-bold hover:bg-brand-primary transition-colors">
                Saber más
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
