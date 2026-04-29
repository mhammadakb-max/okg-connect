import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="flex">
        <a
          href="tel:+971542171502"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold border-r border-gray-200"
          style={{ color: '#001078' }}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
          style={{ backgroundColor: '#001078' }}
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}