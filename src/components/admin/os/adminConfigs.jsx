const money = (value) => new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(value || 0);
const countStatus = (records, key, value) => records.filter((record) => record[key] === value).length;
const sumField = (records, key) => records.reduce((sum, record) => sum + Number(record[key] || 0), 0);

export const adminConfigs = {
  clients: {
    moduleKey: 'clients', title: 'Client CRM', tableTitle: 'Client Database', formTitle: 'Add Client', statusKey: 'status',
    intro: 'Manage client profiles, follow-ups, communication notes and project history.',
    statuses: [{ value: 'lead', label: 'Lead' }, { value: 'active_client', label: 'Active Client' }, { value: 'past_client', label: 'Past Client' }, { value: 'lost_lead', label: 'Lost Lead' }],
    metrics: [
      { label: 'Total Clients', get: (r) => ({ label: 'Total Clients', value: r.length }) },
      { label: 'Active Clients', get: (r) => ({ label: 'Active Clients', value: countStatus(r, 'status', 'active_client'), tone: 'green' }) },
      { label: 'Leads', get: (r) => ({ label: 'Leads', value: countStatus(r, 'status', 'lead'), tone: 'gold' }) },
    ],
    fields: [
      { name: 'client_name', required: true }, { name: 'company_name' }, { name: 'phone' }, { name: 'email', type: 'email' }, { name: 'location' },
      { name: 'status', type: 'select', options: ['lead', 'active_client', 'past_client', 'lost_lead'] }, { name: 'follow_up_date', type: 'date' },
      { name: 'project_history', type: 'textarea' }, { name: 'communication_history', type: 'textarea' }, { name: 'notes', type: 'textarea' },
    ],
    columns: [{ key: 'client_name', label: 'Client' }, { key: 'company_name', label: 'Company' }, { key: 'phone', label: 'Phone' }, { key: 'email', label: 'Email' }, { key: 'status', label: 'Status' }, { key: 'follow_up_date', label: 'Follow-up' }],
  },
  projects: {
    moduleKey: 'projects', title: 'Project Management', tableTitle: 'Construction Projects', formTitle: 'Add Project', statusKey: 'status',
    intro: 'Track construction jobs, project value, supervisors, documents and completion progress.',
    statuses: [{ value: 'planning', label: 'Planning' }, { value: 'mobilised', label: 'Mobilised' }, { value: 'in_progress', label: 'In Progress' }, { value: 'on_hold', label: 'On Hold' }, { value: 'completed', label: 'Completed' }, { value: 'cancelled', label: 'Cancelled' }],
    metrics: [
      { label: 'Projects', get: (r) => ({ label: 'Projects', value: r.length }) },
      { label: 'Active', get: (r) => ({ label: 'Active', value: r.filter((p) => ['mobilised', 'in_progress'].includes(p.status)).length, tone: 'green' }) },
      { label: 'Total Value', get: (r) => ({ label: 'Total Value', value: money(sumField(r, 'contract_value')), tone: 'gold' }) },
    ],
    fields: [
      { name: 'project_name', required: true }, { name: 'client_name' }, { name: 'emirate' }, { name: 'location' }, { name: 'project_type' },
      { name: 'scope', type: 'textarea' }, { name: 'summary', type: 'textarea' },
      { name: 'start_date', type: 'date' }, { name: 'target_completion', type: 'date' }, { name: 'status', type: 'select', options: ['planning', 'mobilised', 'in_progress', 'on_hold', 'completed', 'cancelled', 'coming_soon'] },
      { name: 'contract_value', type: 'number' }, { name: 'workforce_deployed', type: 'number' }, { name: 'project_manager', label: 'Assigned Supervisor' }, { name: 'progress', type: 'number' },
      { name: 'cover_image_url', type: 'file' }, { name: 'site_photos_url', type: 'file' }, { name: 'is_public', type: 'checkbox', label: 'Publish on public website' }, { name: 'notes', type: 'textarea' },
    ],
    columns: [{ key: 'project_name', label: 'Project' }, { key: 'client_name', label: 'Client' }, { key: 'emirate', label: 'Emirate' }, { key: 'location', label: 'Location' }, { key: 'status', label: 'Status' }, { key: 'is_public', label: 'Public', render: (r) => r.is_public ? 'Yes' : 'No' }, { key: 'progress', label: 'Progress', render: (r) => `${r.progress || 0}%` }],
  },
  quotations: {
    moduleKey: 'quotations', title: 'Quotation Builder', tableTitle: 'Quotation Register', formTitle: 'Create Quotation', statusKey: 'status',
    intro: 'Create professional construction quotations with line items, VAT, payment terms and approval status.',
    statuses: [{ value: 'draft', label: 'Draft' }, { value: 'sent', label: 'Sent' }, { value: 'approved', label: 'Approved' }, { value: 'rejected', label: 'Rejected' }, { value: 'revised', label: 'Revised' }],
    metrics: [
      { label: 'Quotations', get: (r) => ({ label: 'Quotations', value: r.length }) },
      { label: 'Submitted', get: (r) => ({ label: 'Submitted', value: countStatus(r, 'status', 'sent'), tone: 'gold' }) },
      { label: 'Approved Value', get: (r) => ({ label: 'Approved Value', value: money(sumField(r.filter((q) => q.status === 'approved'), 'total_amount')), tone: 'green' }) },
    ],
    fields: [
      { name: 'quotation_number' }, { name: 'client_name', required: true }, { name: 'client_email', type: 'email' }, { name: 'project_name', required: true },
      { name: 'service_type', type: 'select', options: ['blockwork', 'plastering', 'concrete_works', 'shuttering', 'steel_fixing', 'painting', 'fit_out_works', 'renovation_works', 'manpower_supply', 'subcontracting_works', 'general_civil_works'] },
      { name: 'unit_type', type: 'select', options: ['sqm', 'running_meter', 'lump_sum', 'day_rate', 'manpower_rate'] }, { name: 'quantity', type: 'number' }, { name: 'unit_price', type: 'number' }, { name: 'vat_amount', type: 'number' }, { name: 'total_amount', type: 'number' },
      { name: 'status', type: 'select', options: ['draft', 'sent', 'approved', 'rejected', 'revised'] }, { name: 'scope_of_work', type: 'textarea' }, { name: 'line_items', type: 'textarea' }, { name: 'terms_conditions', type: 'textarea' }, { name: 'payment_terms', type: 'textarea' },
    ],
    columns: [{ key: 'quotation_number', label: 'Quote No.' }, { key: 'client_name', label: 'Client' }, { key: 'project_name', label: 'Project' }, { key: 'service_type', label: 'Service' }, { key: 'status', label: 'Status' }, { key: 'total_amount', label: 'Total', render: (r) => money(r.total_amount) }],
  },
  invoices: {
    moduleKey: 'invoices', title: 'Invoice Management', tableTitle: 'Invoice Register', formTitle: 'Create Invoice', statusKey: 'payment_status',
    intro: 'Manage invoice totals, VAT, due dates, payment status and payment proof uploads.',
    statuses: [{ value: 'unpaid', label: 'Unpaid' }, { value: 'part_paid', label: 'Part Paid' }, { value: 'paid', label: 'Paid' }, { value: 'overdue', label: 'Overdue' }],
    metrics: [
      { label: 'Invoices', get: (r) => ({ label: 'Invoices', value: r.length }) },
      { label: 'Pending', get: (r) => ({ label: 'Pending', value: r.filter((i) => ['unpaid', 'part_paid', 'overdue'].includes(i.payment_status)).length, tone: 'red' }) },
      { label: 'Total Invoiced', get: (r) => ({ label: 'Total Invoiced', value: money(sumField(r, 'total_amount')), tone: 'gold' }) },
    ],
    fields: [
      { name: 'invoice_number', required: true }, { name: 'client_name', required: true }, { name: 'project_name' }, { name: 'invoice_date', type: 'date' }, { name: 'due_date', type: 'date' },
      { name: 'vat_amount', type: 'number' }, { name: 'total_amount', type: 'number' }, { name: 'payment_status', type: 'select', options: ['unpaid', 'part_paid', 'paid', 'overdue'] }, { name: 'payment_proof_url', type: 'file' }, { name: 'line_items', type: 'textarea' }, { name: 'payment_notes', type: 'textarea' },
    ],
    columns: [{ key: 'invoice_number', label: 'Invoice No.' }, { key: 'client_name', label: 'Client' }, { key: 'project_name', label: 'Project' }, { key: 'due_date', label: 'Due Date' }, { key: 'payment_status', label: 'Status' }, { key: 'total_amount', label: 'Total', render: (r) => money(r.total_amount) }],
  },
};