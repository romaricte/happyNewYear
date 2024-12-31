import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  type: 'snow' | 'firework';
  angle?: number;
  velocity?: number;
}

export function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    
    // Génération de flocons de neige (réduit)
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * 3 + 1,
        color: 'white',
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 4,
        type: 'snow'
      });
    }

    return newParticles;
  }, []);

  const generateFirework = useCallback(() => {
    const particles: Particle[] = [];
    const centerX = Math.random() * 100;
    const centerY = Math.random() * 40 + 20;
    
    // Couleurs simples mais festives
    const colors = ['#FFD700', '#FF4500', '#FF1493', '#4169E1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Moins de particules, explosion plus simple
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 1.5;
      
      particles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        size: 3,
        color,
        delay: 0,
        duration: 0.8,
        type: 'firework',
        angle,
        velocity
      });
    }

    return particles;
  }, []);

  useEffect(() => {
    setParticles(generateParticles());

    // Moins de feux d'artifice simultanés
    const fireworkInterval = setInterval(() => {
      setParticles(prev => [...prev, ...generateFirework()]);
    }, 3000);

    // Nettoyage plus fréquent
    const cleanupInterval = setInterval(() => {
      setParticles(prev => {
        const now = Date.now();
        return prev.filter(p => 
          p.type === 'snow' || 
          (now - p.id) < 1500
        );
      });
    }, 1500);

    return () => {
      clearInterval(fireworkInterval);
      clearInterval(cleanupInterval);
    };
  }, [generateParticles, generateFirework]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: particle.type === 'snow' ? '-5%' : `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: particle.type === 'firework' 
              ? `0 0 ${particle.size}px ${particle.color}`
              : 'none',
          }}
          initial={
            particle.type === 'firework'
              ? { scale: 1, opacity: 1 }
              : { opacity: 0 }
          }
          animate={
            particle.type === 'firework'
              ? {
                  x: [0, Math.cos(particle.angle!) * (particle.velocity! * 100)],
                  y: [0, Math.sin(particle.angle!) * (particle.velocity! * 100)],
                  scale: [1, 0],
                  opacity: [1, 0],
                }
              : {
                  y: ['0vh', '100vh'],
                  x: [0, (Math.random() - 0.5) * 30],
                  opacity: [0.8, 0],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: particle.type === 'snow' ? Infinity : 0,
            ease: particle.type === 'firework' ? 'easeOut' : 'linear',
          }}
        />
      ))}
    </div>
  );
}
