const express = require('express');
const {uuid} = require('uuidv4');
const TriviaItem = require('../models/triviaItems');
var router = express.Router();


/* GET all trivia items. */
router.get('/', (req, res, next) => {
  // res.send('questions and answers');
  TriviaItem.find()
    .then((triviaItems) => {
      res.status(200).json(triviaItems)
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
});

/* GET trivia item by ID. */
router.get('/:id', (req, res, next) => {
  TriviaItem.findById(req.params.id)
    .then((triviaItem) => {
      if(!triviaItem) {
        res.status(404).json({
          message: 'item not found'
        })
      } else {
        res.status(200).json(triviaItem)
      }
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
})

/* DELETE trivia item by ID. */
router.delete('/:id', (req, res, next) => {
  TriviaItem.findByIdAndDelete(req.params.id)
    .then((removedTriviaItem) => {
      res.status(200).json(removedTriviaItem)
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
})

/* POST new trivia item. */
router.post('/', (req, res, next) => {
  let itemInput = req.body;
  let newItem = new TriviaItem(itemInput);

  newItem.save()
    .then((result) => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
})

/* DELETE all trivia items. */
router.delete('/', (req,res, next) => {
  TriviaItem.deleteMany()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
})

/* UPDATE trivia item by ID. */
router.put('/:id', (req, res, next) => {
  TriviaItem.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(400).json({
        message: "Bad Request",
        err: err
      });
    })
})


module.exports = router;