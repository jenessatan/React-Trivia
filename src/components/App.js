import React from 'react';
import '../styles/App.css';
import InputForm from './InputForm';
import VisibleQuestionList from '../containers/VisibleQuestionList';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <InputForm />
      <VisibleQuestionList />
    </div>
  );
}

export default App;
