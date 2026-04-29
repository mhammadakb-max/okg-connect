import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { id, status, internal_notes } = await req.json();
    if (!id || !['new', 'reviewed', 'archived'].includes(status)) {
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