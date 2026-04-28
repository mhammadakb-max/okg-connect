import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'People Focus', path: '/people-focus' },
  { label: 'Services', path: '/services' },
  { label: 'Capabilities', path: '/capabilities' },
  {
    label: 'Policies',
    children: [
      { label: 'QHSE Overview', path: '/qhse' },
      { label: 'Quality Policy', path: '/quality-policy' },
      { label: 'Health & Safety Policy', path: '/health-safety-policy' },
      { label: 'Environmental Policy', path: '/environmental-policy' },
      { label: 'Social Commitment', path: '/social-commitment' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [mobilePolicyOpen, setMobilePolicyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePolicyOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ borderBottom: '1px solid #E5E7EB' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-black tracking-tight text-navy">OKG</span>
            <span className="w-2 h-2 rounded-full bg-gold -ml-1 mb-3"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setPolicyOpen(true)}
                  onMouseLeave={() => setPolicyOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-navy transition-colors rounded-md`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {policyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-border p-2 mt-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                              location.pathname === child.path
                                ? 'bg-offwhite text-navy font-semibold'
                                : 'text-charcoal hover:bg-offwhite hover:text-navy'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-navy font-semibold'
                      : 'text-charcoal hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy/90 transition-all hover:shadow-lg"
            >
              Request Quotation
            </Link>
            <button
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobilePolicyOpen(!mobilePolicyOpen)}
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-charcoal rounded-lg"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobilePolicyOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobilePolicyOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-charcoal hover:text-navy rounded-lg"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 text-sm font-medium rounded-lg ${
                      location.pathname === link.path
                        ? 'text-navy bg-offwhite font-semibold'
                        : 'text-charcoal hover:bg-offwhite'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 bg-navy text-white text-sm font-semibold rounded-lg mt-3"
              >
                Request Quotation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}