import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Spacer } from '@nextui-org/react';
import { title } from "@/components/primitives";
import { subtitle } from "@/components/primitives";
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
        <div className="flex flex-col items-center justify-center">
            < h2 className={subtitle()}>Upload Video for Analysis</h2>
            <Spacer y={2} />
            <Input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                fullWidth
                aria-label="Upload Video"
            />
            <Spacer y={2} />
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
