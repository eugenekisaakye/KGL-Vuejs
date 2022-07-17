const express = require("express");
const router = express.Router();
const userTemplatecopy = require('../models/user')

router.post('/signup',(request,response) =>{
    const signedUpUser = new userTemplatecopy({
        
    })
})


module.exports = router