import { UPDATE_FIELDS_DESIGN } from '../actions/types';
import { IActionUpdateFieldsDesign } from '../actions/actions';
import { Background1 } from '../images';

export interface IFieldsDesignerReducerState {
  imgUrl: string;
  currentFieldColor: string;
}

const initState: IFieldsDesignerReducerState = {
  imgUrl: Background1,
  currentFieldColor: 'gold',
};

const fieldsDesignerReducer = (
  state = initState,
  action: IActionUpdateFieldsDesign
) => {
  switch (action.type) {
    case UPDATE_FIELDS_DESIGN:
      return {
        imgUrl: action.imgUrl,
        currentFieldColor: action.currentFieldColor,
      };
    default:
      return state;
  }
};

export default fieldsDesignerReducer;
