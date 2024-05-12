import {pool} from '../db/db.js';
export default class User {

    async createUser(user) {
        const { email, name, password } = user;
      
        const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
        const [existingUser] = await pool.query(checkEmailQuery, [email]);
        //Tengo que capturar estos throw en el controlador para enviar los errores
        if (existingUser.length > 0) {
          throw new Error('El email ya está registrado ❌');
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
}