import Action from "../models/actionModel.js";

const createAction = async (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (!name) {
        return res.status(400).send("El nombre de la acción es obligatorio");
    }
    try {
        const newAction = new Action();
        await newAction.createAction({ name });
        res.status(201).json({message:"Acción creada correctamente✅",name});
    
    } catch (err) {
        res.status(500).send({ error: err.message, code: "A001" });
    }
}
const getActions = async (req, res) => {
    try {
        const action = new Action();
        const allActions = await action.getActions();
        res.json(allActions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al obtener acciones", code: "A002" });
    }
}
const getAction = async (req, res) => {
    const { pid } = req.params;
    try {
        const action = new Action();
        const actionById = await action.getActionById(pid);
        res.json(actionById);
    } catch (error) {
        res.send({ error, code: "A003" }).status(500);
    }
}
export default { createAction, getActions, getAction };