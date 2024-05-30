import ActionGroup from "../models/actionGroupModel.js";

const createActionGroup = async (req, res) => {
    const { actionId, groupId } = req.body;
    if (!actionId || !groupId) {
        return res.status(400).send("El id de acción y de grupo son obligatorios");
    }
    try {
        const newActionGroup = new ActionGroup();
        await newActionGroup.createActionGroup({ actionId, groupId });
        res.status(201).json({message:"Acción añadida al grupo correctamente✅"});
    } catch (err) {
        res.status(500).send({ error: err.message, code: "AG001" });
    }
}
const getActionGroups = async (req, res) => {
    try {
        const actionGroup = new ActionGroup();
        const allActionGroups = await actionGroup.getActionGroups();
        res.json(allActionGroups);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al obtener acciones de grupos", code: "AG002" });
    }
}
const getActionGroup = async (req, res) => {
    const { pid } = req.params;
    try {
        const actionGroup = new ActionGroup();
        const actionGroupById = await actionGroup.getActionGroupById(pid);
        res.json(actionGroupById);
    } catch (error) {
        res.send({ error, code: "AG003" }).status(500);
    }
}
export default { createActionGroup, getActionGroups, getActionGroup };

