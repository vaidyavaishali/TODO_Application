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
        // console.log(req.body)
        const todo = await TodoData.create({
            activity: req.body.activity,
            // Status: req.body.Status,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            pause_time: req.body.pause_time,
            Status: req.body.Status,
            time_taken: req.body.time_taken,
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
        const todo = await TodoData.find({ user: req.user })
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

todo_routes.put('/todopost', async (req, res) => {
    try {
        const findByID = await TodoData.findOne({ _id: req.body.id })
        // console.log(findByID.time_taken)
        const update = await TodoData.updateOne({ _id: req.body.id }, { $set: { time_taken: req.body.final_time, Status:req.body.update } })
        // console.log(update)
        const up = await TodoData.findOne({_id: req.body.id})
        console.log(up)
        res.status(200).json({
            status: "success",
            updat:up
        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })

    }
})
module.exports = todo_routes