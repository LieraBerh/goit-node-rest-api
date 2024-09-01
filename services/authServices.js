import User from "../models/User.js";

export const signup = (data) => {
  return User.create(data);
};
