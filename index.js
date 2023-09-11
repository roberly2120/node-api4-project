require('dotenv').config();
const express = require('express');


const server = express();

server.use(express.json());

const port = process.env.PORT;

server.get('/api/users', (req, res) => {
    const users = [];
    res.status(200).json(users);
})
server.post('/api/register', (req, res) => {
    const user = req.body;
    res.status(201).json(user)
})
server.post('/api/login', (req, res) => {
    const {username, password} = req.body
    if(username === "testUsername" && password === "myCat1234") {
        res.status(200).json({message: `Welcome, ${username}`})
    }
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})