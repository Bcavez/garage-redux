import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.match.params.garage);
  }

  renderList = (car) => {
    return (
      <div className="car-details" key={car.id}>
        <div className="car-smallad">
          <li>
            <p>{car.brand} {car.model}</p>
            <p>Owner: {car.owner}</p>
            <Link to={`/${this.props.match.params.garage}/cars/${car.id}`}>
              See more
            </Link>
          </li>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="view-container">
        <div className="aside">
          <Link to={`/${this.props.match.params.garage}/new`}>
            Add a Car
          </Link>
        </div>
        <div className="list-container">
          <ul>
            {this.props.cars.map(this.renderList)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
