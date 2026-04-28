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
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F7F9FF 0%, #EAF0FF 50%, #F2F6FF 100%)',
        borderTop: '1px solid #E6EBF5',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(110,133,232,0.05) 0%, transparent 70%)' }}
      />
      {/* Blue top accent */}
      <div
        className="absolute top-0 left-0 w-28 h-[2px]"
        style={{ background: 'linear-gradient(to right, #6E85E8, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-baseline gap-0 mb-5 group">
              <span className="text-[28px] font-extrabold tracking-[-0.03em] leading-none" style={{ color: '#3D4A73' }}>OKG</span>
              <span className="w-[5px] h-[5px] rounded-full ml-[2px] mb-[2px] group-hover:scale-110 transition-transform" style={{ background: '#6E85E8' }} />
            </Link>

            <p className="text-[13px] leading-[1.85] mb-6 max-w-xs" style={{ color: '#97A0BC' }}>
              OKG Building Contracting is a UAE-based contractor focused on disciplined construction support, site supervision, documentation, QHSE and transparent project delivery.
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 mb-7"
              style={{ border: '1px solid #E6EBF5', background: 'rgba(255,255,255,0.6)' }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: '#6E85E8' }} />
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase" style={{ color: '#97A0BC' }}>
                Discipline · Clarity · Accountability
              </span>
            </div>

            <ul className="space-y-3">
              {[
                { Icon: MapPin, val: 'United Arab Emirates' },
                { Icon: Phone, val: '+971 54 217 1502' },
                { Icon: Mail, val: 'info@okgcontracting.com' },
              ].map(({ Icon, val }) => (
                <li key={val} className="flex items-center gap-3 text-[13px]" style={{ color: '#97A0BC' }}>
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#6E85E8', opacity: 0.7 }} />
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C5CBE0' }}>Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors flex items-center gap-1.5 group"
                    style={{ color: '#97A0BC' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#5F6D9A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#97A0BC'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C5CBE0' }}>Policies</h4>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors flex items-center gap-1.5"
                    style={{ color: '#97A0BC' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#5F6D9A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#97A0BC'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C5CBE0' }}>Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-[13px] flex items-center gap-2.5" style={{ color: '#97A0BC' }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#6E85E8', opacity: 0.5 }} />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold transition-all hover:opacity-88"
                style={{
                  background: 'linear-gradient(135deg, #6E85E8 0%, #8FA2F2 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(110,133,232,0.22)',
                }}
              >
                Request Quotation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #E6EBF5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px]" style={{ color: '#C5CBE0' }}>
            © {new Date().getFullYear()} OKG Building Contracting LLC. All rights reserved. United Arab Emirates.
          </p>
          <p className="text-[11px] font-mono tracking-wide" style={{ color: '#C5CBE0' }}>
            Constructing with clarity, discipline and accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}