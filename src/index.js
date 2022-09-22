const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket.js');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://yignaciosd:yignaciosd123123@cluster0.uhlqhkc.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, DELETE, PUT

//Tipos de Pararâmetros:

//Query params: req.query(filtros, ordenação, paginação)
//Route params: request.params(IDETNFICAR UM RECURSO NA ALTERAÇÃO OU REMOÇÃO)
//Body: request.body: (DADOS PARA CRIAÇÃO OU ALTERAÇÃO DE UM REGISTRO)

// MongoDB: (não relacional)

server.listen(3333);