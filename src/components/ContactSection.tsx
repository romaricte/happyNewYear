import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
  };

  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Une question ? N'hésitez pas à nous contacter pour plus d'informations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gold/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white/80 block">Nom</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 block">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 block">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/20 text-white focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gold text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-gold/90 transition-colors"
                >
                  <span>Envoyer</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 text-white/80"
              >
                <div className="bg-gold/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Téléphone</h3>
                  <p>+237 655045277</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 text-white/80"
              >
                <div className="bg-gold/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p>fonkourom@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 text-white/80"
              >
                <div className="bg-gold/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Adresse</h3>
                  <p>123 Avenue mimboman, yaounde</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[600px] rounded-xl overflow-hidden relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292544315674164!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1641911686545!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gold/20"
            >
              <h3 className="text-gold font-bold">Notre Emplacement</h3>
              <p className="text-white/80">Au cœur de Yaounde, près de la Tour</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
