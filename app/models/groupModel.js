import { pool } from "../db/db.js";

export default class Group {
    
  async createGroup(group) {
    const { name } = group;

    const checkNameQuery = "SELECT * FROM groups WHERE name = ?";
    const [existingGroup] = await pool.query(checkNameQuery, [name]);
    //Tengo que capturar estos throw en el controlador para enviar los errores
    if (existingGroup.length > 0) {
      throw new Error("El nombre de grupo ya está registrado ❌");
    }

    const createGroupQuery = "INSERT INTO groups (name) VALUES (?)";
    const values = [name];

    try {
      const [result] = await pool.query(createGroupQuery, values);
      return result.insertId;
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        throw new Error("El nombre de grupo ya está registrado ❌");
      }
      throw err;
    }
  }
  async getGroups() {
    const query = "SELECT * FROM groups";
    try {
      const [rows] = await pool.query(query);
      return rows;
    } catch (err) {
      throw err;
    }
  }
  async getGroupById(id) {
    const query = "SELECT * FROM groups WHERE id = ?";
    const value = [id];
    const [rows] = await pool.query(query, value);
    return rows;
  }
  async deleteGroup(id) {
    const query = "DELETE FROM groups WHERE id = ?";
    const value = [id];
    const [rows] = await pool.query(query, value);
    return rows;
  }
}
