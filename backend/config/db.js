const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://aashishthakur3069:aldebaran@cluster0.uqkb81a.mongodb.net/Todo').on('open', () => {
    console.log('Mongodb connected');
}).on('error', () => {
    console.log("connection error");
});

module.exports = connection;