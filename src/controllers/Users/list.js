/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const list = ({ Users }, { config }) => async (req, res, next) => {
    try {
        const users = await Users.find({})
        res.status(200).send({ users })
    } catch (error) {
        next(error);
    }
}

module.exports = { list }