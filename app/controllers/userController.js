import User from '../models/userModel.js';

const createUser = async (req, res) => {

    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).send('Todos los campos son obligatorios');
    } try {
        const newUser = new User();
        await newUser.createUser({ email, name, password });
    }
    catch (err) {
        res.status(500).send({error:err.message, code:'U001'});
    }
    res.status(201).send("Usuario creado correctamente✅");

}
const getUsers = async (req, res) => {
    try {
        const user = new User();
       const allUsers = await user.getUsers();
        res.json(allUsers);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener usuarios',code:'U002' });
    }
};
const getUser = async (req,res)=>{
    const{pid}=req.params;
    console.log(pid);
    try {
        const user = new User();
        const userById = await user.getUserById(pid);
        res.json(userById);
    } catch (error) {
        res.send({error, code:'U003'}).status(500);
    }
}

export default { createUser, getUsers, getUser }