import { Router } from "express";
import passport from "passport"; 
import authenticated from "../middlewares/authenticated.middleware.js";
import { loginUser, logoutUser, authStatus, registerUser, setup2FA, verify2FA, reset2FA } from "../controllers/auth.controller.js";
const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(passport.authenticate("local"),loginUser)
router.route("/logout").post(logoutUser)
router.route("/status").get(authStatus)


router.route("/2fa/setup").post(authenticated,setup2FA)
router.route("/2fa/verify").post(authenticated,verify2FA)
router.route("/2fa/reset").post(authenticated,reset2FA)

export default router;