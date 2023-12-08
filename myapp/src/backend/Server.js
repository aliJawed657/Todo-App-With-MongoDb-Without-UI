const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express')
const newMon = require('./Mongoose')
const app = express()

const Port = 8000;

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://AliJani:jani@cluster0.whocj5e.mongodb.net/news')

    .then(() => {
        console.log("mongodb connected")
    }).catch((err) => {
        console.log(err)
    })

app.get('/get', (req, res) => {
    newMon.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    newMon.create({
        task: task
    }).then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    newMon.findByIdAndDelete({ _id: id })
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})


app.listen(Port, () => {
    console.log("server running")
})