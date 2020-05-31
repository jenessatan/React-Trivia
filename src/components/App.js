import React from 'react';
import '../styles/App.css';
import InputFormContainer from '../containers/InputFormContainer';
import VisibleQuestionList from '../containers/VisibleQuestionList';

function App() {
  return (
    <div className="App">
      <h1>React Trivia</h1>
      <InputFormContainer />
      <VisibleQuestionList />
    </div>
  );
}

export default App;
