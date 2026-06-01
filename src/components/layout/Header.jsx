import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'Company Profile', path: '/about' },
      { label: 'Our People', path: '/people-focus' },
      { label: 'Social Commitment', path: '/social-commitment' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Civil Works', path: '/services/civil-works' },
      { label: 'Plastering and Gypsum Works', path: '/services/plastering-gypsum' },
      { label: 'Masonry and Blockwork', path: '/services/masonry-blockwork' },
      { label: 'Concrete Works', path: '/services/concrete-works' },
      { label: 'Steel and Shuttering', path: '/services/steel-shuttering' },
      { label: 'Skilled Workforce Deployment', path: '/services/skilled-workforce' },
      { label: 'Site Supervision', path: '/services/site-supervision' },
      { label: 'Documentation Control', path: '/services/documentation-control' },
    ],
  },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Projects', path: '/projects' },
  {
    label: 'QHSE',
    path: '/qhse',
    children: [
      { label: 'Quality Policy', path: '/quality-policy' },
      { label: 'Health and Safety Policy', path: '/health-safety-policy' },
      { label: 'Environmental Policy', path: '/environmental-policy' },
    ],
  },
  {
    label: 'Work With Us',
    children: [
      { label: 'Careers', path: '/careers' },
      { label: 'Become a Subcontractor', path: '/subcontractor-portal' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-black text-white">OKG</span>
            <span className="hidden text-sm font-extrabold leading-tight text-primary sm:block">
              OKG Build
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => link.children ? (
              <div key={link.label} className="group relative">
                <Link to={link.path || link.children[0].path} className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors ${link.children.some((child) => isActive(child.path)) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {link.label}<ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link key={child.path} to={child.path} className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-primary">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.path} to={link.path} className={`px-3 py-2 text-sm font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/request-quotation" className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex">
              Request a Quotation
            </Link>
            <button className="rounded-md p-2 transition-colors hover:bg-secondary lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-border bg-white lg:hidden">
            <div className="space-y-2 px-4 py-4">
              {navLinks.map((link) => link.children ? (
                <div key={link.label}>
                  <button onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.label ? null : link.label)} className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold hover:bg-secondary">
                    {link.label}<ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileOpenDropdown === link.label && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-4">
                        {link.path && <Link to={link.path} onClick={closeMobile} className="block rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary">Overview</Link>}
                        {link.children.map((child) => <Link key={child.path} to={child.path} onClick={closeMobile} className="block rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary">{child.label}</Link>)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.path} to={link.path} onClick={closeMobile} className="block rounded-lg px-4 py-3 text-sm font-bold hover:bg-secondary">{link.label}</Link>
              ))}
              <Link to="/request-quotation" onClick={closeMobile} className="block rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-white">Request a Quotation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}