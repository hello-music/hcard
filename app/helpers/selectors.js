import { createSelector } from 'reselect';

const getCardBuilderForm = form => form.cardBuilder;

export const getValidFormValues = createSelector(
  [getCardBuilderForm],
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
