import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const allowedAdminEmail = 'omerkhalfangc@gmail.com';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    const { password } = await req.json();
    const expectedPassword = Deno.env.get('ADMIN_PORTAL_PASSWORD');

    if (user?.email !== allowedAdminEmail && user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: This email is not allowed for admin access' }, { status: 403 });
    }

    if (!expectedPassword) {
      return Response.json({ error: 'Admin portal password is not configured' }, { status: 500 });
    }

    if (password !== expectedPassword) {
      return Response.json({ success: false, error: 'Incorrect password' }, { status: 401 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});