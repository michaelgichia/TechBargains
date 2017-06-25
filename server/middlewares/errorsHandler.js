module.exports = (newErrors) => {
  const flattenedErrors = [];
  const errors = { message: ''};
  if (Array.isArray(newErrors)) {
    newErrors.map((error) => flattenedErrors.push(error.msg))
  }
  if (typeof newErrors === 'object') {
    flattenedErrors.push(newErrors.message);
  }
  errors.message = flattenedErrors.join(' ');
  return errors;
}