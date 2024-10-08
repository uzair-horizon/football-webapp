import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = 'AC83440234384c78fcd40292a5eaa6ddb4';
const authToken = 'b724359e50497e2a30a860736d8702a4';
const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
    try {
        const { to } = await request.json(); // Get the recipient's number from the request body
        const fromNumber = '+1 7089348240'; // Your Twilio phone number

        // Create an outbound call
        const call = await client.calls.create({
            to: to,
            from: fromNumber,
            url: 'https://football-webapp-bay.vercel.app/api/voice', // URL for handling the call
        });

        console.log(`Call initiated: ${call.sid}`);
        return NextResponse.json({ message: `Call initiated to ${to}` }, { status: 200 });
    } catch (error) {
        console.error('Error making the call:', error);
        return NextResponse.json({ error: 'Error making the call.' }, { status: 500 });
    }
}