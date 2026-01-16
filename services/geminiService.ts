
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fitnessAssistant = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Вы — интеллектуальный помощник фитнес-клуба Panovalife в Хабаровске. Ваша цель — помочь клиенту выбрать тренировку, рассказать об услугах (бассейн 24м, зал 700м2, СПА, детский клуб) и мотивировать на занятия. Будьте энергичны, вежливы и профессиональны. Используйте русский язык. Если спрашивают про цены, говорите, что у нас есть разные карты и лучше записаться на экскурсию.",
        temperature: 0.7,
      },
    });
    return response.text || "Я готов ответить на любые вопросы о нашем клубе!";
  } catch (error) {
    console.error("AI Error:", error);
    return "Простите, я немного отвлекся на тренировку. Спросите еще раз?";
  }
};
