export async function POST() {
  const twiml = `
    <Response>
      <Say>Hello! Your call is being connected.</Say>
      <Dial>+1234567890</Dial>
    </Response>
  `;

  // Set the content type to XML for TwiML response
  const headers = new Headers({
    'Content-Type': 'text/xml',
  });

  // Return the TwiML response with correct headers
  return new Response(twiml, {
    status: 200,
    headers: headers,
  });
}