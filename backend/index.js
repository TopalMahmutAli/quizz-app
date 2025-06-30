const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const quizRoutes = require('./routes/quiz');
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
});