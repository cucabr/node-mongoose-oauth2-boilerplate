/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const express = require('express');
const { errorHandler } = require('../middleware')

//Models
const v1 = require('./v1')
const oauth2 = require('./oauth2')

//Controllers
const routersInit = (config, app) => {
  var router = express();

  router.use("/oauth2", oauth2(config, app))
  router.use("/v1", v1(config, app))

  router.get("/callback", (req, res, next) => {
    console.log('aqui callback get',req)
    res.status(200).json({ success: true })
  })

  router.use(errorHandler)

  return router
}

module.exports = routersInit;
