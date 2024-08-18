import { NextApiRequest, NextApiResponse } from 'next';
import { extractAndCategorizeImage } from '../../services/imageService';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust the size limit as needed
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { imageData } = req.body;

    try {
      const result = await extractAndCategorizeImage(imageData);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error processing image data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
