import Contact from "../models/Contact.js";

const listContacts = (filter, settings) => {
  return Contact.find(
    filter,
    "name email phone favorite owner",
    settings
  ).populate("owner", "email");
};

const getOneContact = (filter) => Contact.findOne(filter);

const addContact = (data) => Contact.create(data);

const updateContact = (filter, data) => Contact.findOneAndUpdate(filter, data);

const removeContact = (filter) => Contact.findOneAndDelete(filter);

const updateStatusContact = (filter, { favorite }) => {
  return Contact.findOneAndUpdate(filter, { favorite });
};

export {
  listContacts,
  getOneContact,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
