import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

export default async function handler(req, res) {
  if (!req.body.tag) {
    throw new Error('Missing required field: text');
  }

  let prompt = req.body.tag;

  const userPrompt = `text ${prompt}`;

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: userPrompt }],

      messages: [
        {
          role: 'system',
          content:
            'You are a us visa officer and you just asked me this question "Why do you want the US student visa today?" and following is my answer. note: you should respond in 2-3 words only',
        },
        { role: 'user', content: userPrompt },
      ],

      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 850,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      // response_format: { type: 'json_object' },
    });

    console.log(response.choices[0].message.content);

    if (
      !response ||
      !response.choices ||
      !response.choices[0].message ||
      !response.choices[0].message.content
    ) {
      throw new Error('Invalid response from OpenAI');
    }

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: error.message });
  }
}
