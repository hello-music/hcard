import React, {PropTypes} from 'react';

const CardBuilderPreview = props => (
  <div>
    <img src={props.imageUrl} />
  </div>
);

CardBuilderPreview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default CardBuilderPreview;
