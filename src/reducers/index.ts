import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import fieldsDesignerReducer, {
  IFieldsDesignerReducerState,
} from './fieldsDesignerReducer';
import wallsDesignerReducer, {
  IWallsDesignerReducerState,
} from './wallsDesignerReducer';
import menuReducer, { IMenuReducerState } from './menuReducer';
import borderReducer, { IBorderReducerState } from './borderReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  fieldsDesignerReducer: IFieldsDesignerReducerState;
  wallsDesignerReducer: IWallsDesignerReducerState;
  menuReducer: IMenuReducerState;
  borderReducer: IBorderReducerState;
}

export default combineReducers({
  fieldsReducer,
  fieldsDesignerReducer,
  wallsDesignerReducer,
  menuReducer,
  borderReducer,
});
