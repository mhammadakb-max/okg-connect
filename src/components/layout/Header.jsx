import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { 
    label: 'Company', 
    children: [
      { label: 'About', path: '/about' },
      { label: 'People Focus', path: '/people-focus' },
    ]
  },
  { label: 'Services', path: '/services' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'QHSE', path: '/qhse' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Subcontractors', path: '/subcontractor-portal' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isGroupActive = (link) => link.children?.some(child => isActive(child.path));

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-[0_12px_40px_rgba(0,16,120,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#001078' }}>OKG</span>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F8B858' }} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button className="px-3 py-2 text-sm font-bold text-text-primary hover:text-navy transition-all duration-300 hover:-translate-y-0.5">
                      {link.label}
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </button>
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-text-primary hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${isActive(link.path) ? 'text-navy' : 'text-text-primary hover:text-navy'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden sm:inline-flex px-5 py-2 text-sm font-semibold text-white rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95"
                style={{ backgroundColor: '#001078' }}
              >
                Request Quotation
              </Link>

              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50 rounded-md transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2.5 text-sm font-semibold text-white text-center rounded-md transition-opacity hover:opacity-90 mt-4"
                  style={{ backgroundColor: '#001078' }}
                >
                  Request Quotation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}