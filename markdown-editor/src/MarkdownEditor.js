import React, { useState } from 'react';
import axios from 'axios';

export default function MarkdownEditor() {
    const [markdownInput, setMarkdownInput] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');

    const handleMarkdownChange = async (e) => {
        const input = e.target.value;
        setMarkdownInput(input);

        try {
            const response = await axios.post('http://localhost:5000/convert-markdown', { markdown: input });
            setHtmlOutput(response.data.html);
        } catch (error) {
            console.error('Error converting Markdown:', error);
        }
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className="head">MARKDOWN</div>
                <textarea
                    autoFocus
                    className="textarea"
                    value={markdownInput}
                    onChange={handleMarkdownChange}
                ></textarea>
            </div>
            <div className="wrapper">
                <div className="head">PREVIEW</div>
                <div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
            </div>
        </div>
    );
}
