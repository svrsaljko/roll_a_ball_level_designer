import { UPDATE_FIELDS_DESIGN } from '../actions/types';
import { IActionUpdateFieldsDesign } from '../actions/actions';
import { Background1 } from '../images';

export interface IFieldsDesignerReducerState {
  imgUrl: string;
}

const initState: IFieldsDesignerReducerState = {
  imgUrl: Background1,
};

const fieldsDesignerReducer = (
  state = initState,
  action: IActionUpdateFieldsDesign
) => {
  switch (action.type) {
    case UPDATE_FIELDS_DESIGN:
      return {
        imgUrl: action.imgUrl,
      };
    default:
      return state;
  }
};

export default fieldsDesignerReducer;
