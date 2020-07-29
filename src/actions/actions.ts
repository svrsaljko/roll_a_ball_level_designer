import {
  UPDATE_FIELD,
  UPDATE_FIELDS_DESIGN,
  UPDATE_WALLS_DESIGN,
} from './types';

export interface IActionUpdateField {
  type: string;
  fieldId: number;
  clickCounter: number;
}
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

export const updateField = (fieldId: number, clickCounter: number) => {
  return { type: UPDATE_FIELD, fieldId, clickCounter };
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
