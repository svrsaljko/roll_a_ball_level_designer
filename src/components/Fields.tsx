import React, { useEffect, useState } from 'react';
import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../other/Constants';
import Walls from './Walls';
import '../css/field.css';

const initializeFields = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  // let hasHole: boolean = false;
  // let hasDiamond: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // INITIALIZE SURROUNDING WALLS

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

      //

      top = FIELD_HEIGHT * i;
      left = FIELD_WIDTH * j;

      field = {
        top,
        left,
        topWall,
        bottomWall,
        rightWall,
        leftWall,
        // hasHole,
        // hasDiamond,
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
      // hasHole = false;
      // hasDiamond = false;
    }
  }

  return fields;
};

const onFieldClick = (fieldId: number) => {
  console.log('fieldId: ', fieldId);
};

export default function Fields() {
  const [fields, setFields] = useState(initializeFields());
  console.log('trenutna polja su: ', fields);

  return (
    <div>
      {fields.map((field) => (
        <div
          className="field"
          key={field.fieldId}
          onClick={() => {
            onFieldClick(field.fieldId);
          }}
          style={{
            position: 'absolute',

            top: `${field.top}px`,
            left: `${field.left}px`,
            width: `${FIELD_WIDTH}px`,
            height: `${FIELD_HEIGHT}px`,
          }}
        >
          <Walls
            topWall={field.topWall}
            bottomWall={field.bottomWall}
            rightWall={field.rightWall}
            leftWall={field.leftWall}
          />
        </div>
      ))}
    </div>
  );
}
