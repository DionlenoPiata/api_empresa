'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        require: true
    },
    tokenRF: {
        type: String,
        set: require('sha1')
    },
    fundada: {
        type: Number
    },
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto"
    }]
});

module.exports = mongoose.model('Empresa', schema);