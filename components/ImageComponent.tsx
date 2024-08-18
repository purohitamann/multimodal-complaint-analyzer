import React, { useState } from 'react';
import axios from 'axios';

const ImageComponent: React.FC = () => {
    const [imageData, setImageData] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size > 10 * 1024 * 1024) { // 10MB limit
            setError('File is too large. Please upload an image smaller than 10MB.');
            return;
        }
        setError('');
        if (file) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                setImageData(Buffer.from(reader.result as ArrayBuffer).toString('base64'));
            };
        }
    };

    const handleExtraction = async () => {
        try {
            const response = await axios.post('/api/image', { imageData });
            setResult(response.data.result);
        } catch (error) {
            setError('Error extracting image text.');
            console.error('Error extracting image text:', error);
        }
    };

    return (
        <div>
            <h2>Upload Image for Text Extraction</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleExtraction}>Extract</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && <div><h3>Result:</h3><p>{result}</p></div>}
        </div>
    );
};

export default ImageComponent;
