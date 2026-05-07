import { motion } from 'framer-motion';
import { BookOpen, Users, Video, FileText } from 'lucide-react';

const courses = [
  {
    title: 'Mindfulness para el día a día',
    type: 'Curso Online',
    duration: '6 semanas',
    desc: 'Aprende a gestionar el estrés y a vivir con presencia a través de técnicas sencillas y efectivas de atención plena.',
    icon: Video,
  },
  {
    title: 'Gestión Emocional Avanzada',
    type: 'Taller Presencial',
    duration: 'Intensivo fin de semana',
    desc: 'Un taller práctico en Sevilla donde exploraremos las herramientas de la PNL para transformar tus emociones.',
    icon: Users,
  },
  {
    title: 'El Despertar de la Consciencia',
    type: 'Programa de Mentoría',
    duration: '3 meses',
    desc: 'Un viaje profundo y acompañado hacia tu transformación personal y espiritual.',
    icon: BookOpen,
  },
];

const Courses = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-6">Terapias y Cursos</h1>
            <p className="text-xl text-stone-600">
              Programas formativos y talleres diseñados para profundizar en tu autoconocimiento y adquirir nuevas herramientas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 flex flex-col md:flex-row hover:shadow-xl transition-shadow"
            >
              <div className="md:w-1/3 bg-brand-primary/5 p-12 flex items-center justify-center">
                <course.icon className="w-24 h-24 text-brand-primary/20" />
              </div>
              <div className="md:w-2/3 p-10 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full uppercase tracking-widest">
                    {course.type}
                  </span>
                  <span className="text-stone-400 text-sm">{course.duration}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-stone-900 mb-6">{course.title}</h3>
                <p className="text-stone-600 text-lg mb-8 max-w-xl">
                  {course.desc}
                </p>
                <button className="flex items-center gap-2 font-bold text-brand-primary group">
                  Ver detalles del programa
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-primary p-12 rounded-[3rem] text-white text-center">
          <h2 className="text-3xl font-display font-bold mb-6">¿Buscas algo a medida?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            También realizo formaciones personalizadas para empresas, grupos reducidos o instituciones interesadas en el bienestar transpersonal.
          </p>
          <button className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all">
            Consultar disponibilidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
