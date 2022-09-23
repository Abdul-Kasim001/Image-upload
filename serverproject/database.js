'use strict';
const mongoose =require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://kasim:123456kasi@cluster0.wj30r.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    }).then(() => console.log('Connected to Mongodb......'));
}