const aboutRouter = require("express").Router()
const {AboutController} = require("../../controllers")

aboutRouter.get("/", AboutController.readAbout)

module.exports = aboutRouter