/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const { errorHandler } = require( './error-handler' );
const { authenticate } = require( './authenticate' );


module.exports = {
  authenticate,
  errorHandler
};