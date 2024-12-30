import express from "express";
import userSignUp from "../Controllers/UserSignUp.js";

const router = express.Router();

router.post("/signup", userSignUp);

export default router;
