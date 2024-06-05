import {pool} from '../db/db.js';
export default class User {

    async createUser(user) {
      const { email, name, password } = user;
      
      const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
      try {
        const [existingUser] = await pool.query(checkEmailQuery, [email]);
        //Tengo que capturar estos throw en el controlador para enviar los errores
        if (existingUser.length > 0) {
        throw new Error('El email ya está registrado ❌');
        }
      } catch (err) {
        throw err;
      }
      
      const createUserQuery = 'INSERT INTO users (email, name, password) VALUES (?, ?, ?)';
      const values = [email, name, password];
      
      try {
        const [result] = await pool.query(createUserQuery, values);
        return result.insertId;
      } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
        throw new Error('El email ya está registrado ❌');
        }
        throw err; 
      }
      }
    async getUsers(){
        const query = 'SELECT * FROM users';
        try {
            const [rows] = await pool.query(query);
            return rows;
        } catch (err) {
            throw err;
        }
    }

    async getUserById(id){
        const query = 'SELECT * FROM users WHERE id = ?';
        const value = [id];
        const [rows] = await pool.query(query,value);
        return rows;
    }
    async deleteUser(id){
        const query = 'DELETE FROM users WHERE id = ?';
        const value = [id];
        const [rows] = await pool.query(query,value);
        return rows;
    }
    async updateUser(id,user) {
        const {name, password } = user;
        const query = 'UPDATE users SET name = ?, password = ? WHERE id = ?';
        const values = [ name, password, id];
        try {
            const [rows] = await pool.query(query, values);
            return rows;
        } catch (err) {
            throw err;
        }
    }
    async getUserGroupsAndActions(userId) {
      const query = `
          SELECT 
              g.id AS group_id,
              g.name AS group_name,
              a.id AS action_id,
              a.name AS action_name
          FROM 
              users u
          JOIN 
              users_groups ug ON u.id = ug.user_id
          JOIN 
              groups g ON ug.group_id = g.id
          JOIN 
              groups_actions ga ON g.id = ga.group_id
          JOIN 
              actions a ON ga.action_id = a.id
          WHERE 
              u.id = ?;
      `;
      const values = [userId];
      
      try {
          const [rows] = await pool.query(query, values);
          return rows;
      } catch (err) {
          throw err;
      }
  }
}