module.exports = (newErrors) => {
  const flattenedErrors = [];
  const errors = { message: ''};
  if (Array.isArray(newErrors)) {
    newErrors.map((error) => flattenedErrors.push(error.msg))
  }
  errors.message = flattenedErrors.join(' ');
  return errors;
}