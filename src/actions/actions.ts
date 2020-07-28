import { UPDATE_FIELD, UPDATE_FIELDS_DESIGN } from './types';

export interface IActionUpdateField {
  type: string;
  fieldId: number;
  clickCounter: number;
}
export interface IActionUpdateFieldsDesign {
  type: string;
  imgUrl: string;
}

export const updateField = (fieldId: number, clickCounter: number) => {
  return { type: UPDATE_FIELD, fieldId, clickCounter };
};
export const updateFieldsDesign = (imgUrl: string) => {
  return { type: UPDATE_FIELDS_DESIGN, imgUrl };
};
