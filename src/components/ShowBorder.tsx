import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../reducers';

import { updateBorderState } from '../actions/actions';
import '../css/showBorder.css';

interface IProps {
  borderState: boolean;
  updateBorderState: (borderState: boolean) => void;
}

function ShowBorder(props: IProps) {
  const { borderState, updateBorderState } = props;
  return (
    <div className="show-border-container">
      <button
        onClick={() => {
          updateBorderState(!borderState);
        }}
        className="button-border"
      >
        {borderState ? 'HIDE THE BORDER' : 'SHOW THE BORDER'}
      </button>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const { borderState } = state.borderReducer;
  return {
    borderState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateBorderState: (borderState: boolean) =>
      dispatch(updateBorderState(borderState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowBorder);
