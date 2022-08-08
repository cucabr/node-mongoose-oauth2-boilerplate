/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const get = ({ PosUsers }, { config }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const posUsers = await PosUsers.find({ _id })
        res.status(200).send({ posUsers })
    } catch (error) {
        next(error);
    }
}

module.exports = { get }