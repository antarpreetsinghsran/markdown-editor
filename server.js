const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { marked } = require('marked');


const sanitizeHtml = require('sanitize-html');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/convert-markdown', (req, res) => {
    const { markdown } = req.body;

    try {
        if (!markdown) {
            return res.status(400).json({ error: 'Markdown is required' });
        }

        let html = marked(markdown);
        html = sanitizeHtml(html);
        res.json({ html });
    } catch (error) {
        console.error('Error converting Markdown:', error);  // Log the full error to the console
        res.status(500).json({ error: 'Error converting Markdown', details: error.message });
    }
});


const port = 5000;
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
