import {pool} from '../db/db.js';

export default class UserGroup {

    async crateUserGroup(userGroup){
        
        const {userId, groupId} = userGroup;
        
        const checkUserGroupQuery = 'SELECT * FROM users_groups WHERE user_id = ? AND group_id = ?';
        const [existingUserGroup] = await pool.query(checkUserGroupQuery, [userId, groupId]);
        
        if(existingUserGroup.length > 0){
            throw new Error('El usuario ya pertenece a ese grupo ❌');
        }
        
        const createUserGroupQuery = 'INSERT INTO users_groups (user_id, group_id) VALUES (?, ?)';
        const values = [userId, groupId];
        
        try {
            const [result] = await pool.query(createUserGroupQuery, values);
            return result.insertId;
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new Error('El usuario ya pertenece a ese grupo ❌');
            }
            throw err;
        }
    }

}