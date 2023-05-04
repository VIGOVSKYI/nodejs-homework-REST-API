const express = require("express");

const controllers = require("../../controllers/contacts-controllers");

const { schemas } = require("../../models/contact");

const { validateBody } = require("../../utils");

const {authenticate} = require("../../middlewares/index");

const router = express.Router();

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, controllers.getById);

router.delete("/:contactId", authenticate, controllers.deleteContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), controllers.postNewContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.updateContactById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
