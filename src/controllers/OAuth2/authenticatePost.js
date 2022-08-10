/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const authenticatePost = ({ Users }, { config, app }) => async (req, res, next) => {
    req.body.user = await Users.findOne({ username: req.body.username });

    return next();
}

module.exports = { authenticatePost }