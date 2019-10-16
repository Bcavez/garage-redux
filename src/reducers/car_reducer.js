import { FETCH_CAR } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CAR:
      // return [ action.payload ];
      return action.payload;
    default:
      return state;
  }
}
