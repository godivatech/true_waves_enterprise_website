"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function About() {
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
                Our Journey
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
            >
              From a dedicated manpower provider to a premier, ISO-certified security solutions company across Tamil Nadu.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section (Light) */}
      <section className="bg-white py-32 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6">The Evolution</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 text-slate-950 tracking-tighter leading-[1.1]">
                A legacy built on uncompromising discipline
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Established in 2009, True Waves Enterprises began its journey with a singular focus on providing reliable manpower. Over the years, our dedication to excellence and uncompromising standards allowed us to evolve into a comprehensive security solutions provider.
                </p>
                <p>
                  Today, we are an ISO Certified company trusted by corporate entities, industrial setups, and private individuals across Tamil Nadu. Our strength lies in our leadership—commanded by retired police professionals who bring decades of real-world law enforcement and intelligence experience to the private sector.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {[
                { icon: Shield, title: "Expert Setup", desc: "Led by former Police Officers" },
                { icon: Award, title: "ISO Certified", desc: "Recognized quality management" },
                { icon: Users, title: "Vetted Staff", desc: "Strict background checks" },
                { icon: CheckCircle2, title: "Proven Track", desc: "Over a decade of excellence" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                  className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-950 mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section (Dark) */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-4">Command Center</h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1]">Leadership</h3>
            </div>
            <p className="text-slate-400 max-w-sm text-lg font-medium">
              Directed by seasoned professionals from intelligence and law enforcement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mr. V. Santhanam", role: "Managing Director", desc: "Retired Additional SP" },
              { name: "Mr. M. Karthikeyan", role: "Director", desc: "Retired Police Officer" },
              { name: "Er. S. Sanjay", role: "Director", desc: "Marketing & Infrastructure" },
              { name: "S. Kumaravel", role: "Director", desc: "Operations & Management" }
            ].map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                className="bg-slate-900 p-8 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full mb-8 flex items-center justify-center border border-white/5">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{leader.name}</h4>
                <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-slate-400 text-sm font-medium">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
