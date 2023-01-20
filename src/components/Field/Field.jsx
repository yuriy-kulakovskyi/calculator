import React, { useEffect } from 'react';
import './Field.scss';

const Field = props => {
  let inputValue = props.inputValue;

  useEffect(() => {
    inputValue === 0 ? document.querySelector(".field__result").style.display = 'none' : document.querySelector(".field__result").style.display = 'block';
  }, [inputValue]);

  return (
    <main className="field">
      <div className="field__container content">
        <h1 className="field__zero">0</h1>

        <input 
          type="text" 
          className="field__calculation" 
          ref={props.inputRef}
          disabled
        />

        <div className="field__result">{inputValue}</div>
      </div>
    </main>
  );
}

export default Field;