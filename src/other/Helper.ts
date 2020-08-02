import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
  USE_DARKRED_BALL,
  USE_BLACK_HOLE,
  USE_CLASSIC_DIAMOND,
} from './Constants';

export const updateField = (field: IField, clickCounter: number): IField => {
  field.clickCounter = clickCounter;
  if (clickCounter === 0) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 1) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 2) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 3) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 4) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 5) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 6) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 7) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 8) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 9) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = true;
  } else if (clickCounter === 10) {
    field.topWall = true;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  }

  field.hasBall = false;
  field.hasDiamond = false;
  field.hasHole = false;

  return field;
};

export const updateItem = (field: IField, itemAction: string): IField => {
  if (USE_DARKRED_BALL === itemAction) {
    field.hasBall = true;
    field.hasDiamond = false;
    field.hasHole = false;
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (USE_BLACK_HOLE === itemAction) {
    field.hasBall = false;
    field.hasDiamond = false;
    field.hasHole = true;
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (USE_CLASSIC_DIAMOND === itemAction) {
    console.log('HELPER METHOD DIAMOND');
    field.hasBall = false;
    field.hasDiamond = true;
    field.hasHole = false;
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  }
  return field;
};

export const initializeFields = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let hasHole: boolean = false;
  let hasBall: boolean = false;
  let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;
  let clickCounter: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // INITIALIZE SURROUNDING WALLS

      clickCounter = 0;

      if (i === 0) {
        topWall = true;
      }
      if (i === NUMBER_OF_ROWS - 1) {
        bottomWall = true;
      }
      if (j === 0) {
        leftWall = true;
      }
      if (j === NUMBER_OF_COLUMNS - 1) {
        rightWall = true;
      }

      // assign clickCounter to side walls
      if (leftWall) {
        clickCounter = 1;
      }
      if (topWall) {
        clickCounter = 2;
      }
      if (rightWall) {
        clickCounter = 3;
      }
      if (bottomWall) {
        clickCounter = 4;
      }
      // assign clickCounter to corners

      if (leftWall && bottomWall) {
        clickCounter = 5;
      }
      if (leftWall && topWall) {
        clickCounter = 6;
      }

      if (rightWall && topWall) {
        clickCounter = 7;
      }
      if (rightWall && bottomWall) {
        clickCounter = 8;
      }

      //

      top = FIELD_HEIGHT * i;
      left = FIELD_WIDTH * j;

      leftFieldId = j === 0 ? null : fieldId - 1;
      rightFieldId = j === NUMBER_OF_COLUMNS - 1 ? null : fieldId + 1;
      topFieldId = i === 0 ? null : fieldId - NUMBER_OF_COLUMNS;
      bottomFieldId =
        i === NUMBER_OF_ROWS - 1 ? null : fieldId + NUMBER_OF_COLUMNS;

      field = {
        top,
        left,
        topWall,
        bottomWall,
        rightWall,
        leftWall,
        hasHole,
        hasDiamond,
        hasBall,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
        clickCounter,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
      hasHole = false;
      hasBall = false;
      hasDiamond = false;
    }
  }

  return fields;
};
