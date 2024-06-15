import { interviewQuestions } from '@/components/helper/questions';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

export default async function handler(req, res) {
  const systemPrompt = `
You are a visa officer who plans to ask questions to the student to determine following things

Visa Officer mindset to reject student

1. Are you a genuine student?
2. Are you a positional immigrant?
3. Do you have correct finances in order to study in USA?

Interview factors

1. University and Study Plans
2. Academics history
3. Student Finances
4. If, Work experience
5. Post Graduation Plans
6. Other Questions

NOTE: consider user doesn’t have any work experience.

You have access to interviewQuestions create a object. balance questions so that Visa Officer mindset to reject or accepte the student for USA visa interview.

output in balancedInterviewQuestionsArr in following JSON format only and you can ask max total 9 questions only.

{
 balancedInterviewQuestionsArr = [ {questionNumber: 1, question: "Q1", questioncategory: "universityAndStudyPlans/academicsHistory/studentFinances/workExperience/postGraduationPlans/otherQuestions" }, {questionNumber: 2, question: "Q2", questioncategory: "universityAndStudyPlans/academicsHistory/studentFinances/workExperience/postGraduationPlans/otherQuestions" }, ...]
}
};`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        { role: 'user', content: JSON.stringify(interviewQuestions) },
      ],

      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 850,
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

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: error.message });
  }
}
