//FILENAME : User.js
const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
// export model user with UserSchema
module.exports = mongoose.model("user", AdminSchema);