import React from 'react';
import Board from './Board';
import FieldsDesigner from './FieldsDesigner';
import WallsAndItemsDesigner from './WallsAndItemsDesigner';
import ShowBorder from './ShowBorder';

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ShowBorder />
        <Board />
      </div>
      <WallsAndItemsDesigner />
    </div>
  );
}
