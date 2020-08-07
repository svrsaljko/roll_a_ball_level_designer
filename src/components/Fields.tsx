import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../reducers';
import { updateField, updateItem } from '../actions/actions';
import { IField } from '../interfaces/IField';
import { FIELD_HEIGHT, FIELD_WIDTH } from '../other/Constants';
import Walls from './Walls';
import '../css/field.css';

interface IProps {
  fields: IField[];
  currentFieldColor: string;
  updateField(fieldId: number, clickCounter: number): void;
  updateItem(fieldId: number): void;
  menuState: boolean;
  borderState: boolean;
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
  const {
    currentFieldColor,
    menuState,
    borderState,
    updateField,
    updateItem,
  } = props;
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
            border: borderState ? '1px groove ivory' : 'none',

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
            // BALL
            hasDarkRedBall={field.hasDarkRedBall}
            hasIceBall={field.hasIceBall}
            hasNeonBlueBall={field.hasNeonBlueBall}
            // DOOR
            hasBlackDoor={field.hasBlackDoor}
            hasGoldDoor={field.hasGoldDoor}
            hasIceDoor={field.hasIceDoor}
            // ITEMS
            hasGold={field.hasGold}
            hasSilver={field.hasSilver}
            hasDiamond={field.hasDiamond}
            hasEmerald={field.hasEmerald}
            hasSapphire={field.hasSapphire}
            hasRuby={field.hasRuby}
            // ENEMY
            hasNeonRedEnemy={field.hasNeonRedEnemy}
            hasNeonGreenEnemy={field.hasNeonGreenEnemy}
            hasNeonBlueEnemy={field.hasNeonBlueEnemy}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const { fields } = state.fieldsReducer;
  const { menuState } = state.menuReducer;
  const { currentFieldColor } = state.fieldsDesignerReducer;
  const { borderState } = state.borderReducer;
  return {
    fields,
    currentFieldColor,
    menuState,
    borderState,
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
