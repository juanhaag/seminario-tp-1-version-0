import { pool } from "../db/db.js";

export default class ActionGroup {
    async createActionGroup(actionGroup) {
        const { actionId, groupId } = actionGroup;
        const checkActionGroupQuery = "SELECT * FROM groups_actions WHERE action_id = ? AND group_id = ?";
        const [existingActionGroup] = await pool.query(checkActionGroupQuery, [actionId, groupId]);
        if (existingActionGroup.length > 0) {
            throw new Error("La acción ya está asignada al grupo ❌");
        }

        const createActionGroupQuery = "INSERT INTO groups_actions (action_id, group_id) VALUES (?, ?)";
        const values = [actionId, groupId];

        try {
            const [result] = await pool.query(createActionGroupQuery, values);
            return result.insertId;
        } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
                throw new Error("La acción ya está asignada al grupo ❌");
            }
            throw err;
        }
    }
    async getActionGroups() {
        const query = "SELECT * FROM groups_actions";
        try {
            const [rows] = await pool.query(query);
            return rows;
        } catch (err) {
            throw err;
        }
    }
    async getActionGroupById(id) {
        const query = "SELECT * FROM groups_actions WHERE id = ?";
        const value = [id];
        const [rows] = await pool.query(query, value);
        return rows;
    }
    async deleteActionGroup(id) {
        const query = "DELETE FROM groups_actions WHERE id = ?";
        const value = [id];
        const [rows] = await pool.query(query, value);
        return rows;
    }
}