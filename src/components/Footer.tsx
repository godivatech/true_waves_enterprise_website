import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Shield className="w-8 h-8 text-emerald-500" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight">TRUE WAVES</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Enterprises</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mt-2">
            Professional Security and Investigation Services across Tamil Nadu. Commanded by police-background professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Security Services</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Manpower Solutions</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Investigation</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Technical Solutions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>No.5, North St, Singarayar Colony, Narimedu, Madurai – 625002</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>0452 4506226 / 044 42153870</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <a href="mailto:truewavessolutions@yahoo.com" className="hover:text-emerald-400 transition-colors truncate">
                truewavessolutions@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} True Waves Enterprises. All rights reserved.</p>
        <p>ISO Certified Professional Security Company</p>
      </div>
    </footer>
  );
}
