const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { authenticate } = require("../../middlewares/index");

const { schemas } = require("../../models/user");
const controllers = require("../../controllers/auth-controllers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

module.exports = router;
