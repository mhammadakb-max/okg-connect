import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const ADMIN_EMAIL = 'omerkhalfangc@gmail.com';

function buildContactEmail(data) {
  return {
    subject: 'New OKG Website Enquiry',
    body: `A new contact enquiry has been submitted on the OKG website.\n\nName: ${data.name || 'Not provided'}\nEmail: ${data.email || 'Not provided'}\nPhone: ${data.phone || 'Not provided'}\nStatus: ${data.status || 'new'}\n\nMessage:\n${data.message || 'Not provided'}`,
  };
}

function buildSubcontractorEmail(data) {
  return {
    subject: 'New OKG Subcontractor Registration',
    body: `A new subcontractor registration has been submitted on the OKG website.\n\nCompany: ${data.company_name || 'Not provided'}\nContact Person: ${data.contact_person || 'Not provided'}\nEmail: ${data.email || 'Not provided'}\nPhone: ${data.phone || 'Not provided'}\nOffice Location: ${data.office_location || 'Not provided'}\nServices: ${(data.services || []).join(', ') || 'Not provided'}\nStatus: ${data.status || 'submitted'}\n\nPrevious Projects:\n${data.previous_projects || 'Not provided'}\n\nNotes:\n${data.notes || 'None'}`,
  };
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();
    const entityName = payload?.event?.entity_name;
    const data = payload?.data;

    if (!data || !['ContactSubmission', 'SubcontractorProfile'].includes(entityName)) {
      return Response.json({ success: true, skipped: true });
    }

    const email = entityName === 'ContactSubmission'
      ? buildContactEmail(data)
      : buildSubcontractorEmail(data);

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: ADMIN_EMAIL,
      subject: email.subject,
      body: email.body,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});