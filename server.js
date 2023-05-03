const express = require("express");
const app = express();
const db = require("./config/connection");
const sequelize = require("./config/connection");

const PORT = precoess.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

sequelize.sync()