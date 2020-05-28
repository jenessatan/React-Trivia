import React from 'react';
import '../styles/App.css';
import InputForm from './InputForm';
import QuestionList from './QuestionList';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <InputForm />
      <QuestionList />
    </div>
  );
}

export default App;
