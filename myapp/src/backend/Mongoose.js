const mongoose = require('mongoose');
const newTodo = new mongoose.Schema({
    task: String
})

const newMon = mongoose.model('newApp', newTodo);
module.exports = newMon;