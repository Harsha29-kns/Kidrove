import { motion } from 'framer-motion';
import { Calendar, Clock, MonitorPlay, Users, IndianRupee } from 'lucide-react';

const details = [
  { icon: Users, label: 'Age Group', value: '8–14 Years', color: 'text-blue-500', bg: 'bg-blue-100' },
  { icon: Clock, label: 'Duration', value: '4 Weeks', color: 'text-purple-500', bg: 'bg-purple-100' },
  { icon: MonitorPlay, label: 'Mode', value: 'Online', color: 'text-green-500', bg: 'bg-green-100' },
  { icon: IndianRupee, label: 'Fee', value: '₹2,999', color: 'text-yellow-500', bg: 'bg-yellow-100' },
  { icon: Calendar, label: 'Start Date', value: '15 July 2026', color: 'text-red-500', bg: 'bg-red-100' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 10 }
  }
};

const DetailsGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary-500/10 rounded-full blur-[60px]" 
         />
         <motion.div 
            animate={{ x: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-accent-500/10 rounded-full blur-[80px]" 
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Workshop Highlights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to know about our comprehensive summer program.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {details.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center mb-6 shadow-inner transform rotate-3 group-hover:rotate-12 transition-transform duration-300`}
              >
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </motion.div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{item.label}</h3>
              <p className="text-2xl font-black text-white">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsGrid;
