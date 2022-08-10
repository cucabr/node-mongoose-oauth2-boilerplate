/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

/**
  * Schema definitions.
  */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OAuthAccessToken = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'OAuthClient' },
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    scope: { type: String }
}, {
    timestamps: true
});
  
var OAuthCode = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'OAuthClient' },
    authorizationCode: { type: String },
    expiresAt: { type: Date },
    scope: { type: String }
}, {
    timestamps: true
})

var OAuthClient = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
    grants: { type: Array },
}, {
    timestamps: true
});

module.exports = { OAuthAccessToken, OAuthCode, OAuthClient };