// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import {getTravelers, getTrips, getDestinations} from './API-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');


//GLOBAL VARIABLES
var globalTravelers, globalTrips, globalDestinations;


//EVENT LISTENERS
window.addEventListener('load', resolvePromise);

//EVENT HANDLERS

function resolvePromise() {
  var travelersPromise = getTravelers();
  var tripsPromise = getTrips();
  var destinationsPromise = getDestinations();
  Promise.all([travelersPromise, tripsPromise, destinationsPromise])
  .then((values) => {
    globalTravelers = values[0];
    globalTrips = values[1];
    globalDestinations = values[2];


    startFnOffHere();
    //I guess all methods have to start here?
  })
}

// console.log("28", resolvePromise())


console.log("globalData outside of method", globalTravelers);
//
// console.log(globalData)

function startFnOffHere() {
  console.log("globalData in method", globalTravelers, globalTrips, globalDestinations);
  // console.log(globalTrips.map(trip => trip.date));
  // let sortedTrips = globalTrips.sort((a, b) => {
  //   return b.date - a.date;
  // })
  // console.log("sortedTrips", sortedTrips);
  // return sortedTrips;
}







// Seems like I'm not using this
// let resolvedData = Promise.resolve(travelersData);
