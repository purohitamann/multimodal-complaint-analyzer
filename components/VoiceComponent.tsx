import React, { useState } from 'react';
import axios from 'axios';
import { subtitle } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
const VoiceComponent: React.FC = () => {
    const [voiceData, setVoiceData] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                setVoiceData(Buffer.from(reader.result as ArrayBuffer).toString('base64'));
            };
        }
    };

    const handleTranscription = async () => {
        try {
            const response = await axios.post('/api/voice', { voiceData });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error transcribing voice:', error);
        }
    };

    return (
        <div>
            <h2 className={subtitle()}>Upload Voice File for Transcription</h2>
            <Spacer y={2} />
            <Input type="file" accept="audio/*" onChange={handleFileChange} />
            <Spacer y={2} />
            <Button onClick={handleTranscription}>Transcribe</Button>
            {result && <div><h3>Result:</h3><p>{result}</p></div>}
        </div>
    );
};

export default VoiceComponent;
