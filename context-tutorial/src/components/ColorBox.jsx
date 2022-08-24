import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

export default function ColorBox() {
  const { state } = useContext(ColorContext);
  console.log(useContext(ColorContext));

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: state.color,
        }}
      ></div>
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: state.subcolor,
        }}
      ></div>
    </>
  );
}
