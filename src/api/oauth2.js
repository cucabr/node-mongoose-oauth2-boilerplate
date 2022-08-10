/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const express = require('express');

//Controllers
const oauthController = require('../controllers/OAuth2')

//Models
const { Users } = require('../models/User')

//Models 
const models = { Users }

const routersOAuth2 = (config, app) => {
  var router = express();
 
  router.use("/auth", oauthController(models, { config, app }))
 
  return router
}

module.exports = routersOAuth2;