const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('./src/routes/user');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRoute);





app.listen(process.env.port || port, () => {
    console.log(`Server Started on port ${port}`);
});