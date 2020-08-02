import React, { useState } from 'react';
import { updateMenuState } from '../actions/actions';
import WallsDesigner from './WallsDesigner';
import ItemsDesigner from './ItemsDesigner';
import '../css/wallsAndItemsDesigner.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IProps {
  updateMenuState: (menuState: boolean) => void;
}

function WallsAndItemsDesigner(props: IProps) {
  const { updateMenuState } = props;
  const [isWallsDesignerActive, setActiveMenu] = useState(true);

  const changeMenuOnClick = (menuState: boolean) => {
    setActiveMenu(menuState);
    updateMenuState(menuState);
  };

  return (
    <div className="walls-and-items-designer-container">
      <div className="buttons-container">
        <button
          onClick={() => {
            changeMenuOnClick(true);
          }}
          className={
            isWallsDesignerActive
              ? 'button-walls-items-active'
              : 'button-walls-items'
          }
        >
          <p className="button-walls-items-text">WALLS</p>
        </button>
        <button
          onClick={() => {
            changeMenuOnClick(false);
          }}
          className={
            isWallsDesignerActive
              ? 'button-walls-items'
              : 'button-walls-items-active'
          }
        >
          <p className="button-walls-items-text">ITEMS</p>
        </button>
      </div>
      <div>{isWallsDesignerActive ? <WallsDesigner /> : <ItemsDesigner />}</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateMenuState: (menuState: boolean) =>
      dispatch(updateMenuState(menuState)),
  };
};

export default connect(null, mapDispatchToProps)(WallsAndItemsDesigner);
