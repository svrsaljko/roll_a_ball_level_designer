import React from 'react';
import { connect } from 'react-redux';
import { IField } from '../interfaces/IField';
import { IRootReducer } from '../reducers';
import { withRouter } from 'react-router-dom';
import '../css/bottomContainer.css';

interface IProps {
  fields: IField[];
  history: any;
}

const removeFalse = (field: IField) => {
  delete field['hasDarkRedBall'];
  delete field['hasIceBall'];
  delete field['hasNeonBlueBall'];
  delete field['top'];
  delete field['left'];
  delete field['clickCounter'];
  delete field['leftFieldId'];
  delete field['rightFieldId'];
  delete field['topFieldId'];
  delete field['bottomFieldId'];
  delete field['fieldId'];

  if (field['topWall'] === false) {
    delete field['topWall'];
  }
  if (field['bottomWall'] === false) {
    delete field['bottomWall'];
  }
  if (field['rightWall'] === false) {
    delete field['rightWall'];
  }
  if (field['leftWall'] === false) {
    delete field['leftWall'];
  }

  if (field['hasBlackDoor'] === false) {
    delete field['hasBlackDoor'];
  }
  if (field['hasGoldDoor'] === false) {
    delete field['hasGoldDoor'];
  }
  if (field['hasIceDoor'] === false) {
    delete field['hasIceDoor'];
  }
  if (field['hasGold'] === false) {
    delete field['hasGold'];
  }
  if (field['hasSilver'] === false) {
    delete field['hasSilver'];
  }
  if (field['hasDiamond'] === false) {
    delete field['hasDiamond'];
  }
  if (field['hasEmerald'] === false) {
    delete field['hasEmerald'];
  }
  if (field['hasSapphire'] === false) {
    delete field['hasSapphire'];
  }
  if (field['hasRuby'] === false) {
    delete field['hasRuby'];
  }
  if (field['hasNeonRedEnemy'] === false) {
    delete field['hasNeonRedEnemy'];
  }
  if (field['hasNeonGreenEnemy'] === false) {
    delete field['hasNeonGreenEnemy'];
  }
  if (field['hasNeonBlueEnemy'] === false) {
    delete field['hasNeonBlueEnemy'];
  }

  return field;
};

const isEmpty = (obj: any) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const downloadLevelTxt = (fields: IField[], history: any) => {
  const element = document.createElement('a');
  const fieldsBuffer = fields;
  const txtFields = fieldsBuffer.map((field) => {
    field = removeFalse(field);
    return field;
  });
  let fieldsString: string = '';

  for (let i = 0; i < txtFields.length; i++) {
    if (!isEmpty(txtFields[i])) {
      let oneFiled: string[] = JSON.stringify(txtFields[i]).split(',');
      for (let j = 0; j < oneFiled.length; j++) {
        let prop = oneFiled[j]
          .replace('{', '')
          .replace('}', '')
          .replace('"', '');
        prop = prop.substr(0, prop.length - 6);
        fieldsString = fieldsString + `fields[${i}].${prop} = true;`;
      }
    }
  }

  const file = new Blob([fieldsString], {
    type: 'text/plain',
  });

  element.href = URL.createObjectURL(file);
  element.download = 'level.txt';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
  history.push('/');
};

function BottomContainer(props: IProps) {
  const { fields, history } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3rem',
      }}
    >
      <button
        className="generate-level-button"
        onClick={() => {
          downloadLevelTxt(fields, history);
        }}
      >
        GENERATE LEVEL
      </button>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const fields: IField[] = state.fieldsReducer.fields;

  return {
    fields,
  };
};

export default withRouter(connect(mapStateToProps)(BottomContainer));
