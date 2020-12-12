//FILENAME : Feedback.js
const mongoose = require("mongoose");
const fbSchema = mongoose.Schema({
    ux: {
        type: String,
        required: true
    },
    quesAsse: {
        type: String,
        required: true
    },
    stars: {
        type: Number ,
        required: true
    },
    improve: {
        type: String,
        required: true
    }
});
// export model user with UserSchema
module.exports = mongoose.model("Feedback", fbSchema);