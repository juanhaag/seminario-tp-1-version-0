import { Router } from "express";
import userGroupController from "../controllers/userGroupController.js";
const router = Router();
router.get("/user_group", (req, res) => {
    
})
router.post("/user_group", (req, res) => {
    userGroupController.createUserGroup(req, res);
    
})
router.put("/user_group", (req, res) => {
    
})
router.delete("/user_group", (req, res) => {
    
})
export default router;