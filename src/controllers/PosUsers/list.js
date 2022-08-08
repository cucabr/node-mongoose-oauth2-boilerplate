/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const list = ({ PosUsers }, { config }) => async (req, res, next) => {
    try {
        const posUsers = await PosUsers.find({})
        res.status(200).send({ posUsers })
    } catch (error) {
        console.log('aqui',error)
        next(error);
    }
}

module.exports = { list }