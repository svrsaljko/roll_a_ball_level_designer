import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../other/Constants';
import Fields from './Fields';

interface IProps {
  imgUrl: string;
}

function Board(props: IProps) {
  const { imgUrl } = props;
  return (
    <div>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${imgUrl})`,
          height: `${BOARD_HEIGHT}px`,
          width: `${BOARD_WIDTH}px`,
        }}
      >
        <Fields />
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const imgUrl: string = state.fieldsDesignerReducer.imgUrl;

  return {
    imgUrl,
  };
};

export default connect(mapStateToProps)(Board);
