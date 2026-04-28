import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const P = {
  blue: '#6E85E8',
  blueL: '#8FA2F2',
  head: '#5F6D9A',
  body: '#7C86A8',
  muted: '#97A0BC',
  border: '#E6EBF5',
  bg: '#F7F9FF',
  white: '#FFFFFF',
};

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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePolicyOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;
  const isPolicyActive = navLinks.find((l) => l.children)?.children.some((c) => c.path === location.pathname);

  return (
    <>
      {/* Top info strip */}
      <div
        className="hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #F2F6FF, #EAF0FF)',
          borderBottom: '1px solid #E6EBF5',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-7">
            <p className="text-[10px] font-mono tracking-wide opacity-70" style={{ color: '#97A0BC' }}>
              UAE Building Contracting — Civil · Masonry · Plastering · Finishing
            </p>
            <div className="flex items-center gap-1.5 text-[10px] opacity-70" style={{ color: '#97A0BC' }}>
              <Phone className="w-3 h-3" style={{ color: '#6E85E8' }} />
              <span>+971 54 217 1502</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(247,249,255,0.92)' : '#FFFFFF',
          borderBottom: `1px solid ${P.border}`,
          boxShadow: scrolled ? '0 2px 20px rgba(110,133,232,0.08)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[54px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-0 shrink-0 group">
              <span
                className="text-[24px] font-extrabold tracking-[-0.03em] leading-none"
                style={{ color: '#3D4A73' }}
              >OKG</span>
              <span
                className="w-[5px] h-[5px] rounded-full ml-[2px] mb-[13px] transition-transform group-hover:scale-125"
                style={{ background: '#6E85E8' }}
              />
              <span className="ml-3 text-[10px] font-semibold tracking-[0.14em] uppercase leading-none hidden sm:block" style={{ color: '#97A0BC' }}>
                Building Contracting
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setPolicyOpen(true)}
                    onMouseLeave={() => setPolicyOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors"
                      style={{ color: isPolicyActive ? '#3D4A73' : '#7C86A8' }}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${policyOpen ? 'rotate-180' : ''}`} style={{ color: '#6E85E8' }} />
                    </button>

                    <AnimatePresence>
                      {policyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.14 }}
                          className="absolute top-full left-0 mt-1 rounded-2xl overflow-hidden"
                          style={{
                            width: 256,
                            background: 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid #E6EBF5',
                            boxShadow: '0 12px 40px rgba(110,133,232,0.14)',
                          }}
                        >
                          <div className="px-4 py-2.5" style={{ borderBottom: '1px solid #E6EBF5' }}>
                            <p className="text-[10px] font-mono font-semibold tracking-widest uppercase" style={{ color: '#6E85E8' }}>Policy Documents</p>
                          </div>
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="flex items-center gap-3 px-4 py-2.5 text-[13px] transition-colors"
                              style={{
                                color: isActive(child.path) ? '#3D4A73' : '#7C86A8',
                                background: isActive(child.path) ? '#EAF0FF' : 'transparent',
                                fontWeight: isActive(child.path) ? 600 : 400,
                              }}
                              onMouseEnter={(e) => { if (!isActive(child.path)) { e.currentTarget.style.background = '#F2F6FF'; e.currentTarget.style.color = '#5F6D9A'; } }}
                              onMouseLeave={(e) => { if (!isActive(child.path)) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#7C86A8'; } }}
                            >
                              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#6E85E8' }} />
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
                    className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors"
                    style={{ color: isActive(link.path) ? '#3D4A73' : '#7C86A8' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#3D4A73'; e.currentTarget.style.background = '#F2F6FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = isActive(link.path) ? '#3D4A73' : '#7C86A8'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-px rounded-full"
                        style={{ background: '#6E85E8' }}
                      />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[12.5px] font-semibold rounded-xl transition-all hover:opacity-88"
                style={{
                  background: 'linear-gradient(135deg, #6E85E8 0%, #8FA2F2 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(110,133,232,0.25)',
                }}
              >
                Request Quotation
              </Link>

              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                style={{ border: `1px solid ${P.border}`, color: '#5F6D9A', background: '#F7F9FF' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(61,74,115,0.25)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.26, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full flex flex-col lg:hidden"
              style={{
                background: 'rgba(247,249,255,0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderLeft: `1px solid ${P.border}`,
                boxShadow: '-8px 0 40px rgba(110,133,232,0.12)',
              }}
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${P.border}` }}>
                <div className="flex items-center gap-0">
                  <span className="text-[22px] font-extrabold tracking-tight" style={{ color: '#3D4A73' }}>OKG</span>
                  <span className="w-1.5 h-1.5 rounded-full ml-0.5 mb-[12px]" style={{ background: '#6E85E8' }} />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ color: '#97A0BC' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-0.5">
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.label}>
                        <button
                          onClick={() => setMobilePolicyOpen(!mobilePolicyOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                          style={{
                            color: isPolicyActive ? '#3D4A73' : '#7C86A8',
                            background: isPolicyActive ? '#EAF0FF' : 'transparent',
                          }}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePolicyOpen ? 'rotate-180' : ''}`} style={{ color: '#6E85E8' }} />
                        </button>
                        <AnimatePresence>
                          {mobilePolicyOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pt-1 space-y-0.5 pb-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-colors"
                                    style={{
                                      color: isActive(child.path) ? '#3D4A73' : '#7C86A8',
                                      background: isActive(child.path) ? '#EAF0FF' : 'transparent',
                                      fontWeight: isActive(child.path) ? 600 : 400,
                                    }}
                                  >
                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#6E85E8' }} />
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
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                        style={{
                          color: isActive(link.path) ? '#3D4A73' : '#7C86A8',
                          background: isActive(link.path) ? '#EAF0FF' : 'transparent',
                          fontWeight: isActive(link.path) ? 600 : 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-4 py-4 space-y-3" style={{ borderTop: `1px solid ${P.border}` }}>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-3 text-sm font-semibold rounded-xl transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, #6E85E8 0%, #8FA2F2 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 16px rgba(110,133,232,0.22)',
                  }}
                >
                  Request a Quotation
                </Link>
                <div className="flex items-center justify-center gap-1.5 text-xs" style={{ color: '#97A0BC' }}>
                  <Phone className="w-3 h-3" style={{ color: '#6E85E8' }} />
                  <span>+971 54 217 1502</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}