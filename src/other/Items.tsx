import React from 'react';
import '../css/items.css';

const BALL_SIZE = 10;

// DRAW FUNCTIONS

const createDiamondCutShape = (color: string) => {
  return (
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
          borderColor: `transparent transparent ${color} transparent`,
          width: `${BALL_SIZE}px`,
        }}
        className="diamond"
      ></div>
      <div
        style={{
          borderWidth: `${1.4 * BALL_SIZE}px ${BALL_SIZE}px 0 ${BALL_SIZE}px`,
          borderColor: `${color} transparent transparent transparent`,
        }}
        className="diamond-after"
      ></div>
    </div>
  );
};

const createCircleShape = (color: string, className?: string) => {
  return (
    <div
      className={className}
      style={{
        height: `2rem`,
        width: `2rem`,
        backgroundColor: `${color}`,
        borderRadius: '50%',
        display: 'inline-block',
      }}
    ></div>
  );
};

const createEnemy = (color: string) => {
  return (
    <div
      style={{
        boxShadow: `0 0 0 0.2rem ${color}, 0 0.2rem 0 0.2rem ${color},-0.5rem 0.3rem 0 0.1rem ${color}, 0.5rem 0.3rem 0 0.1rem ${color},-0.6rem -0.6rem 0 0 ${color}, 0.6em -0.6rem 0 0 ${color}, -0.4rem -0.4rem 0 0 ${color},0.4rem -0.4rem 0 0 ${color}, -0.6rem -0.2rem 0 0 ${color}, -0.4rem -0.2rem 0 0 ${color},0.4rem -0.2rem 0 0 ${color}, 0.6rem -0.2rem 0 0 ${color}, -0.8rem 0 0 0 ${color},-0.6rem 0 0 0 ${color}, 0.6rem 0 0 0 ${color}, 0.8rem 0 0 0 ${color}, -1rem 0.2rem 0 0 ${color},-0.8rem 0.2rem 0 0 ${color}, 0.8rem 0.2rem 0 0 ${color}, 1rem 0.2rem 0 0 ${color},-1rem 0.4rem 0 0 ${color}, 1rem 0.4rem 0 0 ${color}, -1rem 0.6rem 0 0 ${color},-0.6rem 0.6rem 0 0 ${color}, 0.6rem 0.6rem 0 0 ${color}, 1rem 0.6rem 0 0 ${color},-0.4rem 0.8rem 0 0 ${color}, -0.2rem 0.8rem 0 0 ${color}, 0.2rem 0.8rem 0 0 ${color},0.4rem 0.8rem 0 0 ${color}`,
        background: `${color}`,
        width: ' 0.2rem',
        height: '0.2rem',
        overflow: 'hidden',
      }}
    ></div>
  );
};

//

// BALLS

const DarkRedBall = createCircleShape('darkRed');
const IceBall = createCircleShape('#dcf3ff');
const NeonBlueBall = createCircleShape('#1b03a3');

//

// DOOR

const BlackDoor = createCircleShape('black', 'black-door');
const GoldDoor = createCircleShape('#ffd700');
const IceDoor = createCircleShape('#396d7c');

//

// ITEMS

const Ruby = createDiamondCutShape('#e0115f');
const Diamond = createDiamondCutShape('#b9f2ff');
const Emerald = createDiamondCutShape('#50c878');
const Sapphire = createDiamondCutShape('#0f52ba');

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
//

// ENEMY
const NeonGreenEnemy = createEnemy('#39ff14');
const NeonRedEnemy = createEnemy('#b92e34');
const NeonBlueEnemy = createEnemy('#1b03a3');

//
export {
  DarkRedBall,
  IceBall,
  NeonBlueBall,
  BlackDoor,
  GoldDoor,
  IceDoor,
  Diamond,
  Emerald,
  Ruby,
  Sapphire,
  Gold,
  Silver,
  NeonGreenEnemy,
  NeonRedEnemy,
  NeonBlueEnemy,
};
