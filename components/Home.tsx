import React, { useEffect, useState } from 'react';
import { Button, Spacer } from '@nextui-org/react';
import VideoComponent from './VideoComponent';
import { title, subtitle } from '@/components/primitives';
import Voice from '@/pages/voice';
const Home: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const fullText = 'AI-Powered Multimodal Complaint Analysis';

    useEffect(() => {
        let currentText = '';
        let index = 0;

        const typewriter = setInterval(() => {
            if (index < fullText.length) {
                currentText += fullText[index];
                setDisplayedText(currentText);
                index++;
            } else {
                clearInterval(typewriter);
            }
        }, 100); // Adjust the speed of the typewriter effect here

        return () => clearInterval(typewriter);
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            {/* Background Pattern */}
            <div style={{ background: 'radial-gradient(circle, #f0f0f0 1px, transparent 1px)', backgroundSize: '30px 30px', padding: '50px 20px', borderRadius: '10px' }}>
                {/* Hero Section */}
                <h1 style={{ whiteSpace: 'pre' }} className={title({ color: 'cyan' })}>
                    {displayedText}
                </h1>
                <Spacer y={1} />
                <h4 className={subtitle({ fullWidth: true })} >
                    Seamlessly process and categorize consumer complaints across text, voice, images, and videos.
                    Harness the power of AI to streamline your customer service and improve satisfaction.
                </h4>
                <Spacer y={2} />
                <Button size="lg" variant='shadow' >
                    Get Started
                </Button>
                <Spacer y={2} />
                {/* <img src="/hero-image.png" alt="AI Complaint Analysis" style={{ width: '100%', borderRadius: '10px' }} /> */}
            </div>

            {/* Features Section */}
            <div style={{ marginTop: '50px' }}>
                < h2 className={subtitle()}>
                    Key Features
                </h2>
                <Spacer y={2} />
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap' }}>
                    <div style={{ width: '300px', padding: '20px', borderRadius: '10px', margin: '10px' }}>
                        < h4 className={subtitle()}>
                            Text Analysis
                        </h4>
                        <p>
                            Analyze and categorize text-based complaints with precision, identifying key issues and sentiment.
                        </p>
                    </div>
                    <div style={{ width: '300px', padding: '20px', borderRadius: '10px', margin: '10px' }}>
                        <h4 className={subtitle()}>
                            Voice Transcription
                        </h4>
                        <p>
                            Convert voice complaints into text and categorize them with advanced AI-driven insights.
                        </p>
                    </div>
                    <div style={{ width: '300px', padding: '20px', borderRadius: '10px', margin: '10px' }}>
                        <h4 className={subtitle()}>
                            Image Text Extraction
                        </h4>
                        <p>
                            Extract text from images, such as screenshots of complaints, and automatically categorize them.
                        </p>
                    </div>
                    <div style={{ width: '300px', padding: '20px', borderRadius: '10px', margin: '10px' }}>
                        <h4 className={subtitle()}>
                            Video Content Analysis
                        </h4>
                        <p>
                            Analyze video content to detect and categorize complaints, leveraging powerful video intelligence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Demo Section */}
            {/* <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <h2 className={subtitle()} >
                    See It in Action
                </h2>
                <Spacer y={2} />
                <Voice />
            </div> */}
        </div>
    );
};

export default Home;
