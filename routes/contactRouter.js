import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import isValidId from "../middlewares/isValidId.js";
import authenticate from "../middlewares/authenticate.js";
import validateBody from "../decorators/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const addMiddleware = validateBody(createContactSchema);
const updMiddleware = validateBody(updateContactSchema);

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.post("/", addMiddleware, contactsControllers.createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  updMiddleware,
  contactsControllers.updateContact
);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  contactsControllers.favoriteContact
);

export default contactsRouter;
