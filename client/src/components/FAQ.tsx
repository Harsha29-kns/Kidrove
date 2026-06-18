import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Does my child need prior coding experience?",
    answer: "No prior coding experience is required! Our curriculum starts from the basics and progressively introduces more advanced concepts, making it perfect for beginners."
  },
  {
    question: "What equipment is needed for the online mode?",
    answer: "A laptop or desktop computer with a stable internet connection, a webcam, and a microphone. All necessary software and virtual simulation tools will be provided by us."
  },
  {
    question: "Will there be any offline practical kits provided?",
    answer: "Yes, for the robotics segment, a virtual robotics simulator is heavily used. Optionally, parents can purchase a recommended physical robotics kit (details provided after enrollment) if they want their child to build physical models."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary-300/20 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-secondary-300/20 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              className={`border-2 rounded-3xl overflow-hidden transition-colors duration-500 bg-white/80 backdrop-blur-md shadow-lg ${openIndex === index ? 'border-primary-400 shadow-primary-500/20' : 'border-white/60 hover:border-primary-200'}`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-left text-xl transition-colors duration-300 ${openIndex === index ? 'text-primary-600' : 'text-slate-700 group-hover:text-primary-500'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className={`flex-shrink-0 ml-4 p-2 rounded-full ${openIndex === index ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500'} transition-colors duration-300`}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 text-lg leading-relaxed">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
