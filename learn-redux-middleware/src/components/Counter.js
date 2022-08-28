import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';

export default function Counter({ number }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => dispatch(increaseAsync())}>+1</button>
      <button onClick={() => dispatch(decreaseAsync())}>-1</button>
    </div>
  );
}
