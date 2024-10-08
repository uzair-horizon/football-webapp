import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Create a Twilio VoiceResponse instance
export async function POST() {
    const twiml = new twilio.twiml.VoiceResponse();

    // Create a conference and set the wait URL
    twiml.dial().conference('MyConferenceRoom', {
        waitUrl: 'https://your-twilio-account.twilio.com/v1/Accounts/YOUR_ACCOUNT_SID/Recordings/XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.mp3'
    });

    // Return the TwiML response
    return NextResponse.json(twiml.toString(), { status: 200, headers: { 'Content-Type': 'text/xml' } });
}