import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCar } from '../actions/index';

class CarShow extends Component {

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="view-container">
          <div className="aside">
            <Link to={`/${this.props.match.params.garage}`}>
              Back to list of cars
            </Link>
          </div>
       <div className="">
          <h3>{this.props.car.brand}{this.props.car.model}</h3>
          <p>owner: {this.props.car.owner}</p>
         <p>{this.props.car.plate}</p>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    car: state.car,
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
