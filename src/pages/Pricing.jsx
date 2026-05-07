import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-6">Valor de Consultas</h1>
            <p className="text-xl text-stone-600">
              Información transparente sobre los servicios y la metodología de trabajo. La inversión en ti mismo es la que mejores beneficios reporta.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-display font-bold text-stone-900 mb-4">Sesión Individual</h3>
            <div className="text-4xl font-display font-bold text-brand-primary mb-6">60€<span className="text-sm text-stone-400 font-normal"> / sesión</span></div>
            <p className="text-stone-500 text-sm mb-8">Ideal para consultas puntuales o para iniciar un proceso de autoconocimiento.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Duración: 60-75 min
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Presencial u Online
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Seguimiento por WhatsApp
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all">
              Reservar
            </button>
          </div>

          <div className="bg-stone-900 p-10 rounded-3xl shadow-2xl shadow-brand-primary/20 flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
              Recomendado
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Bono 5 Sesiones</h3>
            <div className="text-4xl font-display font-bold text-brand-primary mb-6">250€<span className="text-sm text-stone-500 font-normal"> / pack</span></div>
            <p className="text-stone-400 text-sm mb-8">La mejor opción para procesos de terapia profunda o bioneurodescodificación.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Check className="w-4 h-4 text-brand-primary" />
                Ahorras 50€ (10€/sesión)
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Check className="w-4 h-4 text-brand-primary" />
                Prioridad en agenda
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Check className="w-4 h-4 text-brand-primary" />
                Material complementario
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Check className="w-4 h-4 text-brand-primary" />
                Válido por 6 meses
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20">
              Comprar Bono
            </button>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-display font-bold text-stone-900 mb-4">Mentoría Premium</h3>
            <div className="text-4xl font-display font-bold text-brand-primary mb-6">120€<span className="text-sm text-stone-400 font-normal"> / sesión</span></div>
            <p className="text-stone-500 text-sm mb-8">Acompañamiento intensivo de alto impacto para cambios transformacionales rápidos.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Duración: 2 horas
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Enfoque estratégico
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-700">
                <Check className="w-4 h-4 text-brand-primary" />
                Soporte VIP 24/7
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all">
              Consultar
            </button>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-stone-100 flex gap-6 items-start">
          <Info className="w-8 h-8 text-brand-primary shrink-0" />
          <div className="text-sm text-stone-500 leading-relaxed">
            <p className="font-bold text-stone-700 mb-2">Nota importante:</p>
            <p>
              Las citas se reservan con al menos 48 horas de antelación. En caso de cancelación, se ruega avisar con un mínimo de 24 horas para poder reasignar el hueco a otra persona. Las sesiones pueden realizarse tanto presencialmente en Dos Hermanas (Sevilla) como de forma telemática a través de Zoom o WhatsApp Video.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
