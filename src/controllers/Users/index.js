/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const { Router: router } = require( 'express' );

const { get } = require( './get' );
const { list } = require( './list' );
const { seed } = require( './seed' )

module.exports = (models, { config, app }) => {  
    const api = router();

    //Public
    api.get("/seed", seed(models, { config }))

    //Auth
    api.use(app.oauth.authenticate())
    api.get("/", list(models, { config }))
    api.get("/:_id", get(models, { config }))

    return api;
}