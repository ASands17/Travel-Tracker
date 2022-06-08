// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import {getTravelers, getTrips, getDetinations} from './API-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');

let globalData;

let travelersData = getTravelers();
console.log("Original promise", travelersData)

let resolvedData = Promise.resolve(travelersData);
console.log("Resolved promise", resolvedData)

function resolvePromise() {
  getTravelers().then((data) => {
  // test();
  console.log("data", data)
  globalData = data;
  test();
  return data;
})
}

console.log("28", resolvePromise())


console.log("global data", globalData);
//
// console.log(globalData)

function test() {
  console.log("test", globalData);
}

test();













//IGNORE
//======================//


// let anotherPromise = getTravelers().then(traveler => console.log(traveler)));
//
// console.log("first promise", anotherPromise)
//
// let travelersPromise = Promise.resolve(anotherPromise);
//
// console.log("resolved promise", travelersPromise);
//
// let expectedData;
//
//
// travelersPromise.then((data) => {
//   setGlobalData(data);
// })
//
// function setGlobalData(data) {
//   expectedData = data;
// }
//
// setGlobalData(travelersPromise);
//
// //this is showing undefined.
// console.log("expected data final", expectedData);
//
// // .then((res) => getTravelers().then(traveler => console.log(traveler)));
