import { VideoIntelligenceServiceClient } from '@google-cloud/video-intelligence';
import { analyzeAndCategorizeText } from './textService';

const client = new VideoIntelligenceServiceClient();

export async function analyzeAndCategorizeVideo(videoData: string): Promise<string> {
  const request = {
    inputContent: videoData,
    features: ['LABEL_DETECTION'],
  };

  try {
    const [operation] = await client.annotateVideo(request);
    const [operationResult] = await operation.promise();
    const labels = operationResult.annotationResults[0].segmentLabelAnnotations
      .map(label => label.entity.description)
      .join(', ');
    return await analyzeAndCategorizeText(labels);
  } catch (error) {
    console.error('Error during video analysis:', error);
    throw new Error('Failed to analyze and categorize video data');
  }
}
