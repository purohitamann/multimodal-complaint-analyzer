import { ImageAnnotatorClient } from '@google-cloud/vision';
import { analyzeAndCategorizeText } from './textService';

const client = new ImageAnnotatorClient();

export async function extractAndCategorizeImage(imageData: string): Promise<string> {
  const request = {
    image: { content: imageData },
  };

  try {
    const [result] = await client.textDetection(request);
    const detections = result.textAnnotations;
    const extractedText = detections[0]?.description || '';
    return await analyzeAndCategorizeText(extractedText);
  } catch (error) {
    console.error('Error during image text extraction:', error);
    throw new Error('Failed to extract and categorize image data');
  }
}
