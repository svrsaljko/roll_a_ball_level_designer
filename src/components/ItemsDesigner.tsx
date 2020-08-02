import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ITEMS_DESIGNES } from '../other/Designer';
import { USE_DARKRED_BALL } from '../other/Constants';
import '../css/itemsDesigner.css';
import { updateItemAction } from '../actions/actions';

interface IProps {
  updateItemAction: (itemAction: string) => void;
}

function ItemsDesigner(props: IProps) {
  const { updateItemAction } = props;
  const [activeItem, setActiveItem] = useState(USE_DARKRED_BALL);
  const itemsDesigner = ITEMS_DESIGNES.map((itemsDesign) => {
    const { title, item, action } = itemsDesign;
    return (
      <div
        style={{
          background: action === activeItem ? 'gray' : 'white',
        }}
        onClick={() => {
          setActiveItem(action);
          updateItemAction(action);
        }}
        className="item-design-container"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          // style={{ position: 'relative' }}
        >
          {item}
        </div>
      </div>
    );
  });

  return <div className="items-designer-container">{itemsDesigner}</div>;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateItemAction: (itemAction: string) =>
      dispatch(updateItemAction(itemAction)),
  };
};

export default connect(null, mapDispatchToProps)(ItemsDesigner);
