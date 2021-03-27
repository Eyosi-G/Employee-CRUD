const express = require('express');
const cors = require('cors')
require('./config/db');
const employeeRouter = require('./routes/employee_router');
const app = express();

const port = process.env.PORT | 8080;
app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.listen(port,()=>console.log(`server started on port ${port}`));

