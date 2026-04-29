import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Subcontractors', path: '/subcontractor-portal' },
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
    <footer className="relative overflow-hidden border-t border-white/10 shadow-[0_-18px_60px_rgba(0,16,120,0.12)]" style={{ backgroundColor: '#001078' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,184,88,0.20),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-baseline gap-0 mb-4">
              <span className="text-2xl font-bold text-white">OKG</span>
              <span className="text-2xl font-bold" style={{ color: '#F8B858' }}>.</span>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              OKG Building Contracting is a UAE-based contractor focused on disciplined construction support, site supervision, documentation, QHSE and transparent project delivery.
            </p>

            <ul className="space-y-3">
              {[
                { Icon: MapPin, val: 'Warba Centre, Office 504, Al Muraqabat, Deira, Dubai, UAE' },
                { Icon: Phone, val: '+971 54 217 1502' },
                { Icon: Mail, val: 'info@okgcontracting.com' },
              ].map(({ Icon, val }) => (
                <li key={val} className="flex items-start gap-3 text-sm text-white/70">
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F8B858' }} />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">Policies</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {serviceList.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F8B858' }} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} OKG Building Contracting LLC. All rights reserved. United Arab Emirates.</p>
          <p>Constructing with clarity, discipline and accountability.</p>
        </div>
      </div>
    </footer>
  );
}