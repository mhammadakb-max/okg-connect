Deno.serve(async (req) => {
  try {
    const { password } = await req.json();
    const expectedPassword = Deno.env.get('ADMIN_PORTAL_PASSWORD');

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