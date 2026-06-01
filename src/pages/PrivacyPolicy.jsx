import React from 'react';
import SEO from '@/components/shared/SEO';
import PageHero from '@/components/shared/PageHero';

export default function PrivacyPolicy() {
  return <><SEO title="Privacy Policy | OKG Building Contracting L.L.C" description="Privacy policy for OKG Building Contracting L.L.C website enquiries and quotation submissions." path="/privacy-policy" /><PageHero title="Privacy Policy" intro="OKG Building Contracting L.L.C uses submitted information only to respond to enquiries, quotation requests and business communication." eyebrow="Policy" breadcrumb="Privacy Policy" /><section className="bg-white py-16"><div className="mx-auto max-w-4xl px-4 text-muted-foreground"><p>Information submitted through this website is used to review enquiries, respond to quotation requests and manage communication with clients, subcontractors and applicants. Private portal data is restricted to authorised OKG users.</p></div></section></>;
}