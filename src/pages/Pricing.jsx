import { motion } from 'framer-motion';
import { Check, Info, Sparkles, Heart, Zap, Quote } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Sesión Terapéutica',
    subtitle: 'Hipnosis',
    price: '80€',
    duration: '1,5h',
    features: ['Evaluación inicial', 'Sesión profunda', 'Herramientas personalizadas'],
    icon: Sparkles,
    highlight: false
  },
  {
    title: 'Sesiones Terapéuticas',
    subtitle: 'Hipnosis (Bono)',
    price: '300€',
    duration: 'x5 clases',
    features: ['Proceso continuado', 'Acompañamiento estrecho', 'Ahorro de 100€'],
    icon: Zap,
    highlight: true
  },
  {
    title: 'Terapia Energética',
    subtitle: 'Meditación - Reiki - Chakras',
    price: '35€',
    duration: '45min',
    features: ['Equilibrio de chakras', 'Relajación profunda', 'Armonización'],
    icon: Heart,
    highlight: false
  },
  {
    title: 'Hipnosis Adelgazar',
    subtitle: 'Plan Transformación',
    price: '300€',
    duration: 'x3 sesiones',
    quote: '«El cambio transforma cuerpo y vida»',
    features: ['Reprogramación metabólica', 'Hábitos conscientes', 'Soporte motivacional'],
    icon: Sparkles,
    highlight: false
  },
  {
    title: 'Hipnosis Dejar de Fumar',
    subtitle: 'Plan Liberación',
    price: '300€',
    duration: 'x5 clases',
    quote: '«Libérate del humo»',
    features: ['Desactivación de ansias', 'Fortaleza mental', 'Acompañamiento post-proceso'],
    icon: Sparkles,
    highlight: false
  },
  {
    title: 'Terapia de Pareja',
    subtitle: 'Conexión y Diálogo',
    price: '100€',
    duration: 'Sesión',
    quote: '«Si dos quieren TODO se puede»',
    features: ['Escucha activa bidireccional', 'Resolución de conflictos', 'Fortalecimiento del vínculo'],
    icon: Heart,
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="pt-48 pb-24 bg-stone-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-6">Valor de Consultas</h1>
            <p className="text-xl text-stone-600 italic">
              "La inversión en tu bienestar es el único activo que siempre crece."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] border flex flex-col transition-all hover:shadow-2xl relative ${
                plan.highlight 
                  ? 'bg-stone-900 text-white border-stone-800 shadow-xl' 
                  : 'bg-white text-stone-900 border-stone-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-10 bg-brand-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-b-xl">
                  Más Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${plan.highlight ? 'bg-white/10' : 'bg-brand-primary/5'}`}>
                  <plan.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">{plan.title}</h3>
                  <p className={`text-sm ${plan.highlight ? 'text-stone-400' : 'text-stone-500'}`}>{plan.subtitle}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-brand-primary">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-stone-500' : 'text-stone-400'}`}> / {plan.duration}</span>
                </div>
              </div>

              {plan.quote && (
                <div className={`mb-8 p-4 rounded-2xl italic flex gap-3 ${plan.highlight ? 'bg-white/5 text-stone-300' : 'bg-stone-50 text-stone-600'}`}>
                  <Quote className="w-5 h-5 shrink-0 opacity-40" />
                  <p className="text-sm">{plan.quote}</p>
                </div>
              )}

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm opacity-90">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                plan.highlight 
                  ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-lg shadow-brand-primary/20' 
                  : 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg shadow-stone-900/10'
              }`}>
                Reservar Cita
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white p-10 rounded-[2.5rem] border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-xl shadow-stone-200/50">
          <div className="p-4 bg-brand-primary/10 rounded-2xl shrink-0">
            <Info className="w-8 h-8 text-brand-primary" />
          </div>
          <div className="text-stone-600 leading-relaxed text-center md:text-left">
            <h4 className="font-display font-bold text-stone-900 text-xl mb-4">Información Adicional</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-bold text-stone-800 mb-2">Cancelaciones</p>
                <p>Rogamos avisar con un mínimo de 24 horas de antelación para poder reasignar la sesión.</p>
              </div>
              <div>
                <p className="font-bold text-stone-800 mb-2">Modalidad</p>
                <p>Las sesiones pueden realizarse presencialmente en Dos Hermanas (Sevilla) o vía Online (Zoom/WhatsApp).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
