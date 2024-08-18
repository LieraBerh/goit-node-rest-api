import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  favoriteContact,
} from "../controllers/contactsControllers.js";
import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", isValidId, updateContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.patch("/:id/favorite", isValidId, favoriteContact);

export default contactsRouter;
