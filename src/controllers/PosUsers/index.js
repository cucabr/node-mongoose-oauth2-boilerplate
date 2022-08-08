/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const { Router: router } = require( 'express' );
const { authenticate } = require( '../../middleware' );

const { get } = require( './get' );
const { list } = require( './list' );

module.exports = (models, { config }) => {
    const api = router();

    api.get("/", list(models, { config }))
    api.get("/:_id", get(models, { config }))

    return api;
}