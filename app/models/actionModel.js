import { pool } from "../db/db.js";

export default class Action {
    async createAction(action) {
        const { name } = action;
        console.log(name);
        const checkNameQuery = "SELECT * FROM actions WHERE name = ?";
        const [existingAction] = await pool.query(checkNameQuery, [name]);
        if (existingAction.length > 0) {
            throw new Error("El nombre de acción ya está registrado ❌");
        }

        const createActionQuery = "INSERT INTO actions (name) VALUES (?)";
        const values = [name];

        try {
            const [result] = await pool.query(createActionQuery, values);
            return result.insertId;
        } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
                throw new Error("El nombre de acción ya está registrado ❌");
            }
            throw err;
        }
    }
    async getActions() {
        const query = "SELECT * FROM actions";
        try {
            const [rows] = await pool.query(query);
            return rows;
        } catch (err) {
            throw err;
        }
    }
    async getActionById(id) {
        const query = "SELECT * FROM actions WHERE id = ?";
        const value = [id];
        const [rows] = await pool.query(query, value);
        return rows;
    }
    async deleteAction(id) {
        const query = "DELETE FROM actions WHERE id = ?";
        const value = [id];
        const [rows] = await pool.query(query, value);
        return rows;
    }
}
