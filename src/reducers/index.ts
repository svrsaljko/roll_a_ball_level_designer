import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import fieldsDesignerReducer, {
  IFieldsDesignerReducerState,
} from './fieldsDesignerReducer';
import wallsDesignerReducer, {
  IWallsDesignerReducerState,
} from './wallsDesignerReducer';
import menuReducer, { IMenuReducerState } from './menuReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  fieldsDesignerReducer: IFieldsDesignerReducerState;
  wallsDesignerReducer: IWallsDesignerReducerState;
  menuReducer: IMenuReducerState;
}

export default combineReducers({
  fieldsReducer,
  fieldsDesignerReducer,
  wallsDesignerReducer,
  menuReducer,
});
