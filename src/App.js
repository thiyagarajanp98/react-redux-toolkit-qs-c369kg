import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

import { increment, decrement } from './store/counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>&nbsp;
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
