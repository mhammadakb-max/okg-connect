import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

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
  { label: 'People Focus', path: '/people-focus' },
];

const serviceList = [
  'Building Contracting Works',
  'Blockwork & Masonry',
  'Plastering Works',
  'Concrete Works',
  'Steel Fixing & Shuttering',
  'Fit-Out & Finishing',
  'Subcontracting Support',
  'Manpower Mobilisation',
];

export default function Footer() {
  return (
    <footer style={{ background: '#000833' }} className="text-white relative overflow-hidden">

      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.018,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(248,184,88,0.025) 0px, rgba(248,184,88,0.025) 1px, transparent 1px, transparent 56px)`,
        }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #F8B858 25%, #F8B858 75%, transparent)' }} />

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand col */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-baseline gap-0 mb-6 group">
              <span className="text-[32px] font-black tracking-[-0.03em] text-white leading-none">OKG</span>
              <span className="w-[8px] h-[8px] rounded-full ml-[2px] mb-[2px] group-hover:scale-110 transition-transform" style={{ background: '#F8B858' }} />
            </Link>

            <p className="text-[13px] leading-[1.8] mb-7 max-w-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              OKG Building Contracting is a UAE-based contractor focused on disciplined construction support, site supervision, documentation, QHSE and transparent project delivery.
            </p>

            {/* Tagline */}
            <div
              className="inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 mb-8"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F8B858' }} />
              <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Discipline · Clarity · Accountability
              </span>
            </div>

            {/* Contact */}
            <ul className="space-y-3.5">
              {[
                { icon: MapPin, val: 'United Arab Emirates' },
                { icon: Phone, val: '+971 XX XXX XXXX' },
                { icon: Mail, val: 'info@okgcontracting.com' },
              ].map(({ icon: Icon, val }) => (
                <li key={val} className="flex items-center gap-3 text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#F8B858', opacity: 0.8 }} />
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors hover:text-white flex items-center gap-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 shrink-0">
                      <span className="block w-3 h-px" style={{ background: '#F8B858' }} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Policies</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors hover:text-white flex items-center gap-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 shrink-0">
                      <span className="block w-3 h-px" style={{ background: '#F8B858' }} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Services</h4>
            <ul className="space-y-2">
              {serviceList.map((s) => (
                <li key={s} className="text-[13px] flex items-center gap-2.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#F8B858', opacity: 0.5 }} />
                  {s}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-bold transition-all hover:scale-[1.02]"
                style={{ background: '#F8B858', color: '#001078' }}
              >
                Request Quotation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} OKG Building Contracting LLC. All rights reserved. United Arab Emirates.
          </p>
          <p className="text-[11px] font-mono tracking-wide" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Constructing with discipline, clarity and accountability.
          </p>
        </div>
      </div>

    </footer>
  );
}