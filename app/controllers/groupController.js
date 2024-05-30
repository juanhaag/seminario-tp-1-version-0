import Group from "../models/groupModel.js";

const createGroup = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("El nombre del grupo es obligatorio");
  }
  try {
    const newGroup = new Group();
    await newGroup.createGroup({ name });
    res.status(201).json({message:"Grupo creado correctamente✅",name});

  } catch (err) {
    res.status(500).send({ error: err.message, code: "G001" });
  }
};

const getGroups = async (req, res) => {
  try {
    const group = new Group();
    const allGroups = await group.getGroups();
    console.log(allGroups);
    res.json(allGroups);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener grupos", code: "G002" });
  }
};

const getGroup = async (req, res) => {
  const { pid } = req.params;
  try {
    const group = new Group();
    const groupById = await group.getGroupById(pid);
    res.json(groupById);
  } catch (error) {
    res.send({ error, code: "G003" }).status(500);
  }
};
export default { createGroup, getGroups, getGroup };