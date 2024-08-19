import React, { useState } from 'react';
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Button, ButtonGroup } from "@nextui-org/button";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Textarea } from "@nextui-org/input";
import { subtitle } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";
const TextComponent: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [analysisResult, setAnalysisResult] = useState<string>('');

    // const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setInputText(e.target.value);
    // };
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const handleAnalyzeText = async () => {
        try {
            const response = await axios.post('/api/text', { textData: inputText });
            console.log(response.data.analysis);
            setAnalysisResult(response.data.analysis);
        } catch (error) {
            console.error('Error analyzing text:', error);
        }
    };

    return (
        <div>
            <p className={subtitle()}>Enter Complaint for Category Analysis</p>
            <Spacer y={2} />
            {/* <textarea onChange={handleTextChange} /> */}
            <Textarea

                placeholder="My transaction was declined..."
                className="w-[500px] "
                onChange={handleTextChange}
                value={inputText}

            />
            <Spacer y={2} />

            <Button
                onClick={handleAnalyzeText}
            >
                Analyze
            </Button>
            {analysisResult && (
                <div>
                    <h3>Analysis Result:</h3>
                    <p>{analysisResult}</p>
                </div>
            )}
        </div>
    );
};

export default TextComponent;
