import {
  UPDATE_FIELD,
  UPDATE_FIELDS_DESIGN,
  UPDATE_WALLS_DESIGN,
  UPDATE_MENU_STATE,
  UPDATE_ITEM,
  UPDATE_ITEM_ACTION,
  UPDATE_BORDER_STATE,
} from './types';

interface IActionUpdateField {
  type: typeof UPDATE_FIELD;
  fieldId: number;
  clickCounter: number;
}
interface IActionUpdateItem {
  type: typeof UPDATE_ITEM;
  fieldId: number;
}
interface IActionUpdateItemAction {
  type: typeof UPDATE_ITEM_ACTION;
  itemAction: string;
}

export type IActionUpdateFieldState =
  | IActionUpdateField
  | IActionUpdateItem
  | IActionUpdateItemAction;

export interface IActionUpdateFieldsDesign {
  type: string;
  imgUrl: string;
  currentFieldColor: string;
}

export interface IActionUpdateWallsDesign {
  type: string;
  brick: string;
  rotatedBrick: string;
}

export interface IActionUpdateMenuState {
  type: string;
  menuState: boolean;
}
export interface IActionUpdateBorderState {
  type: string;
  borderState: boolean;
}

export const updateField = (fieldId: number, clickCounter: number) => {
  return { type: UPDATE_FIELD, fieldId, clickCounter };
};
export const updateItem = (fieldId: number) => {
  return { type: UPDATE_ITEM, fieldId };
};
export const updateItemAction = (itemAction: string) => {
  return { type: UPDATE_ITEM_ACTION, itemAction };
};

export const updateFieldsDesign = (
  imgUrl: string,
  currentFieldColor: string
) => {
  return { type: UPDATE_FIELDS_DESIGN, imgUrl, currentFieldColor };
};

export const updateWallsDesign = (brick: string, rotatedBrick: string) => {
  return { type: UPDATE_WALLS_DESIGN, brick, rotatedBrick };
};
export const updateMenuState = (menuState: boolean) => {
  return { type: UPDATE_MENU_STATE, menuState };
};
export const updateBorderState = (borderState: boolean) => {
  return { type: UPDATE_BORDER_STATE, borderState };
};
