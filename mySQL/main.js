import express from 'express';
import pool from './db.js';
/**mysql query:---db name:demoDB
 CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    task TEXT NOT NULL,
    isDone BOOLEAN NOT NULL
);

 
 */
const app = express();
const port = 3000;

// Route to add a new todo item
app.get('/', async (req, res) => {
    try {
        const [result] = await pool.query('INSERT INTO todos (title, task, isDone) VALUES (?, ?, ?)', ['First', 'Clean House', false]);
        res.json({ id: result.insertId, title: 'First', task: 'Clean House' });
    } catch (err) {
        res.status(500).json({ message: "Error adding todo", error: err });
    }
});

// Route to get all todo items
app.get('/todos', async (req, res) => {//http://localhost:3000/todos
    try {
        const [rows] = await pool.query('SELECT * FROM todos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving todos", error: err });
    }
});

app.listen(port, () => {
    console.log(`Launched http://localhost:${port}`);
});
