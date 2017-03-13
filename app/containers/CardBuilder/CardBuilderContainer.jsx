import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileImageActionCreators from 'redux/modules/profileImage';
import { CardBuilder } from 'components';
import constants from 'config/constants';

const {CARD_BUILDER_FORM} = constants;
const renderImage = (file, saveImageFunc) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function (event) {
    const url = event.target.result;
    console.log('url: ', url);
    saveImageFunc(url);
  };
};
class CardBuilderContainer extends React.Component {
  constructor () {
    super();
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleImageUpload (e) {
    renderImage(e.target.files[0], this.props.saveImage);
  }

  render () {
    return (<CardBuilder handleImageUpload={this.handleImageUpload} />);
  }
}

CardBuilderContainer.propTypes = {
  // connected props
  saveImage: PropTypes.func.isRequired,
};

function mapStateToProps ({profileImage}) {
  return {
    profileImage,
  };
}

function mapDispatchToProps () {
  return dispatch => bindActionCreators(profileImageActionCreators, dispatch);
}

const CardBuilderContainerWrapper = reduxForm({
  form: CARD_BUILDER_FORM,
})(CardBuilderContainer);
export default connect(mapStateToProps, mapDispatchToProps)(CardBuilderContainerWrapper);
