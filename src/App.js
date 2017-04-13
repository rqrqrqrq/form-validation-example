import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateField } from './formDucks';
import { VALIDATION_RULES, validator } from './validator';

const FORM_VALIDATION_RULES = {
  firstname: [
    {
      predicate: VALIDATION_RULES.required,
      message: 'field required',
    },
    {
      predicate: VALIDATION_RULES.number,
      message: 'should be number',
    },
  ],
  lastname: [
    {
      predicate: VALIDATION_RULES.required,
      message: 'field required',
    },
  ],
};

const formValidator = (value, name) =>
  validator(value, name, FORM_VALIDATION_RULES);

class App extends Component {
  validateField = (e) => {
    const error = formValidator(
      e.target.value,
      e.target.name,
    );

    this.props.validateField({
      [e.target.name]: {
        message: error,
        isTouched: true,
      },
    });
  }

  render() {
    const { errors, isDisabled } = this.props;

    return (
      <form>
        <label style={{ display: 'block' }}>
          <input type="text" name="firstname" onBlur={this.validateField} />
          <span style={{ color: 'rgb(136, 45, 45)' }}>{errors.firstname.message}</span>
        </label>
        <label style={{ display: 'block' }}>
          <input type="text" name="lastname" onBlur={this.validateField} />
          <span style={{ color: 'rgb(136, 45, 45)' }}>{errors.lastname.message}</span>
        </label>
        <button type="submit" disabled={isDisabled}>submit</button>
      </form>
    );
  }
}

const isDisabled = errors => Object.keys(errors).some(key =>
  errors[key].message || !errors[key].isTouched);

const mapStateToProps = ({ errors }) => ({
  errors,
  isDisabled: isDisabled(errors),
});

const mapDispatchToProps = {
  validateField,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
