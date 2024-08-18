import { NextApiRequest, NextApiResponse } from 'next';
import { analyzeAndCategorizeText } from '../../services/textService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { textData } = req.body;

    try {
      const analysis = await analyzeAndCategorizeText(textData);
      res.status(200).json({ analysis });
    } catch (error) {
      res.status(500).json({ error: 'Error processing text data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
