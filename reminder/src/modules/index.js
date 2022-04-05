const express = require('express')
const router = express.Router()

const Reminder = require('./reminder/reminder')

router
    .get('/', Reminder.GET)
    .post('/post', Reminder.POST)
    .post('/delete/:id', Reminder.DELETE)
    .get('/edit/:id' , Reminder.UPDATE_GET)
    .post('/update/:id' , Reminder.UPDATE)

module.exports = router