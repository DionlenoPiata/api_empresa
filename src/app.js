'use strict';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// conectar ao banco de dados
mongoose.connect(config.conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// carrega models
const User = require('./models/user');
const Empresa = require('./models/empresa');
const Produto = require('./models/produto');

// routers
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const EmpresaRoute = require('./routes/empresa-route');
const ProdutoRoute = require('./routes/produto-route');

// middleware de conversao de dados
app.use(express.json());

// habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// rotas da aplicacao
app.use('/', indexRoute);
app.use('/user' + 's', userRoute);
app.use('/empresa' + 's', EmpresaRoute);
app.use('/produto' + 's', ProdutoRoute);

module.exports = app;