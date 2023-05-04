const { HttpError } = require("../helpers/index");

const { wrapperControlers } = require("../utils/index");

const { Contact } = require("../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const {page = 1, limit = 20,favorite = true} = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({owner},{skip, limit},{favorite}).populate("owner", "name email");
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Book with ${contactId} not found`);
  }
  res.json(result);
};

const postNewContact = async (req, res) => {
  const {_id: owner} = req.user;
  const result = await Contact.create({...req.body, owner});
  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Book with ${contactId} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with ${contactId} not found`);
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with ${contactId} not found`);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: wrapperControlers(getAllContacts),
  getById: wrapperControlers(getById),
  postNewContact: wrapperControlers(postNewContact),
  deleteContactById: wrapperControlers(deleteContactById),
  updateContactById: wrapperControlers(updateContactById),
  updateStatusContact: wrapperControlers(updateStatusContact),
};