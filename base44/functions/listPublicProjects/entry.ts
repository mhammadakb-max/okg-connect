import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const projects = await base44.asServiceRole.entities.ProjectRecord.filter({ is_public: true }, '-updated_date', 50);
    return Response.json({ projects });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});