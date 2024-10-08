import Joi from "joi";

export const userSignUpSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

export const userSignInSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});
