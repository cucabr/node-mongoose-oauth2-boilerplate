/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const express = require('express');

//Models
const { Users } = require('../models/User')
const { OAuthAccessTokenModel, OAuthCodeModel, OAuthClientModel } = require('../models/OAuth2')

//Controllers
const usersController = require('../controllers/Users')

//Models 
const models = { Users, OAuthAccessTokenModel, OAuthCodeModel, OAuthClientModel }

const routersInit = (config, app) => {
  var router = express(); 

  router.use("/users", usersController(models, { config, app }))
  
  return router
} 

module.exports = routersInit;