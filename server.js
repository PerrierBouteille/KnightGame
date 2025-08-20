const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'games.json');

app.use(cors());
app.use(express.json());

// Server status
app.get('/api/health', async (req, res) => {
    res.status(200).json({ info: 'Server online' });
});

// Game page
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
});

// Lire les données
async function readGames() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Écrire les données
async function writeGames(games) {
    await fs.writeFile(DATA_FILE, JSON.stringify(games, null, 2));
}

// GET tous les jeux
app.get('/api/games', async (req, res) => {
    try {
        const games = await readGames();
        res.json(games.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST nouveau jeu
app.post('/api/games', async (req, res) => {
    try {
        const games = await readGames();
        const newGame = {
            id: Date.now(),
            ...req.body
        };
        games.push(newGame);
        await writeGames(games);
        res.json(newGame);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});