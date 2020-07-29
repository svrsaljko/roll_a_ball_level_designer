import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import fieldsDesignerReducer, {
  IFieldsDesignerReducerState,
} from './fieldsDesignerReducer';
import wallsDesignerReducer, {
  IWallsDesignerReducerState,
} from './wallsDesignerReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  fieldsDesignerReducer: IFieldsDesignerReducerState;
  wallsDesignerReducer: IWallsDesignerReducerState;
}

export default combineReducers({
  fieldsReducer,
  fieldsDesignerReducer,
  wallsDesignerReducer,
});
