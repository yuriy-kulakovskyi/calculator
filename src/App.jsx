import React, { useState, useRef } from 'react';
import './App.css';
import Field from './components/Field/Field';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  let [inputValue, setInputValue] = useState(0);
  const input = useRef();

  return (
    <div className="App">
      <Header />
      <Field 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        inputRef = {input}
      />
      <Keyboard 
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputRef = {input}
      />
    </div>
  );
}

export default App;
