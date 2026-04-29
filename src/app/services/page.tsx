"use client";

import { motion } from "framer-motion";
import { Shield, Search, Cctv, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function Services() {
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
              Our Services
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-300 leading-relaxed">
              Comprehensive security, personnel, and technical solutions designed for modern enterprise challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Security Services (Light) */}
      <section className="bg-white py-24 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 text-emerald-600 mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-slate-950">Security & Manpower</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Deploying highly trained, physically fit, and meticulously vetted personnel to secure your premises, assets, and people.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Guarding Services (Armed & Unarmed)",
                  "Access Control & Reception Management",
                  "Escort Security for High-Net-Worth Individuals",
                  "Event Security & Crowd Management",
                  "Corporate Facility Manpower Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="bg-slate-100 rounded-2xl h-full min-h-[400px] border border-slate-200 flex items-center justify-center p-8">
              <Users className="w-32 h-32 text-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Services (Dark) */}
      <section className="bg-slate-900 py-24 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1 bg-slate-800 rounded-2xl h-full min-h-[400px] border border-white/10 flex items-center justify-center p-8">
              <Search className="w-32 h-32 text-slate-600" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Search className="w-12 h-12 text-emerald-500 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Investigation Services</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Discreet, lawful, and highly effective investigation services spearheaded by former intelligence and law enforcement professionals.
              </p>
              <ul className="space-y-4">
                {[
                  "Pre and Post-Employment Background Verification",
                  "Corporate Fraud & Theft Detection",
                  "Covert Surveillance Operations",
                  "Asset Verification & Tracking",
                  "Specialized Private Investigations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Solutions (Light) */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Cctv className="w-12 h-12 text-emerald-600 mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-slate-950">Technical Solutions</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Modernizing your security infrastructure with state-of-the-art electronic surveillance and automated access systems.
              </p>
              <ul className="space-y-4">
                {[
                  "CCTV Surveillance System Installation & Monitoring",
                  "Biometric & RFID Access Control Systems",
                  "Intrusion & Burglar Alarm Systems",
                  "Fire Detection Systems",
                  "Integrated Smart Security Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="bg-white rounded-2xl h-full min-h-[400px] border border-slate-200 flex items-center justify-center p-8 shadow-sm">
              <Cctv className="w-32 h-32 text-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Security Plan?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Every business is unique. Contact our experts for a comprehensive vulnerability assessment and tailored security deployment.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-md transition-colors">
            TALK TO AN EXPERT <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
