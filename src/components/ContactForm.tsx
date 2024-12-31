import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-6 max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gold mb-2">Message Envoyé!</h3>
          <p className="text-white/80">
            Merci de nous avoir contacté. Nous vous répondrons bientôt.
          </p>
          <Button
            type="button"
            className="mt-6 bg-gold/20 hover:bg-gold/30 text-gold"
            onClick={() => setIsSubmitted(false)}
          >
            Envoyer un autre message
          </Button>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <label className="block text-white mb-2" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gold/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="Votre nom"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gold/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="votre@email.com"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <label className="block text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gold/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="Votre message..."
            />
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold/80 text-black font-bold"
            >
              Envoyer <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </>
      )}
    </motion.form>
  );
}
