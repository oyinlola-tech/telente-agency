const brand = {
  name: 'Telente Technologies',
  color: '#ce7d63',
  text: '#0f0f0f',
};

function wrapEmail({ title, subtitle, content, footer }) {
  return `
  <div style="background:#f9f9f9;padding:24px;font-family:Arial,Helvetica,sans-serif;color:${brand.text};">
    <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:16px;overflow:hidden;">
      <div style="background:${brand.color};padding:20px 24px;">
        <div style="font-size:16px;letter-spacing:0.18em;text-transform:uppercase;color:${brand.text};font-weight:700;">${brand.name}</div>
        <div style="margin-top:6px;font-size:20px;color:${brand.text};font-weight:700;">${title}</div>
        ${subtitle ? `<div style="margin-top:6px;font-size:14px;color:${brand.text};opacity:0.9;">${subtitle}</div>` : ''}
      </div>
      <div style="padding:24px;">
        ${content}
      </div>
      <div style="padding:16px 24px;border-top:1px solid #e5e5e5;font-size:12px;color:#666666;">
        ${footer || 'This email was sent from the Telente admin system.'}
      </div>
    </div>
  </div>
  `;
}

function renderOtpEmail({ code, ttlMinutes }) {
  const content = `
    <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;">
      Use the code below to complete your admin login. This code expires in ${ttlMinutes} minutes.
    </p>
    <div style="display:inline-block;background:#0f0f0f;color:${brand.color};padding:14px 18px;border-radius:12px;font-size:22px;letter-spacing:0.2em;font-weight:700;">
      ${code}
    </div>
    <p style="margin:16px 0 0 0;font-size:13px;color:#666666;">
      If you did not request this code, you can safely ignore this email.
    </p>
  `;

  return wrapEmail({
    title: 'Admin Login Code',
    subtitle: 'Secure access to the Telente admin portal',
    content,
  });
}

function renderContactEmail({ name, email, phone, subject, message }) {
  const safePhone = phone || '-';
  const safeSubject = subject || 'New contact submission';
  const content = `
    <p style="margin:0 0 12px 0;font-size:15px;line-height:1.6;">
      You received a new contact submission.
    </p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#666666;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#666666;">Email</td><td style="padding:6px 0;font-weight:600;">${email}</td></tr>
      <tr><td style="padding:6px 0;color:#666666;">Phone</td><td style="padding:6px 0;font-weight:600;">${safePhone}</td></tr>
      <tr><td style="padding:6px 0;color:#666666;">Subject</td><td style="padding:6px 0;font-weight:600;">${safeSubject}</td></tr>
    </table>
    <div style="margin-top:16px;padding:16px;border:1px solid #e5e5e5;border-radius:12px;background:#faf7f5;">
      <div style="font-size:12px;color:#666666;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:8px;">Message</div>
      <div style="white-space:pre-line;font-size:14px;line-height:1.6;">${message}</div>
    </div>
  `;

  return wrapEmail({
    title: 'New Contact Submission',
    subtitle: 'Telente website inquiry',
    content,
  });
}

module.exports = {
  renderOtpEmail,
  renderContactEmail,
};
