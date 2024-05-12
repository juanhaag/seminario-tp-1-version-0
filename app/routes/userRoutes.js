import { Router } from "express";
import userController from '../controllers/userController.js';
const userRouter = Router();

userRouter.get("/user", (req, res) => {
    userController.getUsers(req,res);
})
userRouter.get("/user/:pid", (req, res) => {
    userController.getUser(req,res);
})
userRouter.post("/user", (req, res) => {
    userController.createUser(req, res)
}
);
userRouter.put("/user/:pid", (req, res) => {


})
userRouter.delete("/user/:pid", (req, res) => {
    userController()

})
export default userRouter;