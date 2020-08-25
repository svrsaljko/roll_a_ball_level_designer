import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateWallsDesign } from '../actions/actions';
import { WALLS_DESIGNS } from '../other/Designer';
import {
  VERTICAL_BRICK_WIDTH,
  VERTICAL_BRICK_S_HEIGHT,
  HORIZONTAL_BRICK_HEIGHT,
  HORIZONTAL_BRICK_WIDTH,
} from '../other/Constants';
import { IRootReducer } from '../reducers';
import { v4 as uuid } from 'uuid';

import '../css/wallsDesigner.css';

interface IProps {
  updateWallsDesign: (brick: string, rotatedBrick: string) => void;
  brick: string;
  rotatedBrick: string;
}

function WallsDesigner(props: IProps) {
  const { updateWallsDesign, brick } = props;

  const wallsDesigner = WALLS_DESIGNS.map((wallsDesign) => {
    const { wall, title, rotatedWall } = wallsDesign;
    return (
      <div
        key={uuid()}
        className="wall-design-container"
        style={{
          background: brick === wall ? 'gray' : 'white',
        }}
        onClick={() => {
          updateWallsDesign(wall, rotatedWall);
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
