import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-stone-900 mb-6">Contacto</h1>
            <p className="text-xl text-stone-600">
              ¿Tienes alguna duda o quieres reservar una cita? Estoy aquí para escucharte y acompañarte.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-display font-bold text-stone-900 mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Teléfono</p>
                    <p className="text-stone-700 font-medium">646 16 44 31</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-brand-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-stone-700 font-medium break-all">mercedesiglesias@bienestarinterior.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Ubicación</p>
                    <p className="text-stone-700 font-medium">Dos Hermanas, Sevilla</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-stone-50">
                <p className="text-stone-600 mb-6">También puedes contactarme directamente por WhatsApp:</p>
                <a 
                  href="https://wa.me/34646164431" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/50">
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-8">Envíame un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Nombre completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Asunto</label>
                  <select className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary transition-all">
                    <option>Información general</option>
                    <option>Reserva de cita</option>
                    <option>Consulta sobre cursos</option>
                    <option>Otros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Mensaje</label>
                  <textarea 
                    rows="5" 
                    className="w-full bg-stone-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary transition-all"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-accent transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar mensaje
                </button>
                <p className="text-xs text-stone-400 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
