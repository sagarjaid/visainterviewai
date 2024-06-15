import { createAudioStreamFromText } from '@/components/helper/elevenLabs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    console.log(text, 'text');

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    try {
      const audioBuffer = await createAudioStreamFromText(text);
      res.setHeader('Content-Type', 'audio/mpeg');
      res.send(audioBuffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate audio' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
