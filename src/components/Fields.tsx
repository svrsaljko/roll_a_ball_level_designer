import React from 'react';
import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../other/Constants';

const initializeFields = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      top = FIELD_HEIGHT * i;
      left = FIELD_WIDTH * j;

      field = {
        top,
        left,
        topWall,
        bottomWall,
        rightWall,
        leftWall,
        hasHole,
        hasDiamond,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasDiamond = false;
    }
  }

  return fields;
};

export default function Fields() {
  return <div></div>;
}
