const express = require('express');
const router = express.Router();

const Notice = require('../models/Notices')

router.get('/getNotices', (req, res) => {
    Notice.find()
        .then(allNotices => res.json(allNotices))
        .catch(err => console.log('Error', err))
})

router.get('/getOneNotice/:id', (req, res) => {
    Notice.findById(req.params.id)
        .then(theNotice => res.json(theNotice))
        .catch(err => console.log('Error', err))
})

router.post('/postNotice', (req, res) => {
    Notice.create(req.body)
        .then(theNewNotice => res.json(theNewNotice))
        .catch(err => console.log('Error', err))
})

module.exports = router