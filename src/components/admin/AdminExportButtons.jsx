import React from 'react';
import { jsPDF } from 'jspdf';
import { Download, FileSpreadsheet } from 'lucide-react';

const clean = (value) => String(value ?? '').replace(/<[^>]*>/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function AdminExportButtons({ records, fileName = 'okg-finance-records' }) {
  const exportExcel = () => {
    const rows = records.map((r) => [r.payment_date, r.record_type, r.status, r.description, r.category, r.project_name, r.client_or_vendor, r.payment_method, r.amount]);
    const html = `<table><thead><tr>${['Date', 'Type', 'Status', 'Description', 'Category', 'Project', 'Client/Vendor', 'Method', 'Amount'].map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${clean(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xls`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('OKG Finance Report', 14, 18);
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 26);
    let y = 38;
    records.slice(0, 55).forEach((r) => {
      if (y > 280) {
        doc.addPage();
        y = 18;
      }
      doc.text(`${r.payment_date || '-'} | ${r.record_type || '-'} | ${r.status || '-'} | AED ${Number(r.amount || 0).toLocaleString()}`, 14, y);
      y += 6;
      doc.text((r.description || '-').slice(0, 90), 14, y);
      y += 8;
    });
    doc.save(`${fileName}.pdf`);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button onClick={exportExcel} disabled={!records.length} className="inline-flex items-center gap-2 rounded-md bg-white border border-gray-200 px-5 py-3 text-sm font-semibold text-navy hover:bg-gray-50 disabled:opacity-50">
        <FileSpreadsheet className="w-4 h-4" /> Export Excel
      </button>
      <button onClick={exportPdf} disabled={!records.length} className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white disabled:opacity-50" style={{ backgroundColor: '#001078' }}>
        <Download className="w-4 h-4" /> Export PDF
      </button>
    </div>
  );
}