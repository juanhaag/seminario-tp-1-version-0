import  {createPool} from 'mysql2/promise';

export const pool = createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'seminario',
        port: 3306
    }
)