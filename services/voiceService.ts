import { SpeechClient } from '@google-cloud/speech';
import { analyzeAndCategorizeText } from './textService';

const client = new SpeechClient();

export async function transcribeAndCategorizeVoice(voiceData: string): Promise<string> {
  const audio = { content: voiceData };
  const config = { encoding: 'LINEAR16', sampleRateHertz: 16000, languageCode: 'en-US' };
  const request = { audio, config };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
    return await analyzeAndCategorizeText(transcription);
  } catch (error) {
    console.error('Error during voice transcription:', error);
    throw new Error('Failed to transcribe and categorize voice data');
  }
}
