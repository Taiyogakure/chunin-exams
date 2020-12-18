//FILENAME : Ques.js
const mongoose = require("mongoose");
const qSchema = mongoose.Schema({
    qid: {
        type: Number,
        required: true
    },
    ques: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ans: {
        type: Array,
        required: true
    },
    testcase: {
        type: Array,
        required: false
    }

});
// export model user with UserSchema
module.exports = mongoose.model("Ques", qSchema);