import React from 'react';
import '../styles/App.css';
import InputFormContainer from '../containers/InputFormContainer';
import QuestionList from './QuestionList.js';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <InputFormContainer />
      <QuestionList />
    </div>
  );
}

export default App;
