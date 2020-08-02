import React from 'react';
import Board from './Board';
import FieldsDesigner from './FieldsDesigner';
import WallsAndItemsDesigner from './WallsAndItemsDesigner';

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
      <WallsAndItemsDesigner />
    </div>
  );
}
