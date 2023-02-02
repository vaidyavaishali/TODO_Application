const express = require("express")
const bodyparser = require("body-parser")
const TodoData = require("../models/todoModels")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const todo_routes = express.Router()
const Auth = "Auth"
todo_routes.use(bodyparser.json())

todo_routes.post("/todopost", async (req, res) => {
    try {
        console.log(req.body)
        const todo = await TodoData.create({
            activity: req.body.activity,
            Status: req.body.Status,
            user: req.user
        })
        res.status(200).json({
            status: "success",
            todo
        })

    } catch (e) {
        res.status(400).json({
            status: 'Failed',
            message: e.message
        })
    }
})

todo_routes.get("/todopost", async (req, res) => {
    try {
        const todo = await TodoData.find({user:req.user})
        res.status(200).json({
            status: "ok",
            todo
        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })

    }

})

module.exports = todo_routes