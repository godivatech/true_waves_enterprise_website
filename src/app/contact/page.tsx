"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Contact() {
  return (
    <>
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
                Connect
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
            >
              Reach out to our security experts for consultations, assessments, or immediate service inquiries.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

          {/* Left Form (Light) */}
          <div className="lg:col-span-7 py-32 px-6 lg:px-16 xl:px-24 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease }}
              className="w-full max-w-xl"
            >
              <h2 className="text-4xl font-bold text-slate-950 mb-4 tracking-tight">Initiate Inquiry</h2>
              <p className="text-slate-600 mb-12 font-medium text-lg">Fill out the form below. Our operations team will respond promptly.</p>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent font-medium"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-slate-500 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-focus:font-bold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent font-medium"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-4 text-slate-500 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-focus:font-bold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors resize-none placeholder-transparent font-medium"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 text-slate-500 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-focus:font-bold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                  >
                    Requirements / Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-5 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 shadow-lg mt-8"
                >
                  <span className="flex items-center gap-3 text-sm uppercase tracking-widest">
                    Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Info (Dark) */}
          <div className="lg:col-span-5 bg-slate-900 py-32 px-6 lg:px-16 xl:px-24 flex justify-center lg:justify-start border-t lg:border-t-0 lg:border-l border-slate-800">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease }}
              className="w-full max-w-xl text-white"
            >
              <h2 className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-16">Command Locations</h2>

              <div className="space-y-16">
                {/* Madurai Office */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10">
                      <MapPin className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">Madurai HQ</h3>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed font-medium pl-14">
                    No.5, North St, Singarayar Colony,<br />
                    Narimedu, Madurai – 625002
                  </p>
                  <div className="flex items-center gap-3 text-slate-300 pl-14 font-medium">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>0452 4506226</span>
                  </div>
                </div>

                {/* Chennai Office */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10">
                      <MapPin className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">Chennai Branch</h3>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed font-medium pl-14">
                    K.R.J Building, 4th Floor,<br />
                    7, Welder St, Mount Road, Chennai
                  </p>
                  <div className="flex items-center gap-3 text-slate-300 pl-14 font-medium">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span>044 42153870</span>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 my-8"></div>

                {/* Digital Contact */}
                <div className="space-y-6">
                  <a href="mailto:truewavessolutions@yahoo.com" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group font-medium">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-emerald-500 transition-colors">
                      <Mail className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="truncate">truewavessolutions@yahoo.com</span>
                  </a>
                  <a href="http://www.truewavessecuritysolution.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group font-medium">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-emerald-500 transition-colors">
                      <Send className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="truncate">truewavessecuritysolution.com</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
