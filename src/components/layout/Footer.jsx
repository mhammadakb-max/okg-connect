import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-5">
              <span className="text-3xl font-black tracking-tight text-white">OKG</span>
              <span className="w-2.5 h-2.5 rounded-full bg-gold -ml-1 mb-4"></span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              OKG Building Contracting is a UAE-based contractor built around honest commitments, disciplined site delivery and professional construction standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                United Arab Emirates
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                +971 XX XXX XXXX
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                info@okgcontracting.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} OKG Building Contracting. All rights reserved.
            </p>
          </div>
          <p className="text-center mt-4 text-sm text-gold/80 font-medium">
            Built on honest commitments, disciplined site delivery and UAE construction standards.
          </p>
        </div>
      </div>
    </footer>
  );
}