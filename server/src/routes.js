
const express = require('express')
const routes = express.Router();

const CharController = require("./controllers/userController")
routes.get("/char", CharController.index)
// routes.post("/char", CharController.store)
// routes.get("/char/:id", CharController.show)
// routes.put("/char/:id", CharController.update)
// routes.delete("/char/:id", CharController.destroy)
module.exports = routes;