import { UPDATE_BORDER_STATE } from '../actions/types';
import { IActionUpdateBorderState } from '../actions/actions';

export interface IBorderReducerState {
  borderState: boolean;
}

const initState: IBorderReducerState = {
  borderState: true,
};

const borderReducer = (state = initState, action: IActionUpdateBorderState) => {
  switch (action.type) {
    case UPDATE_BORDER_STATE:
      const { borderState } = action;
      return { ...state, borderState };
    default:
      return state;
  }
};

export default borderReducer;
