import express from "express";
import { db } from "./db.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const dbName = 'company';
await mongoose.connect(`mongodb://localhost:27017/${dbName}`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/addEmployee', async (req, res) => {
    try {
        const newEmployee = new db(req.body);
        await newEmployee.save();
        res.send('Employee added successfully');
    } catch (error) {
        res.status(500).send('Error adding employee');
    }
});

app.get('/make', async (req, res) => {
    try {
        const employees=[new db({name:"demo",salary:90,language:"JS",city:"Unknown",isManager:false})]
        await db.deleteMany({}); // Clear existing data
        for (let employee of employees) {
            await employee.save();
        }
        res.send('Data added successfully');
    } catch (error) {
        res.status(500).send('Error adding data');
    }
});

app.get('/erase', async (req, res) => {
    try {
        await db.deleteMany({});
        res.send('Data erased successfully');
    } catch (error) {
        res.status(500).send('Error erasing data');
    }
});

app.get('/getAllAsJSON', async (req, res) => {
    try {
        const employees = await db.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
