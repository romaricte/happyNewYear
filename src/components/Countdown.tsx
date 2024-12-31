import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const targetDate = new Date('2025-01-01T00:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NumberProps {
  value: number;
  label: string;
}

const NumberBox = ({ value, label }: NumberProps) => {
  const prevValue = usePrevious(value);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-32">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg border border-gold/30 overflow-hidden">
          <div className="absolute inset-x-0 h-[1px] top-1/2 bg-gold/20" />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={value}
              initial={{ y: value > (prevValue || 0) ? 32 : -32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: value > (prevValue || 0) ? -32 : 32, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl font-bold bg-gradient-to-b from-gold to-amber-500 bg-clip-text text-transparent">
                {value.toString().padStart(2, '0')}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.span 
        className="text-white/80 mt-2 text-sm uppercase tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.span>
    </div>
  );
};

function usePrevious(value: number) {
  const [prev, setPrev] = useState(value);
  useEffect(() => {
    setPrev(value);
  }, [value]);
  return prev;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isNearMidnight, setIsNearMidnight] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        const timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };

        setTimeLeft(timeLeft);
        
        // Vérifier si on est proche de minuit (moins de 10 minutes)
        const isNear = timeLeft.days === 0 && 
                      timeLeft.hours === 0 && 
                      timeLeft.minutes < 10;
        setIsNearMidnight(isNear);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex gap-4 md:gap-8 justify-center items-center p-8 rounded-xl 
        ${isNearMidnight ? 'animate-pulse' : ''}`}
    >
      <NumberBox value={timeLeft.days} label="Jours" />
      <div className="text-gold text-4xl font-bold mb-8">:</div>
      <NumberBox value={timeLeft.hours} label="Heures" />
      <div className="text-gold text-4xl font-bold mb-8">:</div>
      <NumberBox value={timeLeft.minutes} label="Minutes" />
      <div className="text-gold text-4xl font-bold mb-8">:</div>
      <NumberBox value={timeLeft.seconds} label="Secondes" />
    </motion.div>
  );
}
