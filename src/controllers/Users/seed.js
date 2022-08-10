/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const seed = ({ Users, OAuthClientModel }, { config }) => async (req, res, next) => {
    try {
        Users.findOneAndUpdate({ email: "test@user" }, { 
            $set: {
                firstName: "Teste",
                lastName: "User",
                username: "test",
                password: "test",
                email: "test@user",
                verificationCode: "123"
            } 
        }, {
            new: true,
            upsert: true,
            rawResult: true // Return the raw result from the MongoDB driver
        },(err,obj) => {
            OAuthClientModel.findOneAndUpdate({ user: obj.value._id }, {
                user: obj.value._id,
                clientId: "test",
                clientSecret: "test",
                redirectUris: ["https://localhost:5667/api/callback"],
                grants: "authorization_code"
            }, {
                new: true, 
                upsert: true,
                rawResult: true // Return the raw result from the MongoDB driver
            },(err2,obj2) => {
                if(err2) 
                    throw Error(err2)
                else 
                    res.status(200).send({ success: true })
            })
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { seed }