// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import {getTravelers, getTrips, getDestinations} from './API-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import Trips from './Trips'

// console.log('This is the JavaScript entry file - your code begins here.');


//GLOBAL VARIABLES
var globalTravelers, globalTrips, globalDestinations;

//EVENT LISTENERS
window.addEventListener('load', getGlobalDataFromAPI);

//EVENT HANDLERS

function getGlobalDataFromAPI() {
  var travelersPromise = getTravelers();
  var tripsPromise = getTrips();
  var destinationsPromise = getDestinations();
  Promise.all([travelersPromise, tripsPromise, destinationsPromise])
  .then((values) => {
    globalTravelers = values[0];
    globalTrips = values[1];
    globalDestinations = values[2];
    startFnOffHere();
    //Start DOM manip from fn above (will rename)
  })
}

function startFnOffHere() {
  console.log("globalData in method", globalTravelers, globalTrips, globalDestinations);
}
