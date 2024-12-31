import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const links = {
    legal: [
      { name: "Mentions Légales", href: "#" },
      { name: "Politique de Confidentialité", href: "#" },
      { name: "Conditions Générales", href: "#" },
      { name: "Cookies", href: "#" }
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "Youtube", icon: Youtube, href: "#" }
    ],
    quickLinks: [
      { name: "À Propos", href: "#about" },
      { name: "Événements", href: "#events" },
      { name: "Galerie", href: "#gallery" },
      { name: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-black/60 backdrop-blur-lg border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gold">Nouvel An 2025</h3>
              <p className="text-white/60 mt-2">
                Célébrez le passage à la nouvelle année dans un cadre exceptionnel
              </p>
            </motion.div>
          </div>

          {/* Liens Rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Liens Rapides</h4>
            <ul className="space-y-2">
              {links.quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mentions Légales */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Informations Légales</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Suivez-nous</h4>
            <div className="flex space-x-4">
              {links.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gold" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60 flex items-center justify-center">
            Créé avec{" "}
            <Heart className="w-4 h-4 text-gold mx-1 animate-pulse" /> par{" "}
            <a href="#" className="text-gold hover:text-gold/80 ml-1">
              ROMARIC TENE (LAROMA 😂)
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
