import mongoose from "mongoose";

const triviaItemSchema = new mongoose.Schema({
  _id:{
    type: Number,
    unique: true,
    required: true
  },
  question: {
    type: String,
    unique: true,
    required: true
  },
  answer: {
    type: String,
    unique: true,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  }
}, {collection: 'triviaItems'});

const TriviaItem = mongoose.model('TriviaItem', triviaItemSchema);

export default TriviaItem;