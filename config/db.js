//FILENAME : db.js
const config = require('./config');
const mongoose = require("mongoose");
const MONGOURI = config.MONGO;
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
module.exports = InitiateMongoServer;