const mongoose = require('mongoose');

const userTemplate = new mongoose.Schema({
    fullName:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
    },
    position:{
        type:string,
        required:true,
    },
    pasword:{
        type:string,
        required:true,
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userTemplate);