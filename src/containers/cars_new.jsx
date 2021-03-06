import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(this.props.match.params.garage, values, (car) => {
      this.props.history.push('/');
        return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        {field.meta.touched && ((field.meta.error && <span>{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
      </div>
    );
  }

  render() {

    const required = value => value ? undefined : 'Required';

    return (
      <div className="view-container">
        <div className="aside">
          <Link to={`/${this.props.match.params.garage}`}>
            Back to list of cars
          </Link>
        </div>
        <div className="form-container">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
             label="brand"
             name="brand"
             type="text"
             component={this.renderField}
             validate={ required }
            />
            <Field
             label="model"
             name="model"
             type="text"
             component={this.renderField}
             validate={ required }
            />
            <Field
             label="owner"
             name="owner"
             type="text"
             component={this.renderField}
             validate={ required }
            />
            <Field
             label="plate"
             name="plate"
             type="text"
             component={this.renderField}
             validate={ required }
            />
            <button type="submit"
            disabled={this.props.pristine || this.props.submitting}
            >
              Create Car !
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({ form: 'newCarForm' })(
 connect(null, { createCar })(CarsNew)
);
