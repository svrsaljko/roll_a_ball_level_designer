import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import { FIELDS_DESIGNS } from '../other/Designer';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../other/Constants';
import { updateFieldsDesign } from '../actions/actions';
import '../css/fieldsDesigner.css';

interface IProps {
  updateFieldsDesign: (imgUrl: string, currentFieldColor: string) => void;
  imgUrl: string;
}

function FieldsDesigner(props: IProps) {
  const { updateFieldsDesign } = props;
  const { imgUrl } = props;
  const onFieldDesignClick = (imgUrl: string, currentFieldColor: string) => {
    updateFieldsDesign(imgUrl, currentFieldColor);
  };

  const fieldsDesigner = FIELDS_DESIGNS.map((fieldsDesign) => {
    const { image, title, description, currentFieldColor } = fieldsDesign;
    return (
      <div style={{ margin: '0.5rem' }}>
        {title}
        <div
          onClick={() => {
            onFieldDesignClick(image, currentFieldColor);
          }}
          className="fields-design-image"
          style={{
            border: image === imgUrl ? '3px solid darkRed' : '3px solid black',
            position: 'relative',
            backgroundImage: `url(${image})`,
            height: `${BOARD_HEIGHT / 3}px`,
            width: `${BOARD_WIDTH / 3}px`,
          }}
        ></div>
        <div>{description}</div>
      </div>
    );
  });

  return (
    <div>
      CHOOSE FIELD DESIGN:
      <div className="fields-designs-container">{fieldsDesigner}</div>
    </div>
  );
}

const mapStateToProps = (state: IRootReducer) => {
  const imgUrl: string = state.fieldsDesignerReducer.imgUrl;

  return {
    imgUrl,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateFieldsDesign: (imgUrl: string, currentFieldColor: string) =>
      dispatch(updateFieldsDesign(imgUrl, currentFieldColor)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FieldsDesigner);
