import express from 'express';
import {uuid} from 'uuidv4';
import TriviaItem from '../models/triviaItems';
var router = express.Router();


/* GET all trivia items. */
router.get('/', (req, res, next) => {
  // res.send('questions and answers');
  TriviaItem.find()
    .then((triviaItems) => {
      res.status(200).json({
        status: 'success',
        trivia: triviaItems
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
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
        res.status(200).json({
          status: 'success',
          trivia: triviaItem
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
        err: err
      });
    })
})

/* DELETE trivia item by ID. */
router.delete('/:id', (req, res, next) => {
  TriviaItem.findByIdAndDelete(req.params.id)
    .then((removedTriviaItem) => {
      res.status(200).json({
        status: 'success',
        trivia: removedTriviaItem
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
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
      res.status(201).json({
        status: 'success',
        id: result._id
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
        err: err
      });
    })
})

/* DELETE all trivia items. */
router.delete('/', (req,res, next) => {
  TriviaItem.deleteMany()
    .then((result) => {
      res.status(200).json({
        status: 'success',
        trivia: result
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
        err: err
      });
    })
})

/* UPDATE trivia item by ID. */
router.put('/:id', (req, res, next) => {
  TriviaItem.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        status: 'success',
        trivia: result
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error code 500: Failed to process request",
        err: err
      });
    })
})


export default router;