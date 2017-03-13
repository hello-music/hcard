import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { hide, Row, Row_col, Row__cols_2 } from 'sharedStyles/styles.scss';
import formValidators from 'helpers/formValidators';
import constants from 'config/constants';

const {required, email, number} = formValidators;
const {FIELD_NAMES__GIVEN_NAME, FIELD_NAMES__SURNAME, FIELD_NAMES__HOUSE_NAME_OR_NUM, FIELD_NAMES__STREET, FIELD_NAMES__SUBURB, FIELD_NAMES__STATE, FIELD_NAMES__EMAIL, FIELD_NAMES__PHONE, FIELD_NAMES__POSTCODE, FIELD_NAMES__COUNTRY} = constants;

const RenderField = ({input, label, type = 'text', meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

const CardBuilder = props => {
  const {handleSubmit} = props;
  return (
    <div>
      <div>
        <h3>{'hCard Builder'}</h3>
        <form onSubmit={handleSubmit}>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__GIVEN_NAME} component={RenderField} label='GIVEN NAME'
                     validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__SURNAME} component={RenderField} label='SURNAME'
                     validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__EMAIL} component={RenderField} label='EMAIL'
                     validate={[required, email]} />
            </div>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__PHONE} component={RenderField} label='PHONE'
                     validate={[required, number]} />
            </div>
          </div>
          <hr />
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__HOUSE_NAME_OR_NUM} component={RenderField} label='HOUSE NAME OR #'
                     validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__STREET} component={RenderField} label='STREET'
                     validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__SUBURB} component={RenderField} label='SUBURB'
                     validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__STATE} component={RenderField} label='STATE'
                     validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__POSTCODE} component={RenderField} label='POSTCODE'
                     validate={[required, number]} />
            </div>
            <div className={Row_col}>
              <Field name={FIELD_NAMES__COUNTRY} component={RenderField} label='COUNTRY'
                     validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <label>
                <input className={hide} type='file' name='profileImage'
                       accept='.jpg,.jpeg,.png' onChange={props.handleImageUpload}/>
                {'Upload Avatar'}
              </label>
            </div>
            <div className={Row_col}>
              <button>{'Create hCard'}</button>
            </div>
          </div>
        </form>
        <image src={props.profileImageUrl} />
      </div>
    </div>
  );
};

CardBuilder.propTypes = {
  handleSubmit: PropTypes.func,
  handleImageUpload: PropTypes.func.isRequired,
  profileImageUrl: PropTypes.string,
};

export default CardBuilder;
