"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Users, Search, Cctv, ArrowRight, CheckCircle2 } from "lucide-react";

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

export default function Home() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <section className="relative bg-slate-950 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Subtle background element instead of complex gradient */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Security. Safety. <span className="text-emerald-500">Surveillance.</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl text-balance"
            >
              Professional Security and Investigation Services across Tamil Nadu. Commanded by police-background professionals.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-md transition-colors text-center"
              >
                GET SECURITY SERVICES
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-md transition-colors text-center"
              >
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview (Light) */}
      <section className="bg-white py-24 md:py-32 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6 text-slate-950">
                Trusted Protection & Investigation
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Professionally managed security solutions company with strong expertise in crime prevention, surveillance, and private investigation.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex gap-8 mb-8">
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-emerald-600">2009</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Established</span>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-emerald-600">ISO</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Certified</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Link href="/about" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-2 group">
                  Learn more about our leadership 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-950">Why Choose True Waves?</h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Commanded by retired Police Officers",
                  "Strict background verification for all personnel",
                  "24/7 responsive control room operations",
                  "Comprehensive risk assessment strategies",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview (Dark) */}
      <section className="bg-slate-900 py-24 md:py-32 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive security and investigation solutions tailored for your peace of mind.</p>
          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: "Security Services", desc: "Professional armed and unarmed guards, access control, and specialized escort security." },
              { icon: Users, title: "Manpower Solutions", desc: "Vetted and trained personnel for diverse operational requirements and facility management." },
              { icon: Search, title: "Investigation Services", desc: "Covert surveillance, background verification, and corporate fraud detection." },
              { icon: Cctv, title: "Technical Solutions", desc: "Advanced CCTV, biometric access, and integrated alarm systems." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-slate-950 border border-white/5 p-8 rounded-xl hover:border-emerald-500/30 transition-colors flex flex-col items-start"
              >
                <service.icon className="w-10 h-10 text-emerald-500 mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link href="/services" className="text-emerald-500 text-sm font-medium hover:text-emerald-400 flex items-center gap-1 group mt-auto">
                  Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section (Darker Highlight) */}
      <section className="bg-slate-950 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-white/10 rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Secure Your Enterprise Today</h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
              Partner with True Waves for uncompromising security and professional investigation services. Let our experts assess your vulnerabilities.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
            >
              REQUEST CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
