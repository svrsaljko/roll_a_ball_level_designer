import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        borderBottom: '3px solid black',
        backgroundColor: 'black',
        color: 'white',
        height: 'auto',
      }}
    >
      <div
        style={{
          padding: ` 2rem`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            fontSize: `2rem`,
          }}
        >
          R{' '}
          <div
            style={{
              height: `2rem`,
              width: `2rem`,
              backgroundColor: 'darkRed',
              borderRadius: '50%',
              display: 'inline-block',
              marginTop: '0.5rem',
            }}
          >
            {' '}
          </div>
          LL A BALL LEVEL DESIGNER
        </div>
      </div>
    </div>
  );
}
