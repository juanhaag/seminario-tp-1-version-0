import { Router } from "express";
import userController from '../controllers/userController.js';
const userRouter = Router();

userRouter.get("/user", (req, res) => {
    userController.getUsers(req,res);
})
userRouter.post("/user/group/actions", (req, res) => {
    userController.getUserGroupsAndActions(req,res);
})
userRouter.get("/user/:pid", (req, res) => {
    userController.getUser(req,res);
})
userRouter.post("/user", (req, res) => {
    userController.createUser(req, res)
}
);
userRouter.put("/user", (req, res) => {
userController.updateUser(req,res);

})
userRouter.delete("/user", (req, res) => {
    userController.deleteUser(req,res);

})
export default userRouter;