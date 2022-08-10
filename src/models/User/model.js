const mongoose = require('mongoose');
const crypto = require('crypto');
const { schema } = require('./schema');

schema.methods.validatePassword = function (password) {
    let _password = crypto.pbkdf2Sync(password, env.salt, 10000,
        32, 'sha512').toString('hex');
    return this.password === _password;
};

schema.methods.setPassword = function (password) {
    this.password = crypto.pbkdf2Sync(password, env.salt, 10000,
        32, 'sha512').toString('hex');
};


const Users = mongoose.model('User', schema);

module.exports = { Users };