import { Router } from "express";
import groupController from "../controllers/groupController.js";
const router = Router();
router.get("/groups", (req, res) => {
    groupController.getGroups(req, res);
    
})
router.get("/group/:id", (req, res) => {
    groupController.getGroup(req, res);
})
router.post("/group", (req, res) => {
    groupController.createGroup(req, res);
    
})
router.put("/group", (req, res) => {

    
})
router.delete("/group", (req, res) => {
    
})
export default router;