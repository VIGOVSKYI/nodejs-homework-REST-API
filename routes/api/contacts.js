const express = require("express");

const controllers = require("../../controllers/contacts-controllers");

const { schemas } = require("../../models/contact");

const { validateBody } = require("../../utils");

const router = express.Router();

router.get("/", controllers.getAllContacts);

router.get("/:contactId", controllers.getById);

router.delete("/:contactId", controllers.deleteContactById);

router.post("/", validateBody(schemas.addSchema), controllers.postNewContact);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  controllers.updateContactById
);
router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
