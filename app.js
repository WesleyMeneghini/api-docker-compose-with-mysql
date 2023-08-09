const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;





// Rota para buscar dados do banco de dados
app.get('/data', (req, res) => {


    const connection = mysql.createConnection({
        host: 'db-localhost', // Use o nome do serviço como host
        user: 'wmeneghini',
        password: '123',
        database: 'mysql',
    });


    connection.query('show tables', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar dados no banco de dados.' });
        }
        res.json(results);
    });
});

app.get('/data/:table', (req, res) => {

    const connection = mysql.createConnection({
        host: 'db-localhost', // Use o nome do serviço como host
        user: 'wmeneghini',
        password: '123',
        database: 'mysql',
    });

    connection.query(`select * from ${req.params.table}`, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar dados no banco de dados.' });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
