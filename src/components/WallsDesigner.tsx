import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateWallsDesign } from '../actions/actions';
import { Brick1, Brick2, RotatedBrick1, RotatedBrick2 } from '../images';
import {
  FIELD_HEIGHT,
  FIELD_WIDTH,
  VERTICAL_BRICK_WIDTH,
  VERTICAL_BRICK_S_HEIGHT,
  HORIZONTAL_BRICK_HEIGHT,
  HORIZONTAL_BRICK_WIDTH,
} from '../other/Constants';

import '../css/fieldsDesigner.css';

interface IProps {
  updateWallsDesign: (brick: string, rotatedBrick: string) => void;
}

const WALLS_DESIGNS = [
  {
    title: 'castle wall',
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
];

function WallsDesigner(props: IProps) {
  const { updateWallsDesign } = props;

  const onWallsDesignClick = (brick: string, rotatedBrick: string) => {
    // console.log('imageurl: ', imgUrl);
    updateWallsDesign(brick, rotatedBrick);
  };

  const wallsDesigner = WALLS_DESIGNS.map((wallsDesign) => {
    const { wall, title, description, rotatedWall } = wallsDesign;
    console.log('walls design: ', wallsDesign);
    return (
      <div
        onClick={() => {
          onWallsDesignClick(wall, rotatedWall);
        }}
        className="fields-design-image"
        style={{
          margin: '4rem',

          //   border: image === imgUrl ? '3px solid darkRed' : '3px solid black',
          //   height: `${FIELD_HEIGHT * 2}px`,
          //   width: `${FIELD_WIDTH * 2}px`,
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

        <div style={{ marginTop: '3rem' }}>{description}</div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
      }}
    >
      {wallsDesigner}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateWallsDesign: (brick: string, rotatedBrick: string) =>
      dispatch(updateWallsDesign(brick, rotatedBrick)),
  };
};

export default connect(null, mapDispatchToProps)(WallsDesigner);
