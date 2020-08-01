import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootReducer } from '../reducers';
import {
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7,
  Brick7,
  Brick4,
  Brick5,
} from '../images';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../other/Constants';
import { updateFieldsDesign } from '../actions/actions';
import '../css/fieldsDesigner.css';

const FIELDS_DESIGNS = [
  {
    title: 'yellow sand',
    description: 'Slow for rolling',
    image: Background1,
    currentFieldColor: 'gold',
  },
  {
    title: 'space1',
    description: 'Slow for rolling',
    image: Background2,
    currentFieldColor: '#4666ff',
  },
  {
    title: 'space2',
    description: 'Slow for rolling',
    image: Background3,
    currentFieldColor: '#bc13fe',
  },
  {
    title: 'red sand',
    description: 'Slow for rolling',
    image: Background4,
    currentFieldColor: 'sandybrown',
  },
  {
    title: 'wooden surface',
    description: 'Slow for rolling',
    image: Background5,
    currentFieldColor: 'sandybrown',
  },
  {
    title: 'sea',
    description: 'Slow for rolling',
    image: Brick7,
    currentFieldColor: '#006994',
  },
  {
    title: 'grass',
    description: 'Slow for rolling',
    image: Brick4,
    currentFieldColor: '#567d46',
  },
  {
    title: 'ice',
    description: 'Slow for rolling',
    image: Brick5,
    currentFieldColor: '#006994',
  },
  {
    title: 'moving water',
    description: 'Slow for rolling',
    image: Background6,
    currentFieldColor: '#006994',
  },
  {
    title: 'under water',
    description: 'Slow for rolling',
    image: Background7,
    currentFieldColor: '#00b0ff',
  },
];

interface IProps {
  updateFieldsDesign: (imgUrl: string, currentFieldColor: string) => void;
  imgUrl: string;
}

function FieldsDesigner(props: IProps) {
  const { updateFieldsDesign } = props;
  const { imgUrl } = props;
  const onFieldDesignClick = (imgUrl: string, currentFieldColor: string) => {
    console.log('imageurl: ', imgUrl);
    updateFieldsDesign(imgUrl, currentFieldColor);
  };

  console.log('props: ', props);

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
      <div
        className="fields-designs-container"
        // style={{
        //   display: 'grid',
        //   gridTemplateColumns: 'auto auto',
        // }}
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
    updateFieldsDesign: (imgUrl: string, currentFieldColor: string) =>
      dispatch(updateFieldsDesign(imgUrl, currentFieldColor)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FieldsDesigner);
