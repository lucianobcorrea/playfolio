const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const URL_STEAM_API = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';
const URL_STEAM_DATA_API =
  'https://store.steampowered.com/api/appdetails?appids=';

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(URL_STEAM_API);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/steam-data/:appId', async (req, res) => {
  try {
    const appId = req.params.appId;
    const response = await axios.get(`${URL_STEAM_DATA_API}${appId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
