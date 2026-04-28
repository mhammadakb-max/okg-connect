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
    <footer style={{ background: '#2E2B27' }} className="relative overflow-hidden">

      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(221,214,203,0.15)' }} />
      {/* Bronze accent line */}
      <div className="absolute top-0 left-0 w-24 h-[2px]" style={{ background: '#B58A57' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-baseline gap-0 mb-5 group">
              <span className="text-[28px] font-extrabold tracking-[-0.03em] leading-none" style={{ color: '#FBF9F5' }}>OKG</span>
              <span className="w-[6px] h-[6px] rounded-full ml-[2px] mb-[2px] group-hover:scale-110 transition-transform" style={{ background: '#B58A57' }} />
            </Link>

            <p className="text-[13px] leading-[1.85] mb-6 max-w-xs" style={{ color: 'rgba(251,249,245,0.45)' }}>
              OKG Building Contracting is a UAE-based contractor focused on disciplined construction support, site supervision, documentation, QHSE and transparent project delivery.
            </p>

            <div className="inline-flex items-center gap-2 rounded px-3.5 py-2 mb-7" style={{ border: '1px solid rgba(221,214,203,0.15)', background: 'rgba(255,255,255,0.03)' }}>
              <span className="w-1 h-1 rounded-full" style={{ background: '#B58A57' }} />
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase" style={{ color: 'rgba(251,249,245,0.35)' }}>
                Discipline · Clarity · Accountability
              </span>
            </div>

            <ul className="space-y-3">
              {[
                { icon: MapPin, val: 'United Arab Emirates' },
                { icon: Phone, val: '+971 54 217 1502' },
                { icon: Mail, val: 'info@okgcontracting.com' },
              ].map(({ icon: Icon, val }) => (
                <li key={val} className="flex items-center gap-3 text-[13px]" style={{ color: 'rgba(251,249,245,0.4)' }}>
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#B58A57', opacity: 0.7 }} />
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(251,249,245,0.25)' }}>Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors flex items-center gap-1.5 group"
                    style={{ color: 'rgba(251,249,245,0.45)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(251,249,245,0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(251,249,245,0.45)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(251,249,245,0.25)' }}>Policies</h4>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors flex items-center gap-1.5"
                    style={{ color: 'rgba(251,249,245,0.45)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(251,249,245,0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(251,249,245,0.45)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(251,249,245,0.25)' }}>Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-[13px] flex items-center gap-2.5" style={{ color: 'rgba(251,249,245,0.4)' }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#B58A57', opacity: 0.5 }} />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-all hover:opacity-85"
                style={{ background: '#B58A57', color: '#FBF9F5' }}
              >
                Request Quotation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10" style={{ borderTop: '1px solid rgba(221,214,203,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px]" style={{ color: 'rgba(251,249,245,0.22)' }}>
            © {new Date().getFullYear()} OKG Building Contracting LLC. All rights reserved. United Arab Emirates.
          </p>
          <p className="text-[11px] font-mono tracking-wide" style={{ color: 'rgba(251,249,245,0.18)' }}>
            Constructing with clarity, discipline and accountability.
          </p>
        </div>
      </div>

    </footer>
  );
}