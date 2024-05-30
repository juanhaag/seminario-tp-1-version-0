import UserGroup from "../models/userGroupModel.js";

const createUserGroup = async (req, res) => {
    const { userId, groupId } = req.body;
    console.log(req.body);
    if (!userId || !groupId) {
        return res.status(400).send("El id de usuario y de grupo son obligatorios");
    }
    try {
        const newUserGroup = new UserGroup();
        await newUserGroup.crateUserGroup({ userId, groupId });
    res.status(201).json({message:"Usuario añadido al grupo correctamente✅"});

    } catch (err) {
        res.status(500).send({ error: err.message, code: "UG001" });
    }
}
export default { createUserGroup };