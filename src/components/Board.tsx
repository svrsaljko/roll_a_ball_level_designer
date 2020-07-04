import React from 'react';
import Background from '../images/background.png';

export default function Board() {
  return (
    <div
      style={{
        marginTop: '3rem',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: '400px',
          width: '270px',
        }}
      ></div>
    </div>
  );
}
