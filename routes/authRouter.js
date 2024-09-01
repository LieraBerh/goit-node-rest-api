import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorators/validateBody.js";
import { userSignUpSchema, userSignInSchema } from "../schemas/usersSchemas.js";

const signUpMiddleware = validateBody(userSignUpSchema);

const authRouter = Router();

authRouter.post("/signup", signUpMiddleware, authControllers.signup);

export default authRouter;
