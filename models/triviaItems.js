import mongoose from "mongoose";

const triviaItemSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  answer: {
    type: String,
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