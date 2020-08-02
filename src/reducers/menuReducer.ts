import { UPDATE_MENU_STATE } from '../actions/types';
import { IActionUpdateMenuState } from '../actions/actions';

export interface IMenuReducerState {
  menuState: boolean;
}

const initState: IMenuReducerState = {
  menuState: true,
};

const menuReducer = (state = initState, action: IActionUpdateMenuState) => {
  switch (action.type) {
    case UPDATE_MENU_STATE:
      // console.log('action.menuState: ', action.menuState);
      return {
        menuState: action.menuState,
      };
    default:
      return state;
  }
};

export default menuReducer;
