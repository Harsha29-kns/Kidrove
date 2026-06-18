import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import DetailsGrid from '../components/DetailsGrid';
import LearningOutcomes from '../components/LearningOutcomes';
import FAQ from '../components/FAQ';
import RegistrationForm from '../components/RegistrationForm';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading time for premium app feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-4 border-r-4 border-primary-500 border-b-4 border-b-transparent border-l-4 border-l-transparent"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-t-4 border-l-4 border-secondary-400 border-b-4 border-b-transparent border-r-4 border-r-transparent"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 bg-accent-400 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              />
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white mt-8 font-black tracking-widest text-xl"
            >
              KIDROVE
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900"
        >
          <main>
            <Hero />
            <DetailsGrid />
            <LearningOutcomes />
            <FAQ />
            <RegistrationForm />
          </main>
          
          <footer className="bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-800">
            <p className="text-sm">© {new Date().getFullYear()} Kidrove. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </>
  );
};

export default LandingPage;
