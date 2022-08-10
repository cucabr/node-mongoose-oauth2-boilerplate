/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    verificationCode: { type: String },
    verifiedAt: { type: Date },
}, {
    timestamps: true, 
})

module.exports = { schema };