import React from 'react';
import BuildOpsShell from '@/components/saas/BuildOpsShell';
import { QrCode, Camera, Clock3, ClipboardCheck, AlertTriangle } from 'lucide-react';

const actions = [
  { Icon: QrCode, label: 'Scan QR Worker Pass', note: 'Validate identity, induction and compliance' },
  { Icon: Clock3, label: 'Check In / Out', note: 'Supervisor attendance action' },
  { Icon: Camera, label: 'Upload Site Photo', note: 'Before / during / after evidence' },
  { Icon: ClipboardCheck, label: 'Submit Daily Log', note: 'Quantity, labour hours and notes' },
  { Icon: AlertTriangle, label: 'Report Issue / Snag', note: 'Photo, location and assigned company' },
];

export default function BuildOpsMobileOps() {
  return (
    <BuildOpsShell title="Supervisor Mobile Operations" intro="Mobile-first field interface concept for attendance, QR passes, photos, work logs, snags and site reports.">
      <div className="max-w-md mx-auto rounded-[2rem] border-8 border-slate-900 bg-white shadow-2xl overflow-hidden">
        <div className="bg-slate-950 text-white p-5">
          <p className="text-xs text-amber-300 uppercase tracking-widest font-bold">Site Supervisor</p>
          <h2 className="text-xl font-extrabold">Today’s Site Actions</h2>
        </div>
        <div className="p-4 space-y-3">
          {actions.map(({ Icon, label, note }) => (
            <button key={label} className="w-full flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left hover:bg-slate-50">
              <span className="h-11 w-11 rounded-xl bg-amber-100 text-slate-950 flex items-center justify-center"><Icon className="w-5 h-5" /></span>
              <span><span className="block font-extrabold text-slate-950">{label}</span><span className="text-sm text-slate-500">{note}</span></span>
            </button>
          ))}
        </div>
      </div>
    </BuildOpsShell>
  );
}