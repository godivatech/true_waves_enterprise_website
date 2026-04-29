"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-950 pt-32 pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white mb-6">
              About True Waves
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-300 leading-relaxed">
              From a dedicated manpower provider to a premier, ISO-certified security solutions company across Tamil Nadu.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section (Light) */}
      <section className="bg-white py-24 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-950">Our Journey</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Established in 2009, True Waves Enterprises began its journey with a singular focus on providing reliable manpower. Over the years, our dedication to excellence and uncompromising standards allowed us to evolve into a comprehensive security solutions provider.
                </p>
                <p>
                  Today, we are an ISO Certified company trusted by corporate entities, industrial setups, and private individuals across Tamil Nadu. Our strength lies in our leadership—commanded by retired police professionals who bring decades of real-world law enforcement and intelligence experience to the private sector.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Shield, title: "Expert Setup", desc: "Led by former Police Officers" },
                { icon: Award, title: "ISO Certified", desc: "Recognized quality management" },
                { icon: Users, title: "Vetted Staff", desc: "Strict background checks" },
                { icon: CheckCircle2, title: "Proven Track", desc: "Over a decade of excellence" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <item.icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section (Light - Slate 50) */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Command & Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our operations are directed by seasoned professionals with extensive backgrounds in law enforcement and corporate security.
            </p>
          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Mr. V. Santhanam", role: "Managing Director", desc: "Retired Additional SP" },
              { name: "Mr. M. Karthikeyan", role: "Director", desc: "Retired Police Officer" },
              { name: "Er. S. Sanjay", role: "Director", desc: "Marketing & Infrastructure" },
              { name: "S. Kumaravel", role: "Director", desc: "Operations & Management" }
            ].map((leader, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-slate-200 rounded-full mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-2">{leader.role}</p>
                <p className="text-slate-500 text-sm">{leader.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
