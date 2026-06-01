import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const recipientEmail = 'omerkhalfangc@gmail.com';

const clean = (value, max = 3000) => String(value || '').replace(/[<>]/g, '').trim().slice(0, max);
const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    if (body.website) {
      return Response.json({ success: true, reference: 'OKG-SPAM-CHECK' });
    }

    const name = clean(body.name, 160);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 80);
    const message = clean(body.message, 5000);
    const formType = body.formType === 'quotation' ? 'quotation' : 'contact';

    if (!name || !validEmail(email) || !phone || !message) {
      return Response.json({ error: 'Missing or invalid required fields' }, { status: 400 });
    }

    const reference = `${formType === 'quotation' ? 'OKG-Q' : 'OKG-C'}-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
    const submissionType = formType === 'quotation' ? 'Quotation Request' : 'Contact Enquiry';

    const details = {
      reference,
      submissionType,
      name,
      company: clean(body.company, 180),
      email,
      phone,
      whatsapp: clean(body.whatsapp, 80),
      projectName: clean(body.projectName, 180),
      projectLocation: clean(body.projectLocation, 240),
      emirate: clean(body.emirate, 80),
      service: clean(body.service, 180),
      expectedStartDate: clean(body.expectedStartDate, 80),
      workersRequired: clean(body.workersRequired, 40),
      estimatedQuantities: clean(body.estimatedQuantities, 240),
      preferredCallbackTime: clean(body.preferredCallbackTime, 120),
      boq: clean(body.boq, 1000),
      drawings: clean(body.drawings, 1000),
      scopeDocument: clean(body.scopeDocument, 1000),
      message,
    };

    const formattedMessage = Object.entries(details)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}: ${value}`)
      .join('\n');

    await base44.asServiceRole.entities.ContactSubmission.create({
      name,
      email,
      phone,
      project_location: details.projectLocation,
      service_required: details.service,
      message: formattedMessage,
      enquiry_reference: reference,
      company_name: details.company,
      whatsapp_number: details.whatsapp,
      project_name: details.projectName,
      emirate: details.emirate,
      expected_start_date: details.expectedStartDate,
      workers_required: Number(details.workersRequired || 0) || undefined,
      estimated_quantities: details.estimatedQuantities,
      form_type: formType,
      boq_url: details.boq,
      drawings_url: details.drawings,
      scope_document_url: details.scopeDocument,
      preferred_callback_time: details.preferredCallbackTime,
      status: 'new',
    });

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: recipientEmail,
      subject: `New OKG ${submissionType} ${reference}`,
      body: formattedMessage,
      from_name: 'OKG Website',
    });

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: email,
      subject: `OKG has received your request ${reference}`,
      body: `Dear ${name},\n\nThank you for contacting OKG Building Contracting L.L.C. We have received your ${submissionType.toLowerCase()}.\n\nReference: ${reference}\n\nOur team will review your information and respond with the next steps.\n\nRegards,\nOKG Building Contracting L.L.C`,
      from_name: 'OKG Building Contracting L.L.C',
    });

    return Response.json({ success: true, reference });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});