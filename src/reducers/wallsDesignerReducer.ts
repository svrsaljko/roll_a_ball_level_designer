import { UPDATE_WALLS_DESIGN } from '../actions/types';
import { IActionUpdateWallsDesign } from '../actions/actions';
import { Brick1, RotatedBrick1 } from '../images';

export interface IWallsDesignerReducerState {
  brick: string;
  rotatedBrick: string;
}

const initState: IWallsDesignerReducerState = {
  brick: Brick1,
  rotatedBrick: RotatedBrick1,
};

const wallsDesignerReducer = (
  state = initState,
  action: IActionUpdateWallsDesign
) => {
  switch (action.type) {
    case UPDATE_WALLS_DESIGN:
      return {
        brick: action.brick,
        rotatedBrick: action.rotatedBrick,
      };
    default:
      return state;
  }
};

export default wallsDesignerReducer;
