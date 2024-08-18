import Contact from "../models/Contact.js";

const listContacts = () => Contact.find();

const getContactById = (contactId) => Contact.findOne({ _id: contactId });

const addContact = (data) => Contact.create(data);

const updateContact = (contactId, data) =>
  Contact.findByIdAndUpdate({ _id: contactId }, data, { new: true });

const removeContact = (contactId) =>
  Contact.findByIdAndRemove({ _id: contactId });

const updateStatusContact = (contactId, { favorite }) => {
  return Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
};

export {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
