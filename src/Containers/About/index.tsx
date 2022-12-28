import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../Store/index';
import { observer } from 'mobx-react';

const About = () => {
  const { todo_ } = useStore();
  return (
    <div>
      <h1>This is about</h1>
      <Link to="/">now go to home</Link>
      <p>
        {todo_.todoArr?.map((each, i) => (
          <span style={{ paddingLeft: 20 }} key={i}>
            {each}
          </span>
        ))}
      </p>
    </div>
  );
};

export default observer(About);
