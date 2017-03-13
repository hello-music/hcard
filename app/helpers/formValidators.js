const formValidators = {
  required: value => value ? undefined : 'Required',
  maxLength: max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined,
  number: value => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
  minValue: min => value =>
    value && value < min ? `Must be at least ${min}` : undefined,
  email: value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address' : undefined,
  tooOld: value =>
    value && value > 65 ? 'You might be too old for this' : undefined,
  aol: value =>
    value && /.+@aol\.com/.test(value)
      ? 'Really? You still use AOL for your email?' : undefined,
};

export default formValidators;
