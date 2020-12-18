//FILENAME : admin.js
const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
// export model user with adminSchema
module.exports = mongoose.model("admin", adminSchema);