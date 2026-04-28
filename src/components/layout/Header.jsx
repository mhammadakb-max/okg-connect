import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
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
  { label: 'Social Commitment', path: '/social-commitment' }]

},
{ label: 'Projects', path: '/projects' },
{ label: 'Careers', path: '/careers' },
{ label: 'Contact', path: '/contact' }];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [mobilePolicyOpen, setMobilePolicyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePolicyOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;
  const isPolicyActive = navLinks.find((l) => l.children)?.children.some((c) => c.path === location.pathname);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <p className="text-xs text-white/50 font-mono tracking-wide">
              UAE Building Contracting Company — Civil · Masonry · Plastering · Finishing
            </p>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Phone className="w-3 h-3 text-gold" />
              <span>+971 54 217 1502</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ?
        'bg-white/98 backdrop-blur-sm shadow-lg shadow-navy/8 border-b border-gray-100' :
        'bg-white border-b border-gray-100'}`
        }>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-transparent flex items-center justify-between h-16 md:h-[70px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-0 shrink-0 group">
              <span className="text-[26px] font-black tracking-[-0.02em] text-navy leading-none">OKG</span>
              <span
                className="w-[7px] h-[7px] rounded-full bg-gold ml-0.5 mb-[14px] group-hover:scale-125 transition-transform"
                style={{ background: '#F8B858' }} />
              
              <span className="ml-2 text-[10px] font-semibold text-steel tracking-[0.15em] uppercase leading-none hidden sm:block">
                Building Contracting
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
              link.children ?
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setPolicyOpen(true)}
                onMouseLeave={() => setPolicyOpen(false)}>
                
                    <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md ${
                  isPolicyActive ?
                  'text-navy' :
                  'text-charcoal hover:text-navy'}`
                  }>
                  
                      {link.label}
                      <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${policyOpen ? 'rotate-180' : ''}`} />
                  
                    </button>

                    <AnimatePresence>
                      {policyOpen &&
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-68 bg-white rounded-2xl shadow-2xl shadow-navy/15 border border-gray-100 p-2 mt-2"
                    style={{ width: 260 }}>
                    
                          <div className="px-3 py-2 mb-1 border-b border-gray-50">
                            <p className="text-[10px] font-mono font-semibold text-steel tracking-widest uppercase">Policy Documents</p>
                          </div>
                          {link.children.map((child) =>
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`flex items-center gap-3 px-3 py-2.5 text-[13px] rounded-xl transition-colors group ${
                      isActive(child.path) ?
                      'bg-navy text-white font-semibold' :
                      'text-charcoal hover:bg-offwhite hover:text-navy'}`
                      }>
                      
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive(child.path) ? 'bg-gold' : 'bg-gold/60 group-hover:bg-gold'}`} />
                              {child.label}
                            </Link>
                    )}
                        </motion.div>
                  }
                    </AnimatePresence>
                  </div> :

              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                isActive(link.path) ?
                'text-navy font-semibold' :
                'text-charcoal hover:text-navy'}`
                }>
                
                    {link.label}
                    {isActive(link.path) &&
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: '#F8B858' }} />

                }
                  </Link>

              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-lg transition-all"
                style={{ background: '#001078', color: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#000d5a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#001078'}>
                
                Request Quotation
              </Link>

              {/* Mobile burger */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-charcoal hover:border-navy/30 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu">
                
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ?
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" />
                    </motion.span> :

                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen &&
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)} />
          
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl lg:hidden flex flex-col">
            
              {/* Mobile header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-0">
                  <span className="text-[22px] font-black tracking-tight text-navy">OKG</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold ml-0.5 mb-3" style={{ background: '#F8B858' }} />
                </div>
                <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-steel hover:text-navy hover:bg-offwhite transition-colors">
                
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-0.5">
                  {navLinks.map((link) =>
                link.children ?
                <div key={link.label}>
                        <button
                    onClick={() => setMobilePolicyOpen(!mobilePolicyOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isPolicyActive ? 'bg-navy/5 text-navy' : 'text-charcoal hover:bg-offwhite'}`
                    }>
                    
                          <span>{link.label}</span>
                          <ChevronDown
                      className={`w-4 h-4 text-steel transition-transform duration-200 ${mobilePolicyOpen ? 'rotate-180' : ''}`} />
                    
                        </button>
                        <AnimatePresence>
                          {mobilePolicyOpen &&
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden">
                      
                              <div className="pl-3 pt-1 space-y-0.5 pb-2">
                                {link.children.map((child) =>
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-colors ${
                          isActive(child.path) ?
                          'bg-navy text-white font-semibold' :
                          'text-steel hover:bg-offwhite hover:text-navy'}`
                          }>
                          
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive(child.path) ? 'bg-gold' : 'bg-gold/50'}`} />
                                    {child.label}
                                  </Link>
                        )}
                              </div>
                            </motion.div>
                    }
                        </AnimatePresence>
                      </div> :

                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  isActive(link.path) ?
                  'bg-navy text-white font-semibold' :
                  'text-charcoal hover:bg-offwhite hover:text-navy'}`
                  }>
                  
                        {link.label}
                      </Link>

                )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-4 py-4 border-t border-gray-100 space-y-3">
                <Link
                to="/contact"
                className="flex items-center justify-center w-full py-3 text-sm font-semibold rounded-xl text-white"
                style={{ background: '#001078' }}>
                
                  Request a Quotation
                </Link>
                <div className="flex items-center justify-center gap-1.5 text-xs text-steel">
                  <Phone className="w-3 h-3 text-gold" />
                  <span>+971 54 217 1502</span>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}