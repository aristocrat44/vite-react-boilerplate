import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../Store';

const App = () => {
  const { todo_ } = useStore();

  const [newTodo, setNewTodo] = useState('');
  return (
    <>
      <h1>Hello world !</h1>
      <div>
        {todo_.todoArr?.map((each, i) => (
          <span style={{ paddingLeft: 20 }} key={i}>
            {each}
          </span>
        ))}
      </div>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          todo_.add(newTodo);
          setNewTodo('');
        }}
      >
        Add
      </button>
      <Link to="/about">Go to about</Link>
    </>
  );
};

export default observer(App);
