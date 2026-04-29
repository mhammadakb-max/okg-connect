import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const recipientEmail = 'info@okgcontracting.com';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      projectLocation,
      preferredStartDate,
      budgetRange,
      message,
      formType,
    } = body;

    if (!name || !email || !phone || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submissionType = formType === 'quotation' ? 'Quotation Request' : 'Contact Enquiry';
    const formattedMessage = [
      `Submission Type: ${submissionType}`,
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      `Phone: ${phone}`,
      service ? `Required Service: ${service}` : null,
      projectLocation ? `Project Location: ${projectLocation}` : null,
      preferredStartDate ? `Preferred Start Date: ${preferredStartDate}` : null,
      budgetRange ? `Estimated Budget / BOQ Value: ${budgetRange}` : null,
      '',
      'Project Details:',
      message,
    ].filter(Boolean).join('\n');

    await base44.asServiceRole.entities.ContactSubmission.create({
      name,
      email,
      phone: phone || '',
      message: formattedMessage,
      status: 'new',
    });

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: recipientEmail,
      subject: `New OKG ${submissionType} from ${name}`,
      body: formattedMessage,
      from_name: 'OKG Website',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});