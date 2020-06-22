import express from 'express';
import TriviaItem from '../models/triviaItems';
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('questions and answers');
  TriviaItem.find()
    .then(function(docs) {
      res.send(docs);
    })
});

router.get('/:id', function(req, res, next) {
  TriviaItem.findById(req.params.id)
    .then(function(doc) {
      res.send(doc)
    })
})

router.delete('./:id', async function(req, res, next) {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
})

export default router;