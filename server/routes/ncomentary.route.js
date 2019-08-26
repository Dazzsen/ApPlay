const express = require('express')
const router = express.Router()
const User = require("../models/User")
const mongoose = require('mongoose')


const Ncomentary = require('../models/N-comentaris')

router.get('/getNcomentarys', (req, res) => {
  Ncomentary.find()
    .then(allComentarys => res.json(allComentarys))
    .catch(err => console.log('Error', err))
})

router.get('/getOneNcomentary/:id', (req, res)=>{
  Ncomentary.findById(req.params.id)
    .then(theNcometary => res.json(theNcometary))
    .catch(err => console.log('Error', err))
})

router.post('/postNcomentary', (req, res)=>{

var newId = new mongoose.mongo.ObjectId(req.body.user.data._id)

  Ncomentary.create({comentary:req.body.NewComentary.comentary, user: newId})
    .then(newNcomentary => {
      if(req.body.user) {

         User.findByIdAndUpdate(req.body.user.data._id , {$push: {comentarios: newNcomentary}}, {new: true})
         .then(user => {
  
           res.json({user, newNcomentary})
         })
      } else {

        res.json(newNcomentary)
      }
    
   
    })
    .catch(err => console.log('Error', err))
})

module.exports = router