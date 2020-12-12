//FILENAME : exam.js
const mongoose = require("mongoose");
const fbSchema = mongoose.Schema({
    rollno: {
        type: String,
        required: true
    },
    mcq: {
        type: Array,
        required: false
    },
    coding: {
        type: Array,
        required: false
    }
});
// export model user with UserSchema
module.exports = mongoose.model("exam", fbSchema);