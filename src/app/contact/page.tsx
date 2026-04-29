"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Reach out to our security experts for consultations, assessments, or immediate service inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Form (Light) */}
          <div className="py-24 px-6 lg:px-16 xl:px-24 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-xl"
            >
              <h2 className="text-3xl font-bold text-slate-950 mb-2">Send a Message</h2>
              <p className="text-slate-600 mb-10">Fill out the form below and our team will get back to you promptly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-4 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  SEND MESSAGE <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Info (Dark) */}
          <div className="bg-slate-900 py-24 px-6 lg:px-16 xl:px-24 flex justify-center lg:justify-start border-t lg:border-t-0 lg:border-l border-slate-800">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-xl text-white"
            >
              <h2 className="text-3xl font-bold mb-10">Our Offices</h2>
              
              <div className="space-y-12">
                {/* Madurai Office */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Madurai Headquarters</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      No.5, North St, Singarayar Colony,<br/>
                      Narimedu, Madurai – 625002
                    </p>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Phone className="w-4 h-4 text-emerald-500" />
                      <span>0452 4506226</span>
                    </div>
                  </div>
                </div>

                {/* Chennai Office */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Chennai Branch</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      K.R.J Building, 4th Floor,<br/>
                      7, Welder St, Mount Road, Chennai – 600002
                    </p>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Phone className="w-4 h-4 text-emerald-500" />
                      <span>044 42153870</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 my-8"></div>

                {/* Digital Contact */}
                <div className="space-y-4">
                  <a href="mailto:truewavessolutions@yahoo.com" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                      <Mail className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span>truewavessolutions@yahoo.com</span>
                  </a>
                  <a href="http://www.truewavessecuritysolution.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                      <Send className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span>www.truewavessecuritysolution.com</span>
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
