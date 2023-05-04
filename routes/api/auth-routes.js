const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { authenticate, upload } = require("../../middlewares/index");

const { schemas,  } = require("../../models/user");

const controllers = require("../../controllers/auth-controllers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);
router.get("/verify/:verificationToken", controllers.verify);

router.post("/resend-verify-email", validateBody(schemas.emailSchema), controllers.resendVerifyEmail);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), controllers.updateAvatar);

module.exports = router;
