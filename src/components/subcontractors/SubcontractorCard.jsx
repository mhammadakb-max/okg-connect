import React from 'react';
import { Mail, Phone, MapPin, BriefcaseBusiness } from 'lucide-react';

const statusStyles = {
  submitted: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  under_review: 'bg-blue-50 text-blue-700 border-blue-200',
  approved: 'bg-green-50 text-green-700 border-green-200',
  rejected: 'bg-red-50 text-red-700 border-red-200',
};

export default function SubcontractorCard({ profile }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#001078' }}>{profile.company_name}</h3>
          <p className="text-sm text-text-secondary">{profile.contact_person} {profile.designation ? `• ${profile.designation}` : ''}</p>
        </div>
        <span className={`inline-flex w-fit px-3 py-1 rounded-full border text-xs font-bold uppercase ${statusStyles[profile.status] || statusStyles.submitted}`}>
          {(profile.status || 'submitted').replace('_', ' ')}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-3 text-sm text-text-secondary mb-5">
        <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {profile.email}</p>
        <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {profile.phone}</p>
        <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {profile.office_location || 'Location not provided'}</p>
        <p className="flex items-center gap-2"><BriefcaseBusiness className="w-4 h-4" /> License: {profile.trade_license_number || 'Not provided'}</p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#001078' }}>Services</p>
          <div className="flex flex-wrap gap-2">
            {(profile.services || []).map((service) => <span key={service} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-text-secondary">{service}</span>)}
          </div>
        </div>
        <p className="text-sm text-text-secondary"><strong>Manpower:</strong> {profile.manpower_count || 'Not provided'} | <strong>Supervisors:</strong> {profile.supervisor_count || 'Not provided'}</p>
        {profile.previous_projects && <p className="text-sm text-text-secondary"><strong>Experience:</strong> {profile.previous_projects}</p>}
      </div>
    </div>
  );
}