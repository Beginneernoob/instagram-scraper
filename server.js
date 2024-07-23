// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Memuat variabel lingkungan dari file .env
dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/scrape', async (req, res) => {
    const { username, type } = req.query;
    let url = '';
    
    switch (type) {
        case 'info':
            url = `https://${process.env.RAPIDAPI_HOST}/v1/info?username_or_id_or_url=${username}`;
            break;
        case 'followers':
            url = `https://${process.env.RAPIDAPI_HOST}/v1/followers?username_or_id_or_url=${username}`;
            break;
        case 'following':
            url = `https://${process.env.RAPIDAPI_HOST}/v1/following?username_or_id_or_url=${username}`;
            break;
        case 'highlights':
            url = `https://${process.env.RAPIDAPI_HOST}/v1/highlights?username_or_id_or_url=${username}`;
            break;
        case 'posts':
            url = `https://${process.env.RAPIDAPI_HOST}/v1.2/posts?username_or_id_or_url=${username}`;
            break;
        case 'stories':
            url = `https://${process.env.RAPIDAPI_HOST}/v1/stories?username_or_id_or_url=${username}`;
            break;
        default:
            res.status(400).send('Invalid type');
            return;
    }

    const options = {
        method: 'GET',
        url: url,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
