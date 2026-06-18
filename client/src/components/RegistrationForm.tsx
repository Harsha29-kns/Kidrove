import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (e.g., +919876543210)"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await axios.post(`${apiUrl}/enquiry`, data);
      
      if (response.data.success) {
        toast.success("Successfully registered! We will contact you soon.");
        reset();
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-32 bg-slate-950 relative overflow-hidden">
      <Toaster position="top-center" />
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/50 via-slate-900 to-slate-950 animate-pulse-glow"></div>
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-32 h-32 bg-primary-500/20 rounded-full blur-[50px]" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[5%] w-48 h-48 bg-secondary-500/20 rounded-full blur-[60px]" 
      />

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div 
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 w-full max-w-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
            >
              Secure Your Spot
            </motion.h2>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-300 text-lg"
            >
              Limited seats available. Register now to enroll.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2 tracking-wide uppercase">Full Name</label>
              <input
                id="name"
                {...register("name")}
                className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-slate-400 focus:ring-2 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary-400 focus:ring-primary-400/30 hover:bg-white/10'}`}
                placeholder="John Doe"
              />
              {errors.name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-400">{errors.name.message}</motion.p>}
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2 tracking-wide uppercase">Email Address</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-slate-400 focus:ring-2 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary-400 focus:ring-primary-400/30 hover:bg-white/10'}`}
                placeholder="john@example.com"
              />
              {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-400">{errors.email.message}</motion.p>}
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2 tracking-wide uppercase">Phone Number</label>
              <input
                id="phone"
                {...register("phone")}
                className={`w-full px-5 py-4 rounded-2xl bg-white/5 border text-white placeholder-slate-400 focus:ring-2 focus:outline-none transition-all duration-300 ${errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:border-primary-400 focus:ring-primary-400/30 hover:bg-white/10'}`}
                placeholder="+919876543210"
              />
              {errors.phone && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-400">{errors.phone.message}</motion.p>}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-shadow duration-300 flex items-center justify-center gap-3 text-xl disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></span>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
