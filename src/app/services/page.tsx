"use client";

import { motion } from "framer-motion";
import { Shield, Search, Cctv, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Services() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <section className="bg-slate-950 pt-40 pb-24 md:pt-56 md:pb-32 border-b border-white/10 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl border-l-2 border-emerald-500 pl-6 md:pl-10">
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]"
              >
                Expertise.
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
            >
              Comprehensive security, personnel, and technical solutions designed for modern enterprise challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Services (Light) */}
      <section className="bg-white py-32 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 tracking-tighter">Security & Manpower</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Deploying highly trained, physically fit, and meticulously vetted personnel to secure your premises, assets, and people.
              </p>
              <ul className="space-y-4 border-t border-slate-200 pt-8">
                {[
                  "24/7 Guarding Services (Armed & Unarmed)",
                  "Access Control & Reception Management",
                  "Escort Security for High-Net-Worth Individuals",
                  "Event Security & Crowd Management",
                  "Corporate Facility Manpower Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-sm shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="lg:col-span-6">
              <div className="bg-slate-100 rounded-3xl h-full min-h-[400px] border border-slate-200 flex items-center justify-center p-12">
                <Users className="w-32 h-32 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Services (Dark) */}
      <section className="bg-slate-900 py-32 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-slate-800 rounded-3xl h-full min-h-[400px] border border-white/10 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]"></div>
                <Search className="w-32 h-32 text-slate-700 relative z-10" />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                <Search className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">Investigation Services</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Discreet, lawful, and highly effective investigation services spearheaded by former intelligence and law enforcement professionals.
              </p>
              <ul className="space-y-4 border-t border-white/10 pt-8">
                {[
                  "Pre and Post-Employment Background Verification",
                  "Corporate Fraud & Theft Detection",
                  "Covert Surveillance Operations",
                  "Asset Verification & Tracking",
                  "Specialized Private Investigations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-sm shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Solutions (Light) */}
      <section className="bg-slate-50 py-32 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8">
                <Cctv className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 tracking-tighter">Technical Solutions</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Modernizing your security infrastructure with state-of-the-art electronic surveillance and automated access systems.
              </p>
              <ul className="space-y-4 border-t border-slate-200 pt-8">
                {[
                  "CCTV Surveillance System Installation & Monitoring",
                  "Biometric & RFID Access Control Systems",
                  "Intrusion & Burglar Alarm Systems",
                  "Fire Detection Systems",
                  "Integrated Smart Security Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-sm shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl h-full min-h-[400px] border border-slate-200 flex items-center justify-center p-12 shadow-sm">
                <Cctv className="w-32 h-32 text-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Dark) */}
      <section className="bg-slate-950 py-32 md:py-48 relative overflow-hidden text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-8">Ready to secure your enterprise?</h2>
          
          <div className="overflow-hidden mb-12">
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-none text-white"
            >
              Request a Custom <br /> Security Plan.
            </motion.h3>
          </div>

          <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-lg">
            <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
              Talk to an Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
