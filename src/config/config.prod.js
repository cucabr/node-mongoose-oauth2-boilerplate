/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

module.exports = {
    bodyLimit: '100kb',
    passport: {
      tokenTime: 2592000, // 60*60*24*30 -> 30 days
      secretAuthToken: process.env.SECRET_TOKEN,
      resetPasswordExpires: 3600000 * 24, // 24 hour
    }
};