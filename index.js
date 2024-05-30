import express from 'express';

import userRouter from './app/routes/userRoutes.js';
import groupRouter from './app/routes/groupRoutes.js';
import userGroupRouter from './app/routes/userGroupRoutes.js';
import actionRouter from './app/routes/actionRoutes.js';
import groupActionRouter from './app/routes/groupActionRoutes.js';
import cors from 'cors';



const app = express();
const PORT = 3001;

//habilitar urlencoded
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(groupRouter);
app.use(userGroupRouter);
app.use(actionRouter);
app.use(groupActionRouter);


app.listen(PORT);

console.log(`Server running on port ${PORT}`);