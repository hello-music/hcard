import React from 'react';
import { reduxForm } from 'redux-form';
import { CardBuilder } from 'components';
import constants from 'config/constants';

const {CARD_BUILDER_FORM} = constants;
const CardBuilderContainer = () => (<CardBuilder />);

export default reduxForm({
  form: CARD_BUILDER_FORM  // a unique identifier for this form
})(CardBuilderContainer)
