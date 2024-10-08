import { jwt } from "twilio";
const { AccessToken } = jwt;
const { VoiceGrant } = AccessToken;

export async function GET() {
  // Used specifically for creating Voice tokens
  const outgoingApplicationSid = "AP8b776f778386a697952f13cd5018a3fd";
  const identity = "user";

  // Create a "grant" which enables a client to use Voice as a given user
  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid,
    incomingAllow: true, // Optional: add to allow incoming calls
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    "AC83440234384c78fcd40292a5eaa6ddb4",
    "b724359e50497e2a30a860736d8702a4",
    "zYMrr1nCNQpx34xuNGW2yLkoMc6oUtQI",
    { identity }
  );
  //zYMrr1nCNQpx34xuNGW2yLkoMc6oUtQI
  //SK73b2d026ce76066739085edff8db53ad

  // Add the voice grant to the token
  token.addGrant(voiceGrant);

  // Serialize the token to a JWT string
  return Response.json({ token: token.toJwt() });
}
