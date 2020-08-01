import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateWallsDesign } from '../actions/actions';
import {
  Brick1,
  Brick2,
  Brick3,
  Brick4,
  Brick5,
  Brick6,
  Brick7,
  Brick8,
  RotatedBrick1,
  RotatedBrick2,
  RotatedBrick3,
  RotatedBrick4,
  RotatedBrick5,
  RotatedBrick6,
  RotatedBrick7,
  RotatedBrick8,
  Background1,
} from '../images';
import {
  FIELD_HEIGHT,
  FIELD_WIDTH,
  VERTICAL_BRICK_WIDTH,
  VERTICAL_BRICK_S_HEIGHT,
  HORIZONTAL_BRICK_HEIGHT,
  HORIZONTAL_BRICK_WIDTH,
} from '../other/Constants';
import { IRootReducer } from '../reducers';

import '../css/wallsDesigner.css';

interface IProps {
  updateWallsDesign: (brick: string, rotatedBrick: string) => void;
  brick: string;
  rotatedBrick: string;
}

const WALLS_DESIGNS = [
  {
    title: 'classic castle wall',
    description: 'Castle wall deisgn',
    wall: Brick1,
    rotatedWall: RotatedBrick1,
    // currentFieldColor: 'gold',
  },
  {
    title: 'orange brick wall',
    description: 'classic orange brick wall',
    wall: Brick2,
    rotatedWall: RotatedBrick2,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'dark castle wall',
    description: 'classic orange brick wall',
    wall: Brick3,
    rotatedWall: RotatedBrick3,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'grassy maze',
    description: 'classic orange brick wall',
    wall: Brick4,
    rotatedWall: RotatedBrick4,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'ice wall 1',
    description: 'classic orange brick wall',
    wall: Brick5,
    rotatedWall: RotatedBrick5,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'ice wall 2',
    description: 'classic orange brick wall',
    wall: Brick6,
    rotatedWall: RotatedBrick6,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'water maze',
    description: 'classic orange brick wall',
    wall: Brick7,
    rotatedWall: RotatedBrick7,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'wooden wall',
    description: 'classic orange brick wall',
    wall: Brick8,
    rotatedWall: RotatedBrick8,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'sand wall',
    description: 'classic orange brick wall',
    wall: Background1,
    rotatedWall: Background1,
    // currentFieldColor: '#4666ff',
  },
];

function WallsDesigner(props: IProps) {
  const { updateWallsDesign, brick, rotatedBrick } = props;

  const onWallsDesignClick = (brick: string, rotatedBrick: string) => {
    // console.log('imageurl: ', imgUrl);
    updateWallsDesign(brick, rotatedBrick);
  };

  const wallsDesigner = WALLS_DESIGNS.map((wallsDesign) => {
    const { wall, title, description, rotatedWall } = wallsDesign;
    console.log('walls design: ', wallsDesign);
    return (
      <div
        className="wall-design-container"
        style={{
          background: brick === wall ? 'gray' : 'white',
        }}
        onClick={() => {
          onWallsDesignClick(wall, rotatedWall);
        }}
      >
        {title}

        <div>
          <div style={{ position: 'relative' }}>
            <img
              style={{
                position: 'absolute',
                left: 0,
                width: `${VERTICAL_BRICK_WIDTH}px`,
                height: `${VERTICAL_BRICK_S_HEIGHT}px`,
              }}
              src={rotatedWall}
              alt="Brick1Img"
            />
            <img
              style={{
                position: 'absolute',
                top: `${VERTICAL_BRICK_S_HEIGHT}px`,
                width: `${VERTICAL_BRICK_WIDTH}px`,
                height: `${VERTICAL_BRICK_S_HEIGHT}px`,
              }}
              src={rotatedWall}
              alt="Brick1Img"
            />
          </div>
          <img
            style={{
              marginLeft: '2rem',
              width: `${HORIZONTAL_BRICK_WIDTH}px`,
              height: `${HORIZONTAL_BRICK_HEIGHT}px`,
            }}
            src={wall}
            alt="Brick1Img"
          />
        </div>
      </div>
    );
  });

  return <div className="walls-designer-container">{wallsDesigner}</div>;
}

const mapPropsToState = (state: IRootReducer) => {
  const { brick, rotatedBrick } = state.wallsDesignerReducer;
  return { brick, rotatedBrick };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateWallsDesign: (brick: string, rotatedBrick: string) =>
      dispatch(updateWallsDesign(brick, rotatedBrick)),
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(WallsDesigner);
