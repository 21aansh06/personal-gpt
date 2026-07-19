import { google } from '@ai-sdk/google';

export const DEFAULT_CHAT_MODEL = "gemini-2.5-flash";

export function getChatModel(model: string | null) {
    return google(model || DEFAULT_CHAT_MODEL)
}