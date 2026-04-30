import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

function summarizePayments(records) {
  const income = records.filter((r) => r.record_type === 'income').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const expenses = records.filter((r) => r.record_type === 'expense').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const pending = records.filter((r) => r.status === 'pending').reduce((sum, r) => sum + Number(r.amount || 0), 0);
  return { count: records.length, income, expenses, net: income - expenses, pending };
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (user?.role !== 'admin' && user?.email !== 'omerkhalfangc@gmail.com') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { type = 'business_summary', message = '' } = await req.json();
    const payments = await base44.asServiceRole.entities.PaymentRecord.list('-payment_date', 200);
    const submissions = await base44.asServiceRole.entities.ContactSubmission.list('-created_date', 50);
    const subcontractors = await base44.asServiceRole.entities.SubcontractorProfile.list('-created_date', 50);

    const prompt = `You are an admin assistant for OKG Building Contracting in Dubai. Keep answers practical, professional and concise.\n\nRequest type: ${type}\nAdmin instruction: ${message || 'Provide the most useful admin guidance.'}\n\nFinance summary: ${JSON.stringify(summarizePayments(payments))}\nRecent payment records: ${JSON.stringify(payments.slice(0, 30))}\nRecent enquiries: ${JSON.stringify(submissions.slice(0, 15))}\nRecent subcontractor profiles: ${JSON.stringify(subcontractors.slice(0, 15))}\n\nIf drafting an enquiry reply, write a ready-to-send email response. If giving finance insights, highlight risks, pending amounts and next actions. If business summary, provide priorities for management.`;

    const result = await base44.asServiceRole.integrations.Core.InvokeLLM({ prompt });
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});