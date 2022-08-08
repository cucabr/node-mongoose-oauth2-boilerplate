/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    idBase: String,
    name: String,
    doc: String,
    type: {
        type: String,
        enum: [
            'CPF',
            'CNPJ'
        ],
        default: 'CPF',
        required: true
    },
    data: Object
})

module.exports = { schema };