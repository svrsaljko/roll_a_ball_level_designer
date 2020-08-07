import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../reducers';
import { ITEMS_DESIGNS } from '../other/Designer';
import '../css/itemsDesigner.css';
import { updateItemAction } from '../actions/actions';

interface IProps {
  updateItemAction: (itemAction: string) => void;
  itemAction: string;
}

function ItemsDesigner(props: IProps) {
  const { updateItemAction, itemAction } = props;
  const [activeItem, setActiveItem] = useState(itemAction);

  useEffect(() => {
    setActiveItem(itemAction);
    return () => {
      setActiveItem(itemAction);
    };
  }, []);

  const itemsDesigner = ITEMS_DESIGNS.map((itemsDesign) => {
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
            marginBottom: '0.5rem',
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
        >
          {item}
        </div>
      </div>
    );
  });

  return <div className="items-designer-container">{itemsDesigner}</div>;
}

const mapStateToProps = (state: IRootReducer) => {
  const itemAction = state.fieldsReducer.itemAction;

  return {
    itemAction,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateItemAction: (itemAction: string) =>
      dispatch(updateItemAction(itemAction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDesigner);
