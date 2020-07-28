import { combineReducers } from 'redux';
import fieldsReducer, { IFieldsReducerState } from './fieldsReducer';
import fieldsDesignerReducer, {
  IFieldsDesignerReducerState,
} from './fieldsDesignerReducer';

export interface IRootReducer {
  fieldsReducer: IFieldsReducerState;
  fieldsDesignerReducer: IFieldsDesignerReducerState;
}

export default combineReducers({
  fieldsReducer,
  fieldsDesignerReducer,
});
