import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  "Understand the fundamentals of Artificial Intelligence and Machine Learning.",
  "Build and program their own interactive robotic projects from scratch.",
  "Develop logical thinking and complex problem-solving skills.",
  "Gain hands-on experience with block-based and Python programming.",
  "Collaborate on group projects to foster teamwork and communication."
];

const LearningOutcomes = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Will They Learn?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our curriculum is designed by industry experts to provide a perfect balance of theory and practical application. By the end of this 4-week journey, your child will be equipped with future-ready skills.
            </p>
            
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="/ai-robo.jpg" 
                alt="AI and Robotics Workshop" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
