const VALIDATE_FIELD = 'VALIDATE_FIELD';

export const validateField = errors => ({
  type: VALIDATE_FIELD,
  payload: errors,
});

const initialState = {
  errors: {
    firstname: {
      isTouched: false,
      message: null,
    },
    lastname: {
      isTouched: false,
      message: null,
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case VALIDATE_FIELD:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        }
      };

    default:
      return state;
  }
}
