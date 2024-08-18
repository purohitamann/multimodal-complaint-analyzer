import { NextApiRequest, NextApiResponse } from 'next';
import { transcribeAndCategorizeVoice } from '../../services/voiceService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { voiceData } = req.body;

    try {
      const result = await transcribeAndCategorizeVoice(voiceData);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error processing voice data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
