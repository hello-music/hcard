import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Row_col, Row__cols_2 } from 'sharedStyles/styles.scss';

const InputField = ({label, fieldName}) => (
    <div>
        <label>{label}</label>
        <div>
            <Field name={fieldName} component="input"/>
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
                            <InputField label="GIVEN NAME" fieldName="givenName"/>
                        </div>
                        <div className={Row_col}>
                            <InputField label="SURNAME" fieldName="surname"/>
                        </div>
                    </div>
                    <div className={`${Row} ${Row__cols_2}`}>
                        <div className={Row_col}>
                            <InputField label="EMAIL" fieldName="email"/>
                        </div>
                        <div className={Row_col}>
                            <InputField label="PHONE" fieldName="phone"/>
                        </div>
                    </div>
                    <hr />
                    <div className={`${Row} ${Row__cols_2}`}>
                        <div className={Row_col}>
                            <InputField label="HOUSE NAME OR #" fieldName="houseNameOrNum"/>
                        </div>
                        <div className={Row_col}>
                            <InputField label="STREET" fieldName="street"/>
                        </div>
                    </div>
                    <div className={`${Row} ${Row__cols_2}`}>
                        <div className={Row_col}>
                            <InputField label="SUBURB" fieldName="suburb"/>
                        </div>
                        <div className={Row_col}>
                            <InputField label="STATE" fieldName="state"/>
                        </div>
                    </div>
                    <div className={`${Row} ${Row__cols_2}`}>
                        <div className={Row_col}>
                            <InputField label="POSTCODE" fieldName="postcode"/>
                        </div>
                        <div className={Row_col}>
                            <InputField label="COUNTRY" fieldName="country"/>
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
    )
};
export default reduxForm({
    form: 'cardBuilder'  // a unique identifier for this form
})(CardBuilder)