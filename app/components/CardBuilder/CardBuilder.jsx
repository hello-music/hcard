import React from 'react';
import { Field } from 'redux-form';
import { Row, Row_col, Row__cols_2 } from 'sharedStyles/styles.scss';
import formValidators from 'helpers/formValidators';

const {required, email, number} = formValidators;
const renderField = ({input, label, type = 'text', meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const CardBuilder = props => {
  const {handleSubmit} = props;
  return (
    <div>
      <div>
        <h3>hCard Builder</h3>
        <form onSubmit={handleSubmit}>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name="givenName" component={renderField} label="GIVEN NAME" validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name="surname" component={renderField} label="SURNAME" validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name="email" component={renderField} label="EMAIL" validate={[required, email]} />
            </div>
            <div className={Row_col}>
              <Field name="phone" component={renderField} label="PHONE" validate={[required, number]} />
            </div>
          </div>
          <hr />
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name="houseNameOrNum" component={renderField} label="HOUSE NAME OR #" validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name="street" component={renderField} label="STREET" validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name="suburb" component={renderField} label="SUBURB" validate={[required]} />
            </div>
            <div className={Row_col}>
              <Field name="state" component={renderField} label="STATE" validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <Field name="postcode" component={renderField} label="POSTCODE"
                     validate={[required, number]} />
            </div>
            <div className={Row_col}>
              <Field name="country" component={renderField} label="COUNTRY" validate={[required]} />
            </div>
          </div>
          <div className={`${Row} ${Row__cols_2}`}>
            <div className={Row_col}>
              <button>Upload Avatar</button>
            </div>
            <div className={Row_col}>
              <button>Create hCard</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CardBuilder;
