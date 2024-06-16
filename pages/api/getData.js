import {
  generateQuestionResponse,
  generateSystemRole,
} from '@/components/helper/prompts';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

export default async function handler(req, res) {
  console.log(req.body, 'req.body');
  if (
    !req.body.baseInterviewQuestions ||
    !req.body.currentQuestion ||
    !req.body.userAnswer
  ) {
    throw new Error('Missing required fields');
  }

  let baseInterviewQuestions = req.body.baseInterviewQuestions;
  let currentQuestion = req.body.currentQuestion;
  let userAnswer = req.body.userAnswer;

  // console.log(baseInterviewQuestions, 'baseInterviewQuestionsN');

  const userPrompt = generateSystemRole(
    baseInterviewQuestions,
    currentQuestion,
    userAnswer
  );

  console.log(userPrompt, 'userPrompt');

  try {
    const response = await openai.chat.completions.create({
      messages: [
        // {
        //   role: 'system',
        //   content: generateSystemRole(baseInterviewQuestions),
        // },
        {
          role: 'user',
          content: userPrompt,
        },
      ],

      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: { type: 'json_object' },
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

    console.log(
      response.choices[0].message.content,
      'response.choices[0].message.content '
    );

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: error.message });
  }
}
