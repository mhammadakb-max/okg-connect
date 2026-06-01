import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    const adminRoles = ['admin', 'Super Admin', 'Finance Admin', 'Operations Manager', 'Project Manager', 'HR Admin'];
    if (!adminRoles.includes(user?.role) && user?.email !== 'omerkhalfangc@gmail.com') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { id, status, internal_notes } = await req.json();
    const allowedStatuses = ['new', 'under_review', 'site_visit_required', 'quotation_in_preparation', 'quoted', 'negotiating', 'awarded', 'lost', 'archived', 'contacted', 'quotation_sent', 'won', 'reviewed'];
    if (!id || !allowedStatuses.includes(status)) {
      return Response.json({ error: 'Invalid submission update' }, { status: 400 });
    }

    const updated = await base44.asServiceRole.entities.ContactSubmission.update(id, {
      status,
      internal_notes: internal_notes || '',
    });

    return Response.json({ submission: updated });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});