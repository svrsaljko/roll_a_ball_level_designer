import React from 'react';
import { FIELD_HEIGHT, FIELD_WIDTH } from './Constants';
import '../css/items.css';

const BALL_SIZE = 10;

const Ball = (
  <div
    style={{
      height: `2rem`,
      width: `2rem`,
      backgroundColor: 'darkRed',
      borderRadius: '50%',
      display: 'inline-block',
    }}
  ></div>
);

const BlackHole = <div className="black-hole"></div>;

const WhiteHole = (
  <div
    style={{
      height: `2rem`,
      width: `2rem`,
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'inline-block',
      marginTop: '0.5rem',
    }}
  ></div>
);

const Diamond = (
  <div
    style={{
      position: 'absolute',
    }}
  >
    <div
      style={{
        borderWidth: `0 ${BALL_SIZE / 2}px ${BALL_SIZE / 2}px ${
          BALL_SIZE / 2
        }px`,

        width: `${BALL_SIZE}px`,
      }}
      className="diamond"
    ></div>
    <div
      style={{
        borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
      }}
      className="diamond-after"
    ></div>
  </div>
);

export { Ball, BlackHole, WhiteHole, Diamond };
