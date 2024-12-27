######Markdown Editor

A simple web-based Markdown editor that allows users to write Markdown and view the sanitized HTML preview in real-time. This project is built with React for the frontend and Express for the backend.

######Features

Write Markdown in a text area.

Real-time preview of sanitized HTML output.

Backend sanitization to prevent malicious scripts.

######Technologies Used

Frontend-

React

Axios

Backend-

Express

Marked (Markdown parser)

Sanitize-HTML (for sanitizing HTML output)

######Prerequisites

Ensure you have the following installed on your machine:

Node.js (v14 or later)

npm or yarn


######Install dependencies

For the frontend

Navigate to the ui directory and run:

cd ui
npm install

For the backend

Navigate to the server directory and run:

cd server
npm install

Running the Application

Start the backend server

From the server directory, run:

node server.js

The server will start at http://localhost:5000.

Start the frontend

From the ui directory, run:

npm start

The frontend will start at http://localhost:3000.

######Usage

Open the frontend in your browser at http://localhost:3000.

Enter Markdown text in the left text area.

View the real-time sanitized HTML preview on the right.

######API Endpoints

POST /convert-markdown

Converts Markdown input to sanitized HTML.

Request Body

{
  "markdown": "# Your Markdown content"
}

Response

{
  "html": "<h1>Your HTML content</h1>"
}

######Dependencies

Frontend-

React

Axios

Backend-

Express

Marked

Sanitize-HTML

Body-parser

CORS