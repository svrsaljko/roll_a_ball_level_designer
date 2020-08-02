import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../reducers';
import { updateField, updateItem } from '../actions/actions';
import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
} from '../other/Constants';
import Walls from './Walls';
import '../css/field.css';

interface IProps {
  fields: IField[];
  currentFieldColor: string;
  updateField(fieldId: number, clickCounter: number): void;
  updateItem(fieldId: number): void;
  menuState: boolean;
}

const onFieldClick = (
  fieldId: number,
  clickCounter: number,
  updateField: (fieldId: number, clickCounter: number) => void
) => {
  if (clickCounter === 10) {
    clickCounter = 0;
  } else {
    clickCounter++;
  }
  updateField(fieldId, clickCounter);
};
function Fields(props: IProps) {
  let fields = props.fields;
  const { currentFieldColor, menuState, updateField, updateItem } = props;
  // console.log('currentFieldColod:', currentFieldColor);
  const over = (e: any) => {
    e.target.style.backgroundColor = currentFieldColor.toString();
  };
  const out = (e: any) => {
    e.target.style.backgroundColor = '';
  };

  return (
    <div>
      {fields.map((field) => (
        <div
          className="field"
          onMouseOver={over}
          onMouseOut={out}
          key={field.fieldId}
          onClick={() => {
            menuState
              ? onFieldClick(field.fieldId, field.clickCounter, updateField)
              : updateItem(field.fieldId);
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
            hasHole={field.hasHole}
            hasDiamond={field.hasDiamond}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const fields: IField[] = state.fieldsReducer.fields;
  const menuState = state.menuReducer.menuState;
  const currentFieldColor: string =
    state.fieldsDesignerReducer.currentFieldColor;
  return {
    fields,
    currentFieldColor,
    menuState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateField: (fieldId: number, clickCounter: number) =>
      dispatch(updateField(fieldId, clickCounter)),
    updateItem: (fieldId: number) => dispatch(updateItem(fieldId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fields);
