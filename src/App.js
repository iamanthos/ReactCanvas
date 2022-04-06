import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [list, setList] = useState([]);

  const handle = (value) => {
    setTextValue(value);
  };

  const buttonClick = () => {
    let a = [...list, textValue];
    setList(a);
    setTextValue('');
  };

  const deleteListItem = (i) => {
    console.log(i);
    const updatedItem = [...list].filter((item, index) => {
      console.log('index', index);
      if(index !== i) return item;
    });
    // console.log(list)
    // const updatedItem = [...list].splice(i,1);
    console.log('updatedItem', updatedItem);
    setList(updatedItem);
  };

  return (
    <>
      <div>
        <h1>TO DO APP</h1>
      </div>
      <div>
        <input
          type="text"
          value={textValue}
          onChange={(e) => handle(e.target.value)}
        />
        <input type="button" value="Add" onClick={buttonClick} />
      </div>
      <div>
        {list.map((a, i) => {
          return (
            <>
              <li>{a}</li>
              <input
                type="button"
                value="Delete"
                onClick={() => deleteListItem(i)}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
