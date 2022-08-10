/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const authenticateGet = ({ }, { config }) => async (req, res, next) => {
    return res.render('authenticate')
}

module.exports = { authenticateGet }