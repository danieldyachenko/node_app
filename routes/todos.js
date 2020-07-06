const {Router} = require('express')
const todo = require('../models/todo')

const router = Router()

router.get('/todos', async (req, res) => {
    const todos = await todo.find({})
    console.log(todos)
    res.send(todos)
})

router.get('/create', (req, res) => {
    console.log('bla bla')
})

module.exports = router