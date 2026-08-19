import { Injectable } from '@nestjs/common';

export type TutorMode = 'EXPLAIN' | 'SUMMARIZE' | 'QUIZ' | 'FLASHCARDS' | 'ROADMAP' | 'TRANSLATE';

@Injectable()
export class AiTutorService {
  buildSystemPrompt(mode: TutorMode, language = 'English') {
    return [
      'You are Swayam 2.o AI Tutor.',
      `Mode: ${mode}.`,
      `Respond in ${language}.`,
      'Cite retrieved course material, be concise, accessible, and never invent facts.',
    ].join(' ');
  }
}
