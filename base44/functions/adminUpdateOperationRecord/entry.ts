import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const allowedEntities = {
  crm: 'CRMRecord',
  projects: 'ProjectRecord',
  contractors: 'MainContractor',
  documents: 'AdminDocument',
  tasks: 'OperationTask',
  subcontractorPayments: 'SubcontractorPayment',
  shifts: 'WorkforceShift',
  attendance: 'SiteAttendance',
  incidents: 'SiteIncident',
  compliance: 'ComplianceCheck',
  tenders: 'TenderPipeline',
};

const canAccessAdmin = (user) => user?.role === 'admin' || user?.email === 'omerkhalfangc@gmail.com';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!canAccessAdmin(user)) {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { module, id, data } = await req.json();
    const entityName = allowedEntities[module];

    if (!entityName || !id) {
      return Response.json({ error: 'Invalid update request' }, { status: 400 });
    }

    const record = await base44.asServiceRole.entities[entityName].update(id, data);
    return Response.json({ record });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});