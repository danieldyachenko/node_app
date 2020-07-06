const {Router, json} = require('express')
const Tasks = require('../models/list')

const router = Router()
const jsonParser = json();

router.get('/list', async (req, res) => {
    const tasks = await Tasks.find({})
    res.send(tasks)
})

router.post('/task', jsonParser, async (req, res) => {

    const tasks = new Tasks({
        text: req.body.text,
        isPerformed: req.body.isPerformed,
        isTagged: req.body.isTagged,
        date: req.body.date
    })

    await tasks.save(err => {
        if (err) return console.log(err);
        res.send(tasks)
    })
})

module.exports = router