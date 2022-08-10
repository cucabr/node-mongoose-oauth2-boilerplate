/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

var { OAuthAccessToken, OAuthCode, OAuthClient } = require('./schema')
var mongoose = require('mongoose');

const OAuthAccessTokenModel = mongoose.model('OAuthToken', OAuthAccessToken, "oauth_access_tokens");
const OAuthCodeModel = mongoose.model('OAuthCode', OAuthCode, "oauth_auth_codes");
const OAuthClientModel = mongoose.model('OAuthClient', OAuthClient, "oauth_clients");

module.exports = { OAuthAccessTokenModel, OAuthCodeModel, OAuthClientModel };
