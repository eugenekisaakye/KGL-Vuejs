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
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router