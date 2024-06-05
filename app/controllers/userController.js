import User from "../models/userModel.js";

const createUser = async (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).send("Todos los campos son obligatorios");
  }
  try {
    const newUser = new User();
    await newUser.createUser({ email, name, password });
    res.status(200).json({ message: "Usuario creado correctamente✅" });
  } catch (err) {
    res.status(500).send({ error: err.message, code: "U001" });
  }
};
const getUsers = async (req, res) => {
  try {
    const user = new User();
    const allUsers = await user.getUsers();
    res.json(allUsers);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al obtener usuarios", code: "U002" });
  }
};
const getUser = async (req, res) => {
  const { pid } = req.params;
  console.log(pid);
  try {
    const user = new User();
    const userById = await user.getUserById(pid);
    res.json(userById);
  } catch (error) {
    res.send({ error, code: "U003" }).status(500);
  }
};
const getUserGroupsAndActions = async (req, res) => {
  const { id } = req.body; 
  try {
    const user = new User();
    const groupsAndActions = await user.getUserGroupsAndActions(id);
    res.json(groupsAndActions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = new User();
    await user.deleteUser(id);
    res.json({ message: "Usuario eliminado correctamente✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
const updateUser = async (req, res) => {
  const { name, password,userId } = req.body;
  try {
    const user = new User();
    await user.updateUser(userId, { name, password });
    res.json({ message: "Usuario actualizado correctamente✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export default { createUser, getUsers, getUser, getUserGroupsAndActions, deleteUser, updateUser};
