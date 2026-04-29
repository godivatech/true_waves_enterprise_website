"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Professional, smooth easing
const ease = [0.76, 0, 0.24, 1] as const;

export default function Home() {
  return (
    <>
      {/* Hero Section (Dark - bg-slate-950) */}
      <section className="relative bg-slate-950 pt-40 pb-24 md:pt-56 md:pb-32 min-h-[90vh] flex flex-col justify-between">
        {/* Subtle grid background for structural feel */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col gap-2 md:gap-4 w-full border-l-2 border-emerald-500 pl-6 md:pl-10 mb-16">
            {["Security.", "Safety.", "Surveillance."].map((text, i) => (
              <div key={text} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: i * 0.1 }}
                  className="text-6xl md:text-[8vw] font-bold uppercase tracking-tighter leading-[0.85] text-white"
                >
                  {text}
                </motion.h1>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-12 border-t border-white/10">
            <div className="md:col-span-4 lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-xs uppercase tracking-widest text-slate-500 flex flex-col gap-2 font-medium"
              >
                <span>Commanded by Police Veterans</span>
                <span>ISO Certified Operations</span>
                <span>Based in Tamil Nadu</span>
              </motion.div>
            </div>
            <div className="md:col-span-8 lg:col-span-6 lg:col-start-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease }}
                className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
              >
                Professional security and investigation services. We provide uncompromising, intelligent protection for enterprises demanding the highest standards.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview (Light - bg-white) */}
      <section className="bg-white py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-8">The Enterprise</h2>
              
              {/* Primary CTA (High Contrast Green) */}
              <Link href="/about" className="hidden md:inline-flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white group-hover:bg-slate-950 transition-colors duration-500 shadow-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span className="text-sm uppercase tracking-widest font-bold text-slate-900">Our Leadership</span>
              </Link>
            </div>
            
            <div className="md:col-span-8 lg:col-span-8">
              <div className="overflow-hidden mb-12">
                <motion.h3 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-slate-950"
                >
                  Professionally managed security solutions with unparalleled expertise in crime prevention, covert surveillance, and intelligence.
                </motion.h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-slate-200">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-5xl font-bold tracking-tighter text-emerald-600 mb-2">2009</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Established</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="text-5xl font-bold tracking-tighter text-slate-950 mb-2">ISO</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Certified Operations</div>
                </motion.div>
              </div>

              <Link href="/about" className="md:hidden mt-12 inline-flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white group-hover:bg-slate-950 transition-colors duration-500 shadow-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span className="text-sm uppercase tracking-widest font-bold text-slate-900">Our Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List (Dark - bg-slate-900) */}
      <section className="bg-slate-900 py-32 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Capabilities.</h2>
            <p className="text-slate-400 max-w-sm text-lg font-medium">Comprehensive, tactical solutions tailored for total operational security.</p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {[
              { num: "01", title: "Security Services", desc: "Armed & unarmed guarding, access control, and highly-trained escort security." },
              { num: "02", title: "Manpower Solutions", desc: "Strictly vetted personnel deployed for corporate facility management." },
              { num: "03", title: "Investigation", desc: "Covert surveillance, fraud detection, and deep background verification." },
              { num: "04", title: "Technical Systems", desc: "Advanced CCTV, biometric access, and integrated intrusion alarms." }
            ].map((service, i) => (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                className="group border-b border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-xl"
              >
                <div className="md:col-span-2 text-emerald-500 font-bold text-xl">{service.num}</div>
                <div className="md:col-span-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase text-white">{service.title}</h3>
                </div>
                <div className="md:col-span-3 text-slate-400 font-medium">
                  <p>{service.desc}</p>
                </div>
                <div className="md:col-span-1 flex justify-start md:justify-end">
                  <Link href="/services" aria-label={`Learn more about ${service.title}`}>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/services" className="inline-block text-xs uppercase tracking-widest font-bold pb-2 border-b-2 border-emerald-600 hover:text-emerald-400 hover:border-emerald-400 transition-colors duration-300">
              View All Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section (Highlight - bg-slate-900/50 over bg-slate-950) */}
      <section className="bg-slate-950 py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-8">Secure Your Infrastructure</h2>
          
          <div className="overflow-hidden mb-12">
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-white"
            >
              Initiate <br /> Deployment.
            </motion.h3>
          </div>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl font-medium">
            Partner with True Waves for uncompromising protection and professional investigation services. Let our experts assess your vulnerabilities.
          </p>

          <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-lg">
            <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
              Request Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
