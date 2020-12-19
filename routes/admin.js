// Filename : admin.js

const express = require("express");
const {check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/adminAuth");
const Ques = require("../model/Ques");
const Admin = require("../model/Admin");

/**
 * @method - POST
 * @param - /Alogin
 * @description - Admin log in
 */
router.post(
    "/Alogin",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {email, password} = req.body;
        try {
            let user = await Admin.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "Admin Does Not Exist"
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                payload,
                "top secret",
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
);

/**
 * @method - GET
 * @param - /Quesans
 * @description - Admin Get QPaper
 */
router.get("/Quesans", auth,
    async (req, res) => {
        Ques.find({},
            function (err, result) {
                if (err) throw err;
                res.status(200).json({
                    result
                });
            });
    }
);

/**
 * @method - PUT
 * @param - /update
 * @description - Admin Update QPaper
 */
router.put(
    "/update",
    [
        check("qid", "This field is required").isNumeric().notEmpty(),
        check("ques", "This field is required").isString().notEmpty(),
        check("type", "This field is required").isString().notEmpty(),
        check("testcase", "This field is required").notEmpty(),
        check("ans", "This field is required").notEmpty(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            qid,
            ques,
            type,
            ans,
            testcase
        } = req.body;
        try {
            let qu = new Ques({
                qid,
                ques,
                type,
                ans,
                testcase
            });
            console.log();
            await Ques.findOneAndUpdate(
                {qid: qu.qid},
                {
                    $set: {
                        ques: qu.ques,
                        type: qu.type,
                        ans: qu.ans,
                        testcase: qu.testcase
                    }
                });
            const payload = {
                qu: {
                    id: qu.id
                }
            };
            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

/**
 * @method - POST
 * @param - /Question
 * @description - Admin Post QPaper
 */
router.post(
    "/Ques",
    [
        check("qid", "This field is required").isNumeric().notEmpty(),
        check("ques", "This field is required").isString().notEmpty(),
        check("type", "This field is required").isString().notEmpty(),
        check("ans", "This field is required").notEmpty(),
        check("testcase", "This field is required").notEmpty()
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            qid,
            ques,
            type,
            ans,
            testcase
        } = req.body;
        try {
            let qu = new Ques({
                qid,
                ques,
                type,
                ans,
                testcase
            });
            await qu.save();
            const payload = {
                qu: {
                    id: qu.id
                }
            };
            jwt.sign(
                payload,
                "secret", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = router;