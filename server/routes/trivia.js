import express from 'express';
import {uuid} from 'uuidv4';
import TriviaItem from '../models/triviaItems';
var router = express.Router();


/* GET all trivia items. */
router.get('/api/', (req, res, next) => {
  // res.send('questions and answers');
  TriviaItem.find()
    .then((triviaItems) => {
      res.status(200).json({
        status: 'success',
        trivia: triviaItems
      })
    })
    .catch(err => {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    })
});

/* GET trivia item by ID. */
router.get('/api/:id', (req, res, next) => {
  TriviaItem.findById(req.params.id)
    .then((triviaItem) => {
      res.status(200).json({
        status: 'success',
        trivia: triviaItem
      })
    })
    .catch(err => {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    })
})

/* DELETE trivia item by ID. */
router.delete('/api/:id', (req, res, next) => {
  TriviaItem.findByIdAndDelete(req.params.id)
    .then((removedTriviaItem) => {
      res.status(200).json({
        status: 'success',
        trivia: removedTriviaItem
      })
    })
    .catch(err => {
      res.status(404).json({
        status:'fail',
        message: err
      })
    })
})

/* POST new trivia item. */
router.post('/api/', (req, res, next) => {
  let itemInput = req.body;
  let newItem = new TriviaItem(itemInput);

  newItem.save()
    .then((result) => {
      res.status(201).json({
        status: 'success',
        id: result._id
      })
    })
    .catch(err => {
      res.status(404).json({
        status:'fail',
        message: err
      })
    })
})

/* DELETE all trivia items. */
router.delete('/api/', (req,res, next) => {
  TriviaItem.deleteMany()
    .then((result) => {
      res.status(200).json({
        status: 'success',
        trivia: result
      })
    })
    .catch(err => {
      res.status(404).json({
        status:'fail',
        message: err
      })
    })
})


export default router;