import { Router } from "express";
import actionController from "../controllers/actionController.js";
const router = Router();    
router.get("/action", (req, res) => {
    actionController.getActions(req, res);
    
})
router.post("/action", (req, res) => {
    actionController.createAction(req, res);
})
router.put("/action", (req, res) => {
    
})
router.delete("/action", (req, res) => {
    
})
export default router;
