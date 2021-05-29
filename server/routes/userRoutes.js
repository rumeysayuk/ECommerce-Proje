const express= require("express");
const router=express.Router;
import  {signIn,signUp} from "../controllers/usersController"

router.post("/signIn",signIn);
router.post("/signUp",signUp);
