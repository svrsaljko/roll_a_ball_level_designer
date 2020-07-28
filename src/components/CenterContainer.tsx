import React from 'react';
import Board from './Board';
import FieldsDesigner from './FieldsDesigner';

export default function CenterContainer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3rem',
      }}
    >
      <FieldsDesigner />
      <Board />
      <FieldsDesigner />
    </div>
  );
}
