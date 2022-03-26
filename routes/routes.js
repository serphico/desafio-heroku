const {Router} = require('express');


const chatRoute = Router();
const loginRoute = Router();

chatRoute.get('/', (req,res) => {

    res.render('./layouts/index.pug')
})



loginRoute.get('/', (req,res) => {

    res.render('./layouts/login.pug')
})

loginRoute.post('/', (req,res) => {
    console.log(req.body.name)
    req.session.username = req.body.name
    res.redirect('/chat')
})

module.exports = {chatRoute,loginRoute};