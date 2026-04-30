import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const canAccessAdmin = (user) => user?.role === 'admin' || user?.email === 'omerkhalfangc@gmail.com';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!canAccessAdmin(user)) {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const [crm, projects, contractors, documents, tasks, subcontractorPayments, subcontractors, shifts, attendance, incidents, compliance, tenders] = await Promise.all([
      base44.asServiceRole.entities.CRMRecord.list('-updated_date', 200),
      base44.asServiceRole.entities.ProjectRecord.list('-updated_date', 200),
      base44.asServiceRole.entities.MainContractor.list('-updated_date', 200),
      base44.asServiceRole.entities.AdminDocument.list('-updated_date', 200),
      base44.asServiceRole.entities.OperationTask.list('-updated_date', 200),
      base44.asServiceRole.entities.SubcontractorPayment.list('-updated_date', 200),
      base44.asServiceRole.entities.SubcontractorProfile.list('-created_date', 200),
      base44.asServiceRole.entities.WorkforceShift.list('-updated_date', 200),
      base44.asServiceRole.entities.SiteAttendance.list('-updated_date', 200),
      base44.asServiceRole.entities.SiteIncident.list('-updated_date', 200),
      base44.asServiceRole.entities.ComplianceCheck.list('-updated_date', 200),
      base44.asServiceRole.entities.TenderPipeline.list('-updated_date', 200),
    ]);

    return Response.json({ crm, projects, contractors, documents, tasks, subcontractorPayments, subcontractors, shifts, attendance, incidents, compliance, tenders });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});