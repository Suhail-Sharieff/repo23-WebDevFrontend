
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});