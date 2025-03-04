import express from "express";
import { 
    getUser, 
    getUserById 
} from "../controller/UserControler.js";

const router = express.Router();

router.get("/users", getUser)
router.get("/users/:id", getUserById)

export default router;