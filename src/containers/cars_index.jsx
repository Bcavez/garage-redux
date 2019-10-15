import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  renderList = (car) => {
    return (
      <div className="car-details" key={car.id}>
        <div className="car-smallad">
          <li>
            <p>{car.brand} {car.model}</p>
            <p>Owner: {car.owner}</p>
          </li>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="view-container">
        <div className="aside">GARAGENAME</div>
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
    cars: state.cars
    }
}

export default connect(mapStateToProps)(CarsIndex);
