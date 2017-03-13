import { createSelector } from 'reselect';
import constants from 'config/constants';

const {FIELD_NAMES__GIVEN_NAME, FIELD_NAMES__SURNAME, FIELD_NAMES__HOUSE_NAME_OR_NUM, FIELD_NAMES__STREET, FIELD_NAMES__SUBURB, FIELD_NAMES__STATE} = constants;
const getCardBuilderForm = state => state.form.cardBuilder;

export const getValidFormValues = createSelector(
  getCardBuilderForm,
  cardBuilder => {
    let validFormValues = {};
    let currentValue = '';
    const {registeredFields = {}, syncErrors = {}, values = {}} = cardBuilder;
    Object.keys(registeredFields).forEach(key => {
      currentValue = values[key];
      validFormValues[key] = Object.keys(syncErrors).findIndex(errorKey => errorKey === key) === -1 ? currentValue && currentValue.trim().replace(/\s{2,}/g, ' ') : '';
    });
    return validFormValues;
  }
);

export const getFullName = createSelector(
  getValidFormValues,
  validFormValues => {
    return composeTwoValuesToDisplay(FIELD_NAMES__GIVEN_NAME, FIELD_NAMES__SURNAME, validFormValues);
  }
);

export const getAddress1 = createSelector(
  getValidFormValues,
  validFormValues => {
    return composeTwoValuesToDisplay(FIELD_NAMES__HOUSE_NAME_OR_NUM, FIELD_NAMES__STREET, validFormValues);
  }
);
export const getAddress2 = createSelector(
  getValidFormValues,
  validFormValues => {
    return composeTwoValuesToDisplay(FIELD_NAMES__SUBURB, FIELD_NAMES__STATE, validFormValues, true);// hasComma = true;
  }
);

// private functions
const composeTwoValuesToDisplay = (firstValueKey, secondValueKey, validFormValues, hasComma = false) => {
  const firstValue = validFormValues[firstValueKey];
  const secondValue = validFormValues[secondValueKey];
  const secondValueDisplay = secondValue && (hasComma ? `, ${secondValue}` : ` ${secondValue}`);
  return `${firstValue}${secondValueDisplay}`;
};
