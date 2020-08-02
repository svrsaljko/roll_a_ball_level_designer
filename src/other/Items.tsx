import React from 'react';
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

const Ruby = (
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
      className="ruby"
    ></div>
    <div
      style={{
        borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
      }}
      className="ruby-after"
    ></div>
  </div>
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

const Emerald = (
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
      className="emerald"
    ></div>
    <div
      style={{
        borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
      }}
      className="emerald-after"
    ></div>
  </div>
);
const Sapphire = (
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
      className="sapphire"
    ></div>
    <div
      style={{
        borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
      }}
      className="sapphire-after"
    ></div>
  </div>
);

const Gold = (
  <div
    style={{
      marginTop: '0.5rem',
    }}
    className="gold"
  ></div>
);
const Silver = (
  <div
    style={{
      marginTop: '0.5rem',
    }}
    className="silver"
  ></div>
);

export {
  Ball,
  BlackHole,
  WhiteHole,
  Diamond,
  Emerald,
  Ruby,
  Sapphire,
  Gold,
  Silver,
};
