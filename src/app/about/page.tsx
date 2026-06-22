"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function About() {
  return (
    <>
      {/* Hero Section (Dark) */}
      <section className="relative bg-zinc-950 pt-40 pb-24 md:pt-56 md:pb-32 border-b border-white/10 overflow-hidden">
        {/* Background Image with reduced visibility */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/images/camera-wide.jpg')" }}
          />
          {/* Gradients to blend and ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-zinc-950"></div>
          {/* Grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]"></div>
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
            <div className="flex flex-col">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6 flex items-center gap-4">
                Vision
                <div className="h-px bg-emerald-600/20 flex-1"></div>
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-zinc-950 tracking-tight leading-[1.2] text-balance">
                To be recognized as Tamil Nadu’s most trusted provider of <span className="text-emerald-600">Security and Investigation Services.</span>
              </h3>
              <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium border-l-2 border-emerald-500/30 pl-6">
                Delivering protection with unmatched zeal, passion, and professionalism to every client we serve.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6 flex items-center gap-4">
                Mission
                <div className="h-px bg-emerald-600/20 flex-1"></div>
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-zinc-950 tracking-tight leading-[1.2] text-balance">
                To deliver high-quality, innovative services built on <span className="text-emerald-600">trust and strong core values.</span>
              </h3>
              <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium border-l-2 border-emerald-500/30 pl-6">
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

          {/* Core Values Section from Brochure */}
          <div className="mt-32 pt-32 border-t border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[280px]">
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6">Core Values</h2>
                  <h3 className="text-3xl font-bold text-zinc-950 tracking-tighter mb-8">The principles that guide our protection</h3>
                </div>
                <div className="group rounded-2xl overflow-hidden aspect-[16/10] relative border border-zinc-200 shadow-md">
                  <Image
                    src="/images/camera-close.jpg"
                    alt="Close shot of CCTV surveillance camera representing technical vigilance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: "Quality & Dependability", desc: "Providing quick, reliable, and consistent service across all sectors." },
                  { title: "High Integrity", desc: "Duty-minded professionals operating with the highest ethical standards." },
                  { title: "Cost-Effective Solutions", desc: "Premium security doesn't have to be overpriced. We deliver value." },
                  { title: "Guaranteed Results", desc: "Measurable protection outcomes that ensure peace of mind." }
                ].map((value, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-zinc-950 tracking-tight">{value.title}</h4>
                    <p className="text-zinc-600 font-medium leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Discipline Standard (Training & Vetting) */}
      <section className="bg-zinc-100 py-32 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-6 flex items-center gap-4">
                Selection & Training
                <div className="h-px bg-emerald-600/20 flex-1 md:hidden"></div>
              </h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.1]">
                The Discipline Standard
              </h3>
            </div>
            <p className="text-zinc-500 max-w-xl text-lg font-medium leading-relaxed border-l-2 border-emerald-500/30 pl-6">
              Because our leadership comes from a police background, we enforce an unparalleled standard of vetting and continuous training. We don't just hire guards; we deploy professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Rigorous Vetting", desc: "Every candidate undergoes strict police verification, background checks, and psychological evaluation before onboarding." },
              { num: "02", title: "Physical Standards", desc: "Mandatory physical fitness benchmarks matched to law enforcement entry requirements, ensuring capability under pressure." },
              { num: "03", title: "Continuous Training", desc: "Monthly refresher courses on emergency response, fire safety protocols, first aid, and customer interaction." }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: (idx + 1) * 0.1 }}
                className="group relative bg-white p-10 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-zinc-50 group-hover:text-emerald-50 transition-colors duration-500 select-none z-0">
                  {card.num}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-emerald-600 font-bold">{card.num}</span>
                  </div>
                  <h4 className="font-bold text-2xl text-zinc-950 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">{card.title}</h4>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
              { name: "V. Santhanam", role: "Managing Director", desc: "Additional Superintendent of Police (Rtd.)", image: "/images/team/santhanam.png" },
              { name: "S. Kumaravel", role: "Director", desc: "Additional Superintendent of Police (Rtd.)", image: "/images/team/Kumaravel.png" },
              { name: "Er. S. Sanjay", role: "Director", desc: "Marketing & Infrastructure", image: "/images/team/sanjay.png" }
            ].map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                className="group bg-zinc-900 p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors flex flex-col"
              >
                {leader.image ? (
                  <div className="w-full aspect-[4/5] rounded-xl mb-6 relative overflow-hidden bg-zinc-800">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] bg-zinc-800 rounded-xl mb-6 flex flex-col items-center justify-center border border-white/5">
                    <Users className="w-12 h-12 text-zinc-700 mb-4" />
                    <span className="text-zinc-600 text-xs font-bold tracking-widest uppercase">Photo Unavailable</span>
                  </div>
                )}
                <div className="px-4 pb-4">
                  <h4 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">{leader.name}</h4>
                  <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
