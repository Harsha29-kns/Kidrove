import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-900">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-600/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary-500/30 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <motion.span 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 text-slate-900 font-bold text-sm tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
          >
            🚀 Summer 2026
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8 drop-shadow-2xl">
            AI & Robotics <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 animate-gradient-x">
              Summer Workshop
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Empower your child with the skills of tomorrow. A hands-on, 4-week online journey into artificial intelligence and robotics.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#register" className="relative inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full text-xl font-black uppercase tracking-wider overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Enroll Now</span>
              <motion.svg 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
