import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CardBuilderPreview } from 'components';
import { getValidFormValues, getFullName, getAddress1, getAddress2 } from 'helpers/selectors';

const CardBuilderPreviewContainer = props => (
  <CardBuilderPreview formValues={props.validFormValues} address1={props.address1} address2={props.address2}
                      imageUrl={props.imageUrl} />
);

CardBuilderPreviewContainer.propTypes = {
  // connected props
  validFormValues: PropTypes.object.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    validFormValues: getValidFormValues(state),
    fullName: getFullName(state),
    address1: getAddress1(state),
    address2: getAddress2(state),
    imageUrl: state.profileImage.src,
  };
};

export default connect(mapStateToProps)(CardBuilderPreviewContainer);
