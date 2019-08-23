const express = require('express')
const router = express.Router();

const Game = require('../models/Game')

router.get('/getGames', (req, res) => {
    Game.find()
      .then(allGames => res.json(allGames))
      .catch(err => console.log('Error', err))
})

router.get('/getOneGame/:id', (req, res) => {
    Game.findById(req.params.id)
      .then(theGame => re-json(theGame))
      .catch(err => console.log('Error', err))
})

router.post('/postGame', (req, res) => {
    Game.create(req.body)
      .then(newGame => res.json(newGame))
      .catch(err => console.log('Error', err))
})

module.exports = router