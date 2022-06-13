// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import Trips from './Trips'

// console.log('This is the JavaScript entry file - your code begins here.');

//IMPORTS
import {getTravelers, getTrips, getDestinations} from './API-fetch';
import './css/styles.css';

//GLOBAL VARIABLES
var globalTravelers, globalTrips, globalDestinations;

//QUERY SELECTORS

var nameDisplay = document.querySelector('#nameGreeting')

var presentDestination = document.querySelector('#presentTripsDestination')
var presentDates = document.querySelector('#presentTripsDates')
var presentTravelers = document.querySelector('#presentTripsTravelers')

var upcomingDestination = document.querySelector('#upcomingTripsDestination')
var upcomingDates = document.querySelector('#upcomingTripsDates')
var upcomingTravelers = document.querySelector('#upcomingTripsTravelers')

var pastDestination = document.querySelector('#pastTripsDestination')
var pastDates = document.querySelector('#pastTripsDates')
var pastTravelers = document.querySelector('#pastTripsTravelers')

var pendingDestination = document.querySelector('#pendingTripsDestination')
var pendingDates = document.querySelector('#pendingTripsDates')
var pendingTravelers = document.querySelector('#pendingTripsTravelers')

var requestTripButton = document.querySelector('#requestTripsDepartureButton')


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

//FUNCTIONS
function startFnOffHere() {
  console.log("globalData in method", globalTravelers, globalTrips, globalDestinations);
  showTraveler(globalTravelers);
}

function getRandomTraveler(allTravelers) {
  return allTravelers.travelers[Math.floor(Math.random()*allTravelers.travelers.length)];
}

function showTraveler(globalTravelers) {
  let randomTraveler = getRandomTraveler(globalTravelers);
  console.log("random", randomTraveler)
  nameDisplay.innerHTML += randomTraveler.name;
}
