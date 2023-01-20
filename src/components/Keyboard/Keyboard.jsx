import React from 'react';
import './Keyboard.scss';

const Keyboard = props => {
  const inputDigit = (val) => {
    document.querySelector(".field__zero").style.display = "none";
    props.inputRef.current.style.display = 'block';

    if (val.target.innerText === 'AC') {
      props.inputRef.current.value = '';
      props.setInputValue(eval(props.inputRef.current.value));
      props.inputRef.current.style.opacity = '1';
      props.inputRef.current.style.fontSize = '45px';
      props.inputRef.current.nextSibling.style.opacity = '.5';
      props.inputRef.current.nextSibling.style.fontSize = '30px';
      document.querySelector(".field__zero").style.display = "block";
      props.inputRef.current.style.display = 'none';
    } else if (val.target.innerText === '+/-') {
      props.setInputValue(eval(props.inputRef.current.value) * -1);
    } else if (val.target.innerText === '%') {
      props.inputRef.current.value = props.inputRef.current.value / 100;
      props.setInputValue(eval(props.inputRef.current.value));
    } else if (val.target.innerText === '÷') {
      props.inputRef.current.value += '/';
      props.setInputValue(eval(props.inputRef.current.value));
    } else if (val.target.innerText === '×') {
      props.inputRef.current.value += '*';
      props.setInputValue(eval(props.inputRef.current.value));
    } else if (val.target.innerText === '=') {
      props.inputRef.current.style.opacity = '.5';
      props.inputRef.current.style.fontSize = '30px';
      props.inputRef.current.nextSibling.style.opacity = '1';
      props.inputRef.current.nextSibling.style.fontSize = '45px';
    } else if (val.target.innerText === 'Del') {
      if (props.inputRef.current.value.length === 1) {
        document.querySelector(".field__zero").style.display = "block";
        props.inputRef.current.value = props.inputRef.current.value.slice(0, -1);
        props.inputRef.current.style.display = 'none';
        props.setInputValue(eval(props.inputRef.current.value));
      } else {
        props.inputRef.current.value = props.inputRef.current.value.slice(0, -1);
        props.setInputValue(eval(props.inputRef.current.value));
      }
    } else {
      props.inputRef.current.value += val.target.innerText;
      props.setInputValue(eval(props.inputRef.current.value));
    }
  }

  return (
    <div className='keyboard'>
      <div className="keyboard__content content">
        <button className="keyboard__content__button aqua" onClick={inputDigit}>AC</button>
        <button className="keyboard__content__button aqua" onClick={inputDigit}>+/-</button>
        <button className="keyboard__content__button aqua" onClick={inputDigit}>%</button>
        <button className="keyboard__content__button red" onClick={inputDigit}>÷</button>
        <button className="keyboard__content__button" onClick={inputDigit}>7</button>
        <button className="keyboard__content__button" onClick={inputDigit}>8</button>
        <button className="keyboard__content__button" onClick={inputDigit}>9</button>
        <button className="keyboard__content__button red" onClick={inputDigit}>×</button>
        <button className="keyboard__content__button" onClick={inputDigit}>4</button>
        <button className="keyboard__content__button" onClick={inputDigit}>5</button>
        <button className="keyboard__content__button" onClick={inputDigit}>6</button>
        <button className="keyboard__content__button red" onClick={inputDigit}>-</button>
        <button className="keyboard__content__button" onClick={inputDigit}>1</button>
        <button className="keyboard__content__button" onClick={inputDigit}>2</button>
        <button className="keyboard__content__button" onClick={inputDigit}>3</button>
        <button className="keyboard__content__button red" onClick={inputDigit}>+</button>
        <button className="keyboard__content__button zero" onClick={inputDigit}>0</button>
        <button className="keyboard__content__button" onClick={inputDigit}>.</button>
        <button className="keyboard__content__button" onClick={inputDigit}>Del</button>
        <button className="keyboard__content__button red" onClick={inputDigit}>=</button>
      </div>
    </div>
  );
}

export default Keyboard;
