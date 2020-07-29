import React from 'react';
import {
  VERTICAL_BRICK_S_HEIGHT,
  VERTICAL_BRICK_M_HEIGHT,
  VERTICAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_WIDTH,
  HORIZONTAL_BRICK_HEIGHT,
} from '../other/Constants';
// import { Brick1, RotatedBrick1 } from '../images';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';

// import  from '../images';
// import Hole from './Hole';
// import Diamond from './Diamond';

interface IProps {
  topWall: boolean;
  leftWall: boolean;
  bottomWall: boolean;
  rightWall: boolean;
  brick: string;
  rotatedBrick: string;
  //   hasHole: boolean;
  //   hasDiamond: boolean;
}

const drawWalls = (props: IProps) => {
  const {
    topWall,
    leftWall,
    bottomWall,
    rightWall,
    brick,
    rotatedBrick,
  } = props;
  const drawLeftAndRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: 0,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />

        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawTopAndBottomWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
            left: 0,
          }}
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${2 * HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawBottomAndRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
            left: `${VERTICAL_BRICK_WIDTH}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${VERTICAL_BRICK_M_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawTopAndRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
            left: 0,
          }}
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawBottomAndLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
            left: 0,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${VERTICAL_BRICK_M_HEIGHT}px`,
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawTopAndLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
            left: 0,
          }}
          src={brick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: 0,
            top: `${HORIZONTAL_BRICK_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_M_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawTopWall = () => {
    return (
      <img
        style={{
          width: `${HORIZONTAL_BRICK_WIDTH}px`,
          height: `${HORIZONTAL_BRICK_HEIGHT}px`,
        }}
        src={brick}
        alt="Brick1Img"
      />
    );
  };

  const drawBottomWall = () => {
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <img
          style={{
            position: 'absolute',
            width: `${HORIZONTAL_BRICK_WIDTH}px`,
            height: `${HORIZONTAL_BRICK_HEIGHT}px`,
            top: `${2 * HORIZONTAL_BRICK_HEIGHT}px`,
          }}
          src={brick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawRightWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            left: `${VERTICAL_BRICK_WIDTH}px`,
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  const drawLeftWall = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: 0,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
        <img
          style={{
            position: 'absolute',
            top: `${VERTICAL_BRICK_S_HEIGHT}px`,
            width: `${VERTICAL_BRICK_WIDTH}px`,
            height: `${VERTICAL_BRICK_S_HEIGHT}px`,
          }}
          src={rotatedBrick}
          alt="Brick1Img"
        />
      </div>
    );
  };

  if (topWall && leftWall) {
    return <div>{drawTopAndLeftWall()}</div>;
  } else if (bottomWall && rightWall) {
    return <div>{drawBottomAndRightWall()}</div>;
  } else if (bottomWall && leftWall) {
    return <div>{drawBottomAndLeftWall()}</div>;
  } else if (topWall && rightWall) {
    return <div>{drawTopAndRightWall()}</div>;
  } else if (topWall && bottomWall) {
    return <div> {drawTopAndBottomWall()} </div>;
  } else if (leftWall && rightWall) {
    return <div> {drawLeftAndRightWall()} </div>;
  } else if (topWall) {
    return <div> {drawTopWall()} </div>;
  } else if (bottomWall) {
    return <div> {drawBottomWall()} </div>;
  } else if (leftWall) {
    return <div> {drawLeftWall()} </div>;
  } else if (rightWall) {
    return <div> {drawRightWall()} </div>;
  }
};

function Walls(props: IProps) {
  return <div>{drawWalls(props)}</div>;
}

const mapStateToProps = (state: IRootReducer) => {
  const brick: string = state.wallsDesignerReducer.brick;
  const rotatedBrick: string = state.wallsDesignerReducer.rotatedBrick;

  return {
    brick,
    rotatedBrick,
  };
};

export default connect(mapStateToProps)(Walls);
