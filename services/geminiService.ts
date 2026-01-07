
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiLoreResponse = async (userPrompt: string): Promise<string> => {
  if (!API_KEY) return "API Key not configured.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI assistant specialized in the lore of "Zenith Cyber-Anime". 
        The world is a high-tech, low-life cyberpunk setting where neon aesthetics, mecha, and digital magic coexist. 
        Always respond in a helpful but slightly futuristic/cyberpunk tone. 
        Refer to characters like Kaelith the Cyber-Ronin and Seraphina the Net-Caster.`,
        temperature: 0.8,
      },
    });

    return response.text || "The digital stream is silent. Try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to the Neural Link failed.";
  }
};
