const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// GET endpoint
app.get('/', (req, res) => {
    const response = {
        email: 'ukaohachizoba6@gmail.com', // Replace with your HNG Slack email
        current_datetime: new Date().toISOString(), // Dynamically generated ISO 8601 timestamp
        github_url: 'https://github.com/Ukaoha/Hng.git' // Replace with your GitHub repo URL
    };
    res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});