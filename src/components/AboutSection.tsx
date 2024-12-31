import { motion } from 'framer-motion';
import { PartyPopper, Sparkles, Music } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: PartyPopper,
      title: "Célébration Exceptionnelle",
      description: "Une soirée inoubliable avec des animations spectaculaires et des moments magiques."
    },
    {
      icon: Sparkles,
      title: "Ambiance Festive",
      description: "Une atmosphère électrique avec des décorations éblouissantes et une mise en scène unique."
    },
    {
      icon: Music,
      title: "Musique Live",
      description: "Des performances live exceptionnelles par des artistes de renommée internationale."
    },
    {
      icon: Music,
      title: "Service Premium",
      description: "Un service haut de gamme avec des mets raffinés et des boissons sélectionnées."
    }
  ];

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
            Une Expérience Unique
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Rejoignez-nous pour une célébration extraordinaire du Nouvel An 2025. 
            Une soirée exceptionnelle vous attend avec des moments inoubliables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gold/20"
            >
              <div className="mb-4 text-gold">
                <feature.icon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-2xl"
        >
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
              alt="Célébration du Nouvel An"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Une Soirée Magique
                </h3>
                <p className="text-xl text-white/80 max-w-lg mx-auto">
                  Des moments inoubliables vous attendent dans un cadre exceptionnel
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
