import React, { useState } from 'react';
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Button, ButtonGroup } from "@nextui-org/button";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Textarea } from "@nextui-org/input";
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

            {/* <textarea onChange={handleTextChange} /> */}
            <Textarea
                label="Enter Complaint for Category Analysis"
                placeholder="Enter your complaint here"
                className="w-[500px] h-32"
                onChange={handleTextChange}
                value={inputText}

            />


            <Button
                onClick={handleAnalyzeText}

            // isLoading={!analysisResult}
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
