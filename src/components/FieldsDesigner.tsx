import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import { Background1, Background2, Background3, Background4 } from '../images';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../other/Constants';
import { updateFieldsDesign } from '../actions/actions';
import '../css/fieldsDesigner.css';

const FIELDS_DESIGNS = [
  { title: 'yellow sand', description: 'Slow for rolling', image: Background1 },
  { title: 'space1', description: 'Slow for rolling', image: Background2 },
  { title: 'space2', description: 'Slow for rolling', image: Background3 },
  { title: 'red sand', description: 'Slow for rolling', image: Background4 },
];

interface IProps {
  updateFieldsDesign: (imgUrl: string) => void;
  imgUrl: string;
}

function FieldsDesigner(props: IProps) {
  const { updateFieldsDesign } = props;
  const { imgUrl } = props;
  function onFieldDesignClick(imgUrl: string) {
    console.log('imageurl: ', imgUrl);
    updateFieldsDesign(imgUrl);
  }

  console.log('props: ', props);

  const fieldsDesigner = FIELDS_DESIGNS.map((fieldsDesign) => {
    const { image, title, description } = fieldsDesign;
    return (
      <div style={{ margin: '0.5rem' }}>
        {title}
        <div
          onClick={() => {
            onFieldDesignClick(image);
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
        }}
      >
        {fieldsDesigner}
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateFieldsDesign: (imgUrl: string) =>
      dispatch(updateFieldsDesign(imgUrl)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FieldsDesigner);
