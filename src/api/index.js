/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const express = require('express');
const { errorHandler } = require('../middleware')

//Models
const { PosUsers } = require('../models/PosUsers')

//Controllers
const posUsersController = require('../controllers/PosUsers')

const models = { PosUsers }
const routersInit = (config) => {
  var router = express();

  router.use("/posusers", posUsersController(models, { config }))

  router.use(errorHandler)
  
  return router
}

module.exports = routersInit;
