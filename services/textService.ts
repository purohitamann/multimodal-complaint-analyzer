import { LanguageServiceClient } from '@google-cloud/language';

const client = new LanguageServiceClient();

const categoryMapping = [
  { category: 'Failed Transaction', keywords: ['transaction', 'failed', 'declined'] },
  { category: 'Delayed Transaction', keywords: ['transaction', 'delayed', 'slow'] },
  { category: 'Duplicate Transaction', keywords: ['transaction', 'duplicate', 'multiple'] },
  { category: 'Unauthorized Transaction', keywords: ['transaction', 'unauthorized', 'fraudulent'] },
  { category: 'Account Access Issues', keywords: ['account', 'access', 'login', 'locked'] },
  { category: 'Account Balance Discrepancies', keywords: ['account', 'balance', 'incorrect', 'discrepancy'] },
  { category: 'Account Closure Issues', keywords: ['account', 'closure', 'close', 'terminate'] },
  { category: 'Incorrect Billing', keywords: ['billing', 'charge', 'incorrect', 'wrong'] },
  { category: 'Payment Processing Errors', keywords: ['payment', 'processing', 'error', 'failure'] },
  { category: 'Refund Issues', keywords: ['refund', 'return', 'delayed', 'missing'] },
  { category: 'Fraud Detection', keywords: ['fraud', 'suspicious', 'unauthorized'] },
  { category: 'Data Breach', keywords: ['data', 'breach', 'leak', 'hack'] },
  { category: 'Security Features', keywords: ['security', 'two-factor', 'authentication', 'password'] },
  { category: 'Customer Support Issues', keywords: ['support', 'customer service', 'help', 'rude'] },
  { category: 'Service Outage', keywords: ['service', 'outage', 'down', 'unavailable'] },
  { category: 'Poor Communication', keywords: ['communication', 'unclear', 'misleading', 'information'] }
];

export async function analyzeAndCategorizeText(textData: string): Promise<string> {
  const document = {
    content: textData,
    type: 'PLAIN_TEXT',
  };

  try {
    // Analyze the sentiment of the text
    const [sentimentResult] = await client.analyzeSentiment({ document });
    const sentiment = sentimentResult.documentSentiment;

    // Analyze the entities (keywords) in the text
    const [entityResult] = await client.analyzeEntities({ document });
    const entities = entityResult.entities.map(entity => entity.name.toLowerCase());

    // Initialize a default category
    let category = 'General Inquiry';

    // Loop through the category mappings to find the best match
    for (const mapping of categoryMapping) {
      if (mapping.keywords.some(keyword => entities.includes(keyword))) {
        category = mapping.category;
        break; // Stop at the first matching category
      }
    }

    return `Category: ${category}, Sentiment score: ${sentiment?.score}, Magnitude: ${sentiment?.magnitude}, Entities: ${entities.join(', ')}`;
  } catch (error) {
    console.error('Error during text analysis:', error);
    throw new Error('Failed to analyze and categorize text data');
  }
}
