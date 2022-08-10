/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const { Router: router } = require( 'express' );

const { authenticateGet } = require( './authenticateGet' );
const { authenticatePost } = require( './authenticatePost' );

module.exports = (models, { config, app }) => {  
    const api = router();

    api.post("/access_token", app.oauth.token({
        requireClientAuthentication: {
            authorization_code: false,
            refresh_token: false
        }
    }))

    api.get("/authenticate", authenticateGet(models, { config }))
    api.post("/authenticate", authenticatePost(models, { config }),app.oauth.authorize({
        authenticateHandler: {
            handle: req => {
                return req.body.user;
            }
        }
    }))

    return api;
}