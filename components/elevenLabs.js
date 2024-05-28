// lib/elevenLabs.ts
import { ElevenLabsClient } from 'elevenlabs';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

if (!ELEVENLABS_API_KEY) {
  throw new Error('Missing ELEVENLABS_API_KEY in environment variables');
}

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
});

export const createAudioStreamFromText = async (text) => {
  const audioStream = await client.generate({
    voice: 'Adam',
    model_id: 'eleven_turbo_v2',
    text,
  });

  const chunks = [];
  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);
  return content;
};
