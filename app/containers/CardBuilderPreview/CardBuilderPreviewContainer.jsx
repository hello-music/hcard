import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getValidFormValues } from 'helpers/selectors';
import { CardBuilderPreview } from 'components';

const CardBuilderPreviewContainer = props => (<CardBuilderPreview formValues={props.validFormValues} />);

CardBuilderPreviewContainer.propTypes = {
  // connected props
  validFormValues: PropTypes.object.isRequired,
};

const mapStateToProps = ({form}) => {
  return {
    validFormValues: getValidFormValues(form),
  };
};

export default connect(mapStateToProps)(CardBuilderPreviewContainer);
