const express = require("express");
const router = express.Router();
const userTemplatecopy = require('../models/user')

router.post('/signup',(request,response) =>{
    const signedUpUser = new userTemplatecopy({
        fullName:request.body,fullName,
        email:request.body,email,
        position:request.body,position,
        password:request.body,password,
    })
})


module.exports = router