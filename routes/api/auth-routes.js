const express = require("express");

const router = express.Router();

const {validateBody} = require("../../utils");

const { schemas } = require("../../models/user");
const controllers = require("../../controllers/auth-controllers");


router.post("/register", validateBody(schemas.registerSchema),)

router.post("/login", validateBody(schemas.loginSchema), controllers.register);


module.exports = router;




