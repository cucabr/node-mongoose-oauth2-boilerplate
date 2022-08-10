/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const get = ({ Users }, { config }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const users = await Users.find({ _id })
        res.status(200).send({ users })
    } catch (error) {
        next(error);
    }
}

module.exports = { get }