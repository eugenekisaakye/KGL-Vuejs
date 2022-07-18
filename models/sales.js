const mongoose = require('mongoose');

const salesTemplate = new mongoose.Schema({
    nameOfProduce:{
        type:string,
        required:true,
    },
    tonnage:{
        type: Number,
        required:true,
    },
    cost:{
        type:Number,
        required:true,
        minLength:3,
    },
    buyersName:{
        type:string,
        required:true,
    },
    agentName:{
        type:string,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type: Time,
        required:true,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', salesTemplate);