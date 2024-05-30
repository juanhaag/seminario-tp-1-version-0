import { Router } from "express";
import groupActionController from "../controllers/actionGroupController.js";
const router = Router();
router.get("/group_action", (req, res) => {
    groupActionController.getActionGroups(req, res);
    
})
router.post("/group_action", (req, res) => {
    groupActionController.createActionGroup(req, res);
})
router.put("/group_action", (req, res) => {
    
})
router.delete("/group_action", (req, res) => {
    
})
export default router;