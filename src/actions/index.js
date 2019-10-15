export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
