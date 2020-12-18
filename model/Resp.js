//FILENAME : Resp.js
const mongoose = require("mongoose");
const respSchema = mongoose.Schema({
    qid: {
        type: Number,
        required: true
    },
    response: {
        type: String,
        required: false
    },

});
// export model user with RespSchema
module.exports = mongoose.model("Resp", respSchema);