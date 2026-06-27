"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Landmark, Factory, Hospital, GraduationCap, Home as HomeIcon, Building2 } from "lucide-react";

// Professional, smooth easing
const ease = [0.76, 0, 0.24, 1] as const;

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const verticals = [
    { icon: Landmark, title: "Banking & Finance", desc: "High-security protocols for financial institutions and transit." },
    { icon: Building2, title: "Corporate IT Parks", desc: "Comprehensive tech-enabled security for modern corporate hubs." },
    { icon: GraduationCap, title: "Educational Institutions", desc: "Safe learning environments with controlled access and monitoring." },
    { icon: HomeIcon, title: "High-End Residential", desc: "Premium, unobtrusive protection for luxury residential complexes." },
    { icon: Hospital, title: "Healthcare & Hospitals", desc: "Discreet and professional security for sensitive medical environments." },
    { icon: Factory, title: "Industrial & Manufacturing", desc: "Scaleable protection for expansive industrial units and assets." }
  ];
  return (
    <>
      {/* Hero Section (Dark - bg-zinc-950) */}
      <section className="relative bg-zinc-950 pt-40 pb-24 md:pt-56 md:pb-32 min-h-[90vh] flex flex-col justify-between overflow-hidden">
        {/* Background Image with reduced visibility */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
            style={{ backgroundImage: "url('/images/camera-wide.jpg')" }}
          />
          {/* Gradients to blend and ensure text readability - Neutral Tones */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/75 via-transparent to-transparent"></div>

          {/* Grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col gap-2 md:gap-4 w-full border-l-2 border-emerald-500 mb-16">
            {["Security", "Safety", "Surveillance"].map((text, i) => (
              <div key={text} className="overflow-hidden pl-6 md:pl-10">
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.6, ease, delay: i * 0.25 }}
                  className="text-5xl md:text-[6.8vw] font-bold uppercase tracking-tighter leading-[0.85] text-white"
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
                className="text-xs uppercase tracking-[0.2em] text-emerald-500 flex flex-col gap-2 font-bold"
              >
                <span>Vigilance</span>
                <span>Protection</span>
                <span>Assurance</span>
              </motion.div>
            </div>
            <div className="md:col-span-8 lg:col-span-6 lg:col-start-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease }}
                className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium"
              >
                Managed by retired Additional Superintendents of Police, we provide uncompromising, intelligent protection for enterprises demanding the highest standards.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview (Light - bg-white) */}
      <section className="bg-white py-32 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Text & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-8">The Enterprise</h2>

                <div className="mb-8">
                  <div className="overflow-hidden">
                    <motion.h3
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease }}
                      className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-950 tracking-tight leading-[1.1]"
                    >
                      Professionally managed <span className="text-emerald-600">security solutions</span>
                    </motion.h3>
                  </div>
                  <div className="overflow-hidden mt-6">
                    <motion.p
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: 0.1, ease }}
                      className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-2xl"
                    >
                      With unparalleled expertise in crime prevention, covert surveillance, and intelligence. Managed by law-enforcement experts to ensure top-tier safety.
                    </motion.p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-zinc-200 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="text-5xl font-bold tracking-tighter text-emerald-600 mb-2">2009</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">Established</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="text-5xl font-bold tracking-tighter text-zinc-950 mb-2">ISO</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">9001:2008 Certified</div>
                  </motion.div>
                </div>
              </div>

              <Link href="/about" className="inline-flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white group-hover:bg-zinc-950 transition-colors duration-500 shadow-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span className="text-sm uppercase tracking-widest font-bold text-zinc-900">Our Leadership</span>
              </Link>
            </div>

            {/* Right Column: Premium Image Card */}
            <div className="lg:col-span-5 group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className="bg-zinc-100 rounded-3xl overflow-hidden aspect-[4/5] relative border border-zinc-200 shadow-2xl shadow-emerald-500/5"
              >
                <Image
                  src="/images/security-guard.jpg"
                  alt="True Waves Uniformed Security Guard Officer looking at facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Verticals (Industry Expertise) */}
      <section className="bg-zinc-50 py-32 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-4">Industry Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 max-w-none md:whitespace-nowrap">
              Securing Key Industries and Sectors
            </h3>
          </div>

          {/* Mobile/Tablet Grid Layout (lg:hidden) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {verticals.map((vertical, i) => {
              const Icon = vertical.icon;
              return (
                <motion.div
                  key={vertical.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                  className="bg-white p-8 border border-zinc-200 hover:border-emerald-500 transition-colors duration-300 rounded-xl group"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">{vertical.title}</h4>
                  <p className="text-zinc-600 font-medium text-sm leading-relaxed">{vertical.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Circular Diagram Layout (hidden lg:block) */}
          <div className="hidden lg:block relative w-full max-w-[1000px] h-[720px] mx-auto mt-12 select-none">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 720" fill="none">
              {/* Central Circle Outline */}
              <circle cx="500" cy="360" r="162" stroke="#E5E7EB" strokeWidth="1" />
              <circle cx="500" cy="360" r="154" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4" />
              
              {/* Connection Lines */}
              {/* 0. Top Hexagon to Banking & Finance */}
              <path 
                d="M 500 150 L 500 106 L 500 90" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 0 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 0 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 0 ? "0" : "3,3"} 
              />
              <circle cx="500" cy="90" r={hoveredIdx === 0 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 0 ? "#10B981" : "#94A3B8"} />
              
              {/* 1. Top-Left Hexagon to Corporate IT Parks */}
              <path 
                d="M 280 233 L 250 233" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 1 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 1 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 1 ? "0" : "3,3"} 
              />
              <circle cx="250" cy="233" r={hoveredIdx === 1 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 1 ? "#10B981" : "#94A3B8"} />
              
              {/* 2. Bottom-Left Hexagon to Educational Institutions */}
              <path 
                d="M 280 443 L 250 443" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 2 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 2 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 2 ? "0" : "3,3"} 
              />
              <circle cx="250" cy="443" r={hoveredIdx === 2 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 2 ? "#10B981" : "#94A3B8"} />
              
              {/* 3. Bottom Hexagon to High-End Residential */}
              <path 
                d="M 500 570 L 500 614 L 500 630" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 3 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 3 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 3 ? "0" : "3,3"} 
              />
              <circle cx="500" cy="630" r={hoveredIdx === 3 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 3 ? "#10B981" : "#94A3B8"} />
              
              {/* 4. Bottom-Right Hexagon to Healthcare & Hospitals */}
              <path 
                d="M 720 443 L 750 443" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 4 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 4 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 4 ? "0" : "3,3"} 
              />
              <circle cx="750" cy="443" r={hoveredIdx === 4 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 4 ? "#10B981" : "#94A3B8"} />
              
              {/* 5. Top-Right Hexagon to Industrial & Manufacturing */}
              <path 
                d="M 720 233 L 750 233" 
                className="transition-all duration-300" 
                stroke={hoveredIdx === 5 ? "#10B981" : "#E5E7EB"} 
                strokeWidth={hoveredIdx === 5 ? "2" : "1"} 
                strokeDasharray={hoveredIdx === 5 ? "0" : "3,3"} 
              />
              <circle cx="750" cy="233" r={hoveredIdx === 5 ? "4" : "3"} className="transition-all duration-300" fill={hoveredIdx === 5 ? "#10B981" : "#94A3B8"} />
            </svg>

            {/* Central Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-white shadow-xl border border-zinc-200 flex flex-col items-center justify-center p-6 text-center z-10">
              {/* Shield Watermark Icon in background */}
              <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                <svg className="w-36 h-36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-950 leading-snug relative z-20">
                Securing Key <br />
                <span className="text-emerald-600">Industries</span> <br />
                and Sectors
              </h3>
            </div>

            {/* Top Text Block */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 top-[15px] w-[280px] text-center transition-all duration-300 cursor-pointer ${hoveredIdx === 0 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(0)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 0 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>Banking & Finance</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">High-security protocols for financial institutions and transit.</p>
            </div>

            {/* Left Column Text Blocks */}
            <div 
              className={`absolute left-[10px] top-[220px] w-[220px] text-right transition-all duration-300 cursor-pointer ${hoveredIdx === 1 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(1)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 1 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>Corporate IT Parks</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">Comprehensive tech-enabled security for modern corporate hubs.</p>
            </div>

            <div 
              className={`absolute left-[10px] top-[430px] w-[220px] text-right transition-all duration-300 cursor-pointer ${hoveredIdx === 2 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(2)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 2 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>Educational Institutions</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">Safe learning environments with controlled access and monitoring.</p>
            </div>

            {/* Right Column Text Blocks */}
            <div 
              className={`absolute right-[10px] top-[220px] w-[220px] text-left transition-all duration-300 cursor-pointer ${hoveredIdx === 5 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(5)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 5 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>Industrial & Manufacturing</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">Scaleable protection for expansive industrial units and assets.</p>
            </div>

            <div 
              className={`absolute right-[10px] top-[430px] w-[220px] text-left transition-all duration-300 cursor-pointer ${hoveredIdx === 4 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(4)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 4 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>Healthcare & Hospitals</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">Discreet and professional security for sensitive medical environments.</p>
            </div>

            {/* Bottom Text Block */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 top-[640px] w-[280px] text-center transition-all duration-300 cursor-pointer ${hoveredIdx === 3 ? "scale-105" : "opacity-80"}`}
              onMouseEnter={() => setHoveredIdx(3)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h4 className={`text-lg font-bold transition-colors duration-300 ${hoveredIdx === 3 ? "text-emerald-600 font-extrabold" : "text-zinc-950"}`}>High-End Residential</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">Premium, unobtrusive protection for luxury residential complexes.</p>
            </div>

            {/* Hexagonal Interactive Nodes */}
            {verticals.map((vertical, idx) => {
              const Icon = vertical.icon;
              const isActive = hoveredIdx === idx;
              
              // Coordinates offsets for hexagon centers relative to absolute center at (500, 360)
              const positions = [
                "-mt-[210px]",             // 0: Top (Banking & Finance)
                "-ml-[182px] -mt-[105px]",  // 1: Top-Left (Corporate IT Parks)
                "-ml-[182px] mt-[105px]",   // 2: Bottom-Left (Educational Institutions)
                "mt-[210px]",              // 3: Bottom (High-End Residential)
                "ml-[182px] mt-[105px]",    // 4: Bottom-Right (Healthcare & Hospitals)
                "ml-[182px] -mt-[105px]"   // 5: Top-Right (Industrial & Manufacturing)
              ];
              
              return (
                <div
                  key={idx}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[88px] flex items-center justify-center p-[2px] transition-all duration-300 z-20 cursor-pointer ${positions[idx]} ${isActive ? "bg-emerald-500 scale-110 shadow-lg" : "bg-zinc-200"}`}
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div 
                    className={`w-full h-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-emerald-600 text-white" : "bg-white text-emerald-600"}`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <Icon className={`w-7 h-7 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List (Dark - bg-zinc-900) */}
      <section className="bg-zinc-900 py-32 border-t border-zinc-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Capabilities</h2>
            <p className="text-zinc-400 max-w-sm text-lg font-medium">Comprehensive, tactical solutions tailored for total operational security.</p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {[
              { num: "01", title: "Security Services", desc: "Armed & unarmed guarding, access control, and secure transit for valuables." },
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
                <div className="md:col-span-3 text-zinc-400 font-medium">
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

      {/* CTA Section (Highlight - bg-zinc-900/50 over bg-zinc-950) */}
      <section className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-4">Secure Your Infrastructure</h2>

          <div className="overflow-hidden mb-6">
            <motion.h3
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9] text-white"
            >
              Initiate Deployment
            </motion.h3>
          </div>

          <p className="text-xl text-zinc-400 mb-8 max-w-2xl font-medium">
            Partner with True Waves for uncompromising protection and professional investigation services. Let our experts assess your vulnerabilities.
          </p>

          <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-zinc-950 shadow-lg">
            <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
              Request Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
