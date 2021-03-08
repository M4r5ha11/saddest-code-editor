const express = require('express');
const app = express()
const port = '3000'
const fs = require('fs');
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
        res.render('index', { 
            ver: 'v0.0.1',
            phrase: 'Almost before we knew it, we had left the ground.'
        })
    });
    app.get('/new', (req, res) => {
        res.render('new', { 
            ver: 'v0.0.1',
        })
    });
app.listen(port, () => {
console.info(`сервер запущен на http://localhost:${port}`)
});

