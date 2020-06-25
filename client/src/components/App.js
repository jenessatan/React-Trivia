import React from 'react';
import '../styles/App.css';
import QuestionList from './QuestionList.js';
import InputForm from './InputForm';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <InputForm/>
      <QuestionList />
    </div>
  );
}

export default App;
