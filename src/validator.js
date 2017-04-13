const validate = (value, predicate, errorMessage) =>
  predicate(value) ? null : errorMessage;

export const validator = (value, name, ruleSet) => {
  let formError = null;

  ruleSet[name].some(rule => {
    const error = validate(value, rule.predicate, rule.message);

    if (error) {
      formError = error;
    }

    return error;
  });

  return formError;
}

export const VALIDATION_RULES = {
  required: value => value !== '',
  number: value => !Number.isNaN(parseInt(value, 10)),
};
