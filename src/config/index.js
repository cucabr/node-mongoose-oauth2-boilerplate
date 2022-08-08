/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const devConfig = require( './config.dev' );
const prodConfig = require( './config.prod' );

const type = process.env.NODE_ENV;
const configs = {
  development: devConfig,
  production: prodConfig
};

module.exports = {
  config: configs[ type ] || configs.development,
};