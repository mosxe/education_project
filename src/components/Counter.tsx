import {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return <div>
    {count}
    <div>
      <button className={classes.btn} onClick={() => setCount(count + 1)}>INC</button>
    </div>
  </div>
}