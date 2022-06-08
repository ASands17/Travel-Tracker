//FETCH REQUESTS GET
//
// export function getTravelers() {
//   return fetch('http://localhost:3001/api/v1/travelers').then(res => res.json())
//   .catch(error => alert('ERROR'));
// }
//
// export function getTrips() {
//   return fetch('http://localhost:3001/api/v1/trips').then(res => res.json())
//   .catch(error => alert('ERROR'));
// }
//
// export function getDetinations() {
//   return fetch('http://localhost:3001/api/v1/destinations').then(res => res.json())
//   .catch(error => alert('ERROR'));
// }


export function getTravelers() {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(res => res.json())
  .catch(error => alert('ERROR'));
}

// export function getTravelers() {
//   return fetch('http://localhost:3001/api/v1/travelers')
//   .then(res => res.json())
//   .catch(error => alert('ERROR'));
// }
