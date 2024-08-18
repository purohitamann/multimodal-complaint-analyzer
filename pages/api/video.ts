
import { NextApiRequest, NextApiResponse } from 'next';
import { analyzeAndCategorizeVideo } from '../../services/videoService';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Adjust the size limit as needed
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { videoData } = req.body;

    try {
      const result = await analyzeAndCategorizeVideo(videoData);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error processing video data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
