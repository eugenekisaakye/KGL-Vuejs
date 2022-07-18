const mongoose = require('mongoose');

const procurementTemplate = new mongoose.Schema({
    nameOfProduce:{
        type:alpha-numeric,
        required:true,
    },
    typeOfProduce:{
        type:string,
        required:true,
        minLength:2,
    },
    date:{
        type:Date,
        required:true,
    },
    timeOfProduce:{
        type: Time,
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
    nameOfDealer:{
        type:string,
        required:true,
        minLength:2,
    },
    branch:{
        type:string,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        minLength:10,
    },
});

module.exports = mongoose.model('User', procurementTemplate);