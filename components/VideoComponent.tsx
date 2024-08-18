import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Spacer, Container } from '@nextui-org/react';

const VideoComponent: React.FC = () => {
    const [videoData, setVideoData] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                setVideoData(Buffer.from(reader.result as ArrayBuffer).toString('base64'));
            };
        }
    };

    const handleAnalysis = async () => {
        try {
            const response = await axios.post('/api/video', { videoData });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error analyzing video:', error);
        }
    };

    return (
        <div>
            < h2>Upload Video for Analysis</h2>
            <Input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                fullWidth
                aria-label="Upload Video"
            />
            <Spacer y={1} />
            <Button onClick={handleAnalysis} disabled={!videoData}>
                Analyze
            </Button>
            {result && (
                <>
                    <Spacer y={1} />
                    < h3>Result:</h3>
                    <h3>{result}</h3>
                </>
            )}
        </div>
    );
};

export default VideoComponent;
