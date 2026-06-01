import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const navigation = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Capabilities', '/capabilities'],
  ['Projects', '/projects'], ['Careers', '/careers'], ['Become a Subcontractor', '/subcontractor-portal'], ['Contact', '/contact'],
];

const qhse = [
  ['QHSE', '/qhse'], ['Quality Policy', '/quality-policy'], ['Health and Safety Policy', '/health-safety-policy'], ['Environmental Policy', '/environmental-policy'], ['Social Commitment', '/social-commitment'],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-lg font-black text-primary">OKG</span>
            <span className="text-lg font-extrabold leading-tight">OKG Building Contracting L.L.C</span>
          </Link>
          <p className="mb-6 text-sm leading-relaxed text-white/70">UAE-based building contracting company focused on civil works, finishing works, skilled workforce deployment, site supervision and documentation control.</p>
          <div className="flex gap-2" aria-label="Social media links">
            {['in', 'ig', 'fb'].map((item) => <span key={item} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-bold uppercase text-white/80">{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-accent">Navigation</h3>
          <ul className="space-y-2">
            {navigation.map(([label, path]) => <li key={path}><Link to={path} className="text-sm text-white/70 transition-colors hover:text-white">{label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-accent">QHSE & Policies</h3>
          <ul className="space-y-2">
            {qhse.map(([label, path]) => <li key={path}><Link to={path} className="text-sm text-white/70 transition-colors hover:text-white">{label}</Link></li>)}
            <li><Link to="/privacy-policy" className="text-sm text-white/70 transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="text-sm text-white/70 transition-colors hover:text-white">Terms and Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-accent">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="tel:+971542171502" className="hover:text-white">+971 54 217 1502</a></li>
            <li className="flex gap-3"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="https://wa.me/971542171502" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp OKG</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="mailto:info@okgbuild.com" className="hover:text-white">info@okgbuild.com</a></li>
            <li className="flex gap-3"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />www.okgbuild.com</li>
          </ul>
          <Link to="/request-quotation" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90">Request a Quotation</Link>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/10 px-4 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} OKG Building Contracting L.L.C. All rights reserved. Civil works and finishing contractor in the UAE.
      </div>
    </footer>
  );
}