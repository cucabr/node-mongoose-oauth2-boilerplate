/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */

const mongoose = require( 'mongoose' );

class MongoManager {
  constructor() {

  }
  getMongoUrl() {
    return process.env.MONGODB_URI;
  }
  async connect() {
    var p = await mongoose.connect( this.getMongoUrl(), { useNewUrlParser: true, useUnifiedTopology: true } );
    return p
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };