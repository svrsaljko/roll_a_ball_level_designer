import {
  UPDATE_FIELD,
  UPDATE_ITEM,
  UPDATE_ITEM_ACTION,
} from '../actions/types';
import { IActionUpdateFieldState } from '../actions/actions';
import { IField } from '../interfaces/IField';
import { USE_DARK_RED_BALL } from '../other/Constants';

import { updateField, updateItem, initializeFields } from '../other/Helper';

export interface IFieldsReducerState {
  fields: IField[];
  itemAction: string;
}

const initState: IFieldsReducerState = {
  fields: initializeFields(),
  itemAction: USE_DARK_RED_BALL,
};

//******UPDATE WALL UMISTO UPDATE FIELD ??
const fieldsReducer = (state = initState, action: IActionUpdateFieldState) => {
  switch (action.type) {
    case UPDATE_FIELD:
      let fieldsUpdateWall = state.fields.map((field) => {
        if (field.fieldId === action.fieldId) {
          return updateField(field, action.clickCounter);
        }
        return field;
      });
      return { ...state, fields: fieldsUpdateWall };
    case UPDATE_ITEM:
      let fieldsUpdateItem = state.fields.map((field) => {
        if (field.fieldId === action.fieldId) {
          return updateItem(field, state.itemAction);
        }
        return field;
      });
      return { ...state, fields: fieldsUpdateItem };

    case UPDATE_ITEM_ACTION:
      const { itemAction } = action;
      return { ...state, itemAction };
    default:
      return state;
  }
};

export default fieldsReducer;
