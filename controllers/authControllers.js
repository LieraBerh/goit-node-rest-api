import * as authServices from "../services/authServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const signup = async (req, res) => {
  const newUser = await authServices.signup(req.body);
  res.status(201).json({
    email: newUser.email,
  });
};

const signin = async (req, res) => {
  const { token } = await authServices.signin(req.body);

  res.json({
    token,
  });
};

export default {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
};
