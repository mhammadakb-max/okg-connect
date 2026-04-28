import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

const policyLinks = [
  { label: 'QHSE Overview', path: '/qhse' },
  { label: 'Quality Policy', path: '/quality-policy' },
  { label: 'Health & Safety', path: '/health-safety-policy' },
  { label: 'Environmental Policy', path: '/environmental-policy' },
  { label: 'Social Commitment', path: '/social-commitment' },
];

const services = [
  'Blockwork & Masonry',
  'Plastering Works',
  'Concrete Works',
  'Steel Fixing & Shuttering',
  'Fit-Out & Finishing',
  'Subcontracting Support',
];

export default function Footer() {
  return (
    <footer style={{ background: '#001078' }} className="text-white">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand col — spans 4 */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-0 mb-5">
              <span className="text-[30px] font-black tracking-[-0.02em] text-white leading-none">OKG</span>
              <span className="w-2 h-2 rounded-full ml-0.5 mb-[16px]" style={{ background: '#F8B858' }} />
            </div>
            <p className="text-[13px] leading-relaxed text-white/60 mb-6 max-w-xs">
              OKG Building Contracting is a UAE-based contractor focused on disciplined construction support, site supervision, documentation, QHSE and transparent project delivery.
            </p>

            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F8B858' }} />
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">Discipline · Clarity · Accountability</span>
            </div>

            {/* Contact */}
            <ul className="space-y-3.5">
              {[
                { icon: MapPin, val: 'United Arab Emirates' },
                { icon: Phone, val: '+971 XX XXX XXXX' },
                { icon: Mail, val: 'info@okgcontracting.com' },
              ].map(({ icon: Icon, val }) => (
                <li key={val} className="flex items-center gap-3 text-[13px] text-white/55">
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#F8B858' }} />
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links — spans 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-white/55 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" style={{ color: '#F8B858' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies — spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">Policies</h4>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-white/55 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" style={{ color: '#F8B858' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-[13px] text-white/55 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#F8B858', opacity: 0.5 }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} OKG Building Contracting LLC. All rights reserved.
          </p>
          <p className="text-[12px] font-mono text-white/25 tracking-wide">
            Constructing with clarity, discipline and accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}