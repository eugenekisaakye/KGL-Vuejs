const express = require('express')
const router = express.Router()
const procurement = require('../models/procurement')

router.get('/',(req,res) => {
    res.render('procurement')
})


router.post('/', async (res,req) => {
    try {
        let stock = new procurement(req.body)
        await stock.save(
            console.log(req.body)
            res.redirect('/views/procurement.pug')
        )
    }
    catch (err) {
        res.status(400).render('credit',{ title: 'credit', routeName: 'credits'})
    }
})
module.exports = router;