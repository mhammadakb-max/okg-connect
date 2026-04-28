import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Capabilities', path: '/capabilities' },
  {
    label: 'QHSE & Policies',
    children: [
      { label: 'QHSE Overview', path: '/qhse' },
      { label: 'Quality Policy', path: '/quality-policy' },
      { label: 'Health & Safety Policy', path: '/health-safety-policy' },
      { label: 'Environmental Policy', path: '/environmental-policy' },
      { label: 'Social Commitment', path: '/social-commitment' },
      { label: 'People Focus', path: '/people-focus' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = navLinks.find(l => l.children)?.children.some(c => c.path === location.pathname);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block" style={{ background: '#001078', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <p className="text-[11px] text-white/40 font-mono tracking-[0.12em] uppercase">
              OKG Building Contracting — UAE · Civil · Masonry · Plastering · Fit-Out · Finishing
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-white/35 font-mono">info@okgcontracting.com</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[11px] text-white/35 font-mono">+971 54 217 1502</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'shadow-lg shadow-navy/10 border-b border-gray-100/80'
            : 'border-b border-transparent'
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-0 shrink-0 group">
              <div className="flex items-baseline gap-0">
                <span className="text-[28px] font-black tracking-[-0.03em] leading-none transition-colors duration-300" style={{ color: scrolled ? '#001078' : '#ffffff' }}>OKG</span>
                <span className="w-[7px] h-[7px] rounded-full ml-[2px] mb-[2px] group-hover:scale-110 transition-transform duration-200" style={{ background: '#F8B858' }} />
              </div>
              <div className="ml-3 pl-3 border-l hidden sm:block transition-colors duration-300" style={{ borderColor: scrolled ? '#e5e7eb' : 'rgba(255,255,255,0.25)' }}>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase leading-tight transition-colors duration-300" style={{ color: scrolled ? '#001078' : 'rgba(255,255,255,0.9)' }}>Building</p>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase leading-tight transition-colors duration-300" style={{ color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.55)' }}>Contracting</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium rounded-lg transition-all duration-200 hover:bg-offwhite ${
                        isDropdownActive ? 'text-navy' : scrolled ? 'text-charcoal hover:text-navy' : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                        style={{ color: '#6B7280' }}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.14, ease: 'easeOut' }}
                          className="absolute top-full left-0 bg-white rounded-2xl shadow-2xl border border-gray-100/80 p-2 mt-1.5 overflow-hidden"
                          style={{ width: 260, boxShadow: '0 20px 60px rgba(0,16,120,0.12), 0 4px 16px rgba(0,0,0,0.06)' }}
                        >
                          {/* Top navy strip */}
                          <div className="px-4 py-3 mb-1 rounded-xl" style={{ background: '#001078' }}>
                            <p className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>Policy & People Documents</p>
                          </div>
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`flex items-center gap-3 px-3 py-2.5 text-[13px] rounded-xl transition-all group ${
                                isActive(child.path)
                                  ? 'font-semibold'
                                  : 'text-charcoal hover:text-navy'
                              }`}
                              style={isActive(child.path) ? { background: 'rgba(0,16,120,0.06)', color: '#001078' } : {}}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                                style={{ background: isActive(child.path) ? '#F8B858' : 'rgba(248,184,88,0.4)' }}
                              />
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
                    className={`relative px-4 py-2.5 text-[13px] font-medium rounded-lg transition-all duration-200 hover:bg-offwhite ${
                      isActive(link.path) ? 'text-navy font-semibold' : scrolled ? 'text-charcoal hover:text-navy' : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full"
                        style={{ background: '#F8B858' }}
                      />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2.5">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                style={scrolled ? { background: '#001078', color: '#fff' } : { background: '#F8B858', color: '#001078' }}
              >
                Request Quotation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile burger */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
                style={{ border: scrolled ? '1.5px solid #e5e7eb' : '1.5px solid rgba(255,255,255,0.3)' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" style={{ color: scrolled ? '#001078' : '#ffffff' }} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" style={{ color: scrolled ? '#001078' : '#ffffff' }} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(0,16,120,0.55)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.26, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-full bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <div className="flex items-baseline gap-0">
                  <span className="text-[22px] font-black tracking-tight" style={{ color: '#001078' }}>OKG</span>
                  <span className="w-[6px] h-[6px] rounded-full ml-0.5 mb-0.5" style={{ background: '#F8B858' }} />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: '#6B7280' }} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-0.5">
                  <Link
                    to="/"
                    className={`flex items-center px-4 py-3 text-[14px] font-medium rounded-xl transition-colors ${
                      isActive('/') ? 'font-bold' : 'text-charcoal hover:bg-gray-50 hover:text-navy'
                    }`}
                    style={isActive('/') ? { background: 'rgba(0,16,120,0.06)', color: '#001078' } : {}}
                  >
                    Home
                  </Link>
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-[14px] font-medium rounded-xl transition-colors text-charcoal hover:bg-gray-50"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                            style={{ color: '#9CA3AF' }}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 pl-3 border-l-2 pt-1 space-y-0.5 pb-2 mt-1" style={{ borderColor: 'rgba(248,184,88,0.4)' }}>
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className={`flex items-center gap-3 px-3 py-2.5 text-[13px] rounded-xl transition-colors ${
                                      isActive(child.path) ? 'font-semibold' : 'text-steel hover:text-navy hover:bg-gray-50'
                                    }`}
                                    style={isActive(child.path) ? { background: 'rgba(0,16,120,0.06)', color: '#001078' } : {}}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#F8B858', opacity: isActive(child.path) ? 1 : 0.5 }} />
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
                        className={`flex items-center px-4 py-3 text-[14px] font-medium rounded-xl transition-colors ${
                          isActive(link.path) ? 'font-bold' : 'text-charcoal hover:bg-gray-50 hover:text-navy'
                        }`}
                        style={isActive(link.path) ? { background: 'rgba(0,16,120,0.06)', color: '#001078' } : {}}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-4 py-5 space-y-3" style={{ borderTop: '1px solid #f3f4f6' }}>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-[14px] font-bold rounded-xl text-white transition-all"
                  style={{ background: '#001078' }}
                >
                  Request a Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[11px] font-mono" style={{ color: '#9CA3AF' }}>+971 54 217 1502 · info@okgcontracting.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}