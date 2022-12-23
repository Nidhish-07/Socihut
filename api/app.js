const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv").config()
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')

const postRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const authRoute = require("./routes/auth")

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(morgan("common"))

app.use('/', postRoute);
app.use('/api/users', usersRoute);
app.use("/api/auth", authRoute)

const port = process.env.PORT || 3000


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Connected")
})
app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
})

module.exports = app;
