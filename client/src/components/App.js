import React from 'react';
import '../styles/App.css';
import QuestionList from './QuestionList.js';
import InputForm from './InputForm';
import LoadingSpinner from './LoadingSpinner';
import DetailsContainer from '../containers/DetailsContainer'
import Snackbar from './Snackbar';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <DetailsContainer />
      <LoadingSpinner />
      <InputForm/>
      <QuestionList />
      <Snackbar />
    </div>
  );
}

export default App;
