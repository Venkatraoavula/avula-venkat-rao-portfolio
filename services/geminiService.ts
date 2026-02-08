import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
        aiClient = new GoogleGenAI({ apiKey });
    } else {
        console.warn("API_KEY is missing in environment variables. Chat features may not work.");
    }
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, I can't connect to the AI service right now. Please check the API Key configuration.";
  }

  try {
    // We use generateContent with system instruction for a single turn or stateless chat feel,
    // but to maintain context efficiently we can use the chat API.
    // However, given the requirement to use the specific resume context, we will use generateContent
    // and pass the history manually if needed, or just use the chat method with system instruction.
    
    // Using Chat for better conversational flow
    const chat = client.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't get a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};
