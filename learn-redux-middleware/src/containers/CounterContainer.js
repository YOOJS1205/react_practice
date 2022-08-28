import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ increase, decrease }) => {
  const number = useSelector((state) => state.counter);
  return <Counter number={number} />;
};

export default CounterContainer;
// export default connect(
//   (state) => ({
//     number: state.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);
