"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function About() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <section className="bg-zinc-950 pt-40 pb-24 md:pt-56 md:pb-32 border-b border-white/10 relative">
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
                Vigilance <br /> & Protection
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease }}
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium"
            >
              Since 2009, delivering uncompromising security and investigation services led by retired police veterans.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Light) */}
      <section className="bg-white py-32 text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-6">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6">Vision</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-950 tracking-tighter leading-tight">
                To be recognized as Tamil Nadu’s most trusted provider of Security and Investigation Services.
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                Delivering protection with unmatched zeal, passion, and professionalism to every client we serve.
              </p>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6">Mission</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-950 tracking-tighter leading-tight">
                To deliver high-quality, innovative services built on trust and strong core values.
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                Ensuring our clients feel truly secure and at peace through law-enforcement grade expertise and reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6">The Evolution</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 text-zinc-950 tracking-tighter leading-[1.1]">
                A legacy built on uncompromising discipline
              </h3>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium">
                <p>
                  Established in 2009, True Waves Enterprises began its journey with a singular focus on providing reliable manpower. Since then, we have steadily grown into a trusted provider of comprehensive security solutions.
                </p>
                <p>
                  Today, we are an ISO 9001:2008 Certified company, statewide licensed by TN Police (License No. 910/2017), and fully ESI, EPF & GST compliant. Our strength lies in our leadership—commanded by retired Additional Superintendents of Police.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {[
                { icon: Shield, title: "Police Command", desc: "Led by retired Addl. SPs" },
                { icon: Award, title: "ISO 9001:2008", desc: "Certified operations" },
                { icon: Users, title: "Statewide License", desc: "TN Police No. 910/2017" },
                { icon: CheckCircle2, title: "Full Compliance", desc: "ESI, EPF & GST Compliant" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                  className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-xl text-zinc-950 mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Discipline Standard (Training & Vetting) */}
      <section className="bg-zinc-100 py-32 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-4">Selection & Training</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 max-w-2xl">
              The Discipline Standard
            </h3>
            <p className="text-zinc-600 mt-6 max-w-3xl text-lg font-medium leading-relaxed">
              Because our leadership comes from a police background, we enforce an unparalleled standard of vetting and continuous training. We don't just hire guards; we deploy professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="bg-white p-10 rounded-xl border border-zinc-200 shadow-sm"
            >
              <div className="text-emerald-600 font-bold text-xl mb-4">01</div>
              <h4 className="font-bold text-2xl text-zinc-950 mb-4 tracking-tight">Rigorous Vetting</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">
                Every candidate undergoes strict police verification, background checks, and psychological evaluation before onboarding.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="bg-white p-10 rounded-xl border border-zinc-200 shadow-sm"
            >
              <div className="text-emerald-600 font-bold text-xl mb-4">02</div>
              <h4 className="font-bold text-2xl text-zinc-950 mb-4 tracking-tight">Physical Standards</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">
                Mandatory physical fitness benchmarks matched to law enforcement entry requirements, ensuring capability under pressure.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="bg-white p-10 rounded-xl border border-zinc-200 shadow-sm"
            >
              <div className="text-emerald-600 font-bold text-xl mb-4">03</div>
              <h4 className="font-bold text-2xl text-zinc-950 mb-4 tracking-tight">Continuous Training</h4>
              <p className="text-zinc-600 font-medium leading-relaxed">
                Monthly refresher courses on emergency response, fire safety protocols, first aid, and customer interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section (Dark) */}
      <section className="bg-zinc-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-4">Command Center</h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1]">Leadership</h3>
            </div>
            <p className="text-zinc-400 max-w-sm text-lg font-medium">
              Directed by seasoned professionals from law enforcement and administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "V. Santhanam", role: "Managing Director", desc: "Additional Superintendent of Police (Rtd.)" },
              { name: "M. Karthikeyan", role: "Director", desc: "Additional Superintendent of Police (Rtd.)" },
              { name: "Er. S. Sanjay", role: "Director", desc: "Marketing & Infrastructure" }
            ].map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-full mb-8 flex items-center justify-center border border-white/5">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{leader.name}</h4>
                <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-zinc-400 text-sm font-medium">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
