import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const data = await req.json();
    const record = await base44.asServiceRole.entities.PaymentRecord.create({
      record_type: data.record_type,
      status: data.status || 'paid',
      amount: Number(data.amount),
      payment_date: data.payment_date,
      description: data.description,
      category: data.category || '',
      project_name: data.project_name || '',
      client_or_vendor: data.client_or_vendor || '',
      payment_method: data.payment_method || '',
      notes: data.notes || '',
    });

    return Response.json({ record });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});