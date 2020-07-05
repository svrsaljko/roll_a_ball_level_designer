import { SET_ALL_FIELDS, UPDATE_FIELD } from './types';

// import { IField } from '../interfaces/IField';

// export interface IActionSetAllFields {
//   type: string;
//   fields: IField[];
// }

// export const setAllFields = (fields: IField[]) => {
//   return { type: SET_ALL_FIELDS, fields };
// };
export interface IActionUpdateField {
  type: string;
  fieldId: number;
  clickCounter: number;
}

// export type RollABallActionTypes = IActionSetAllFields | IActionUpdateField;

export const updateField = (fieldId: number, clickCounter: number) => {
  return { type: UPDATE_FIELD, fieldId, clickCounter };
};
