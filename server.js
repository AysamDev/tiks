const express = require('express')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/crm_project");
const path = require('path')
const api = require('./server/routes/api')
const port = 4200
const app = express()

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
app.use(express.json())
    app.use('/',api)


app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})