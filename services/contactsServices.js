import Contact from "../models/Contact.js";

const listContacts = () => Contact.find();

const getContactById = (contactId) => Contact.findOne({ _id: contactId });

const addContact = (data) => Contact.create(data);

const updateContact = (contactId, data) =>
  Contact.findByIdAndUpdate({ _id: contactId }, data);

const removeContact = (contactId) =>
  Contact.findByIdAndDelete({ _id: contactId });

const updateStatusContact = (contactId, { favorite }) => {
  return Contact.findByIdAndUpdate(contactId, { favorite });
};

export {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
