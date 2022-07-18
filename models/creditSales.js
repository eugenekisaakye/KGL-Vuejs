const mongoose = require('mongoose');

const creditSalesTemplate = new mongoose.Schema({
    buyersName:{
        type:string,
        required:true,
    },
    nationalId:{
        type:string,
        required:true,
        minlength:14,
    },
    location:{
        type:string,
        required:true,
        minLength:2,
    },
    phoneNumber:{
        type:Number,
        required:true,
        minLength:10,
    },
    ammountDue:{
        type:Number,
        required:true,
        minLength:3,
    },
    agentName:{
        type:string,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
    },
    nameOfProduce:{
        type:string,
        required:true,
        minLength:2,
    },
    typeOfProduce:{
        type:string,
        required:true,
        minLength:2,
    },
    tonnage:{
        type: Number,
        required:true,
    },
    dateOfDispach:{
        type: Date,
        required:true,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', creditSalesTemplate);