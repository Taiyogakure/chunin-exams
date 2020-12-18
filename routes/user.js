// Filename : user.js

const express = require("express");
const {check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");
const fs = require('fs');
const execSync = require('child_process').execSync;
const auth = require("../middleware/auth");
const Feedback = require("../model/Feedback");
const Ques = require("../model/Ques");
const path = require('path');
const Resp = require("../model/Resp");
/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */
router.post(
    "/signup",
    [
        check("rollno", "Please Enter a Valid rollno")
            .not()
            .isEmpty(),
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
        const {
            rollno,
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            user = new User({
                rollno,
                email,
                password
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const payload = {
                user: {
                    id: user.id
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

router.post(
    "/login",
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
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
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
                "nodbon",
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
 * @method - POST
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get("/me", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({message: "Error in Fetching user"});
    }
});
router.post(
    "/feedback",
    [
        check("ux", "This field is required").isString(),
        check("quesAsse", "This field is required").isString(),
        check("stars", "This field is required").isNumeric(),
        check("improve", "Minimum 10 characters").isString().isLength({min: 10})
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            ux,
            quesAsse,
            stars,
            improve
        } = req.body;
        try {
            let fb = new Feedback({
                ux,
                quesAsse,
                stars,
                improve
            });
            await fb.save();
            const payload = {
                fb: {
                    id: fb.id

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
const CODE_FOLDER = "code";

function testCode(req, res) {
    let code = req.body["code"];
    try {
        fs.writeFileSync(path.join(__dirname, CODE_FOLDER, "input_code.py"), code);
        const proc = execSync("python3 " + "routes\\" + path.join(CODE_FOLDER, "tests.py"));
        const results = proc.toString();

        return res.send(results);
    } catch (error) {
        console.log("An error occurred");
        console.log(error);
        return res.send("An error occurred.");
    }
}


router.get('/', (req, res) => {
    res.send("Hello world");
});
router.post('/test', testCode);

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

router.put(
    "/update",
    [
        check("qid", "This field is required").isNumeric().notEmpty(),
        check("ques", "This field is required").isString().notEmpty(),
        check("type", "This field is required").isString().notEmpty(),
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
                }).then(() => {
                console.log("updated")
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

router.post(
    "/Resp",
    [
        check("qid", "This field is required").isNumeric().notEmpty(),
        check("response", "This field is required").isString().notEmpty(),
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
            response,
        } = req.body;
        try {
            let rs = new Resp({
                qid,
                response,
            });
            await rs.save();
            const payload = {
                rs: {
                    id: rs.id
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
router.put(
    "/Resp",
    [
        check("qid", "This field is required").isNumeric().notEmpty(),
        check("response", "This field is required").isString().notEmpty(),
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
            response,

        } = req.body;
        try {
            let rs = new Resp({
                qid,
                response,
            });
            console.log();
            await Resp.findOneAndUpdate(
                {qid: rs.qid},
                {
                    $set: {
                        response: rs.response,
                    }
                }).then(() => {
                console.log("updated")
            });
            const payload = {
                rs: {
                    id: rs.id
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


module.exports = router;