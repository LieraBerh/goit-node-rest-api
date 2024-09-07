import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorators/validateBody.js";
import { userSignUpSchema, userSignInSchema } from "../schemas/usersSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const signUpMiddleware = validateBody(userSignUpSchema);

const signInMiddleware = validateBody(userSignInSchema);

const authRouter = Router();

authRouter.post("/register", signUpMiddleware, authControllers.signup);

authRouter.post("/login", signInMiddleware, authControllers.signin);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.signout);

export default authRouter;
