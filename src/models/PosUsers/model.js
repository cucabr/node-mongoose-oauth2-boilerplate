const mongoose = require('mongoose');
const { schema } = require('./schema');

//schema.pre('save', function () { });

const PosUsers = mongoose.model('PosUsers', schema);
module.exports = { PosUsers };