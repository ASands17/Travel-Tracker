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
import Trip from './Trip'
import Trips from './Trips'
import Traveler from './Traveler'

//GLOBAL VARIABLES
var globalTravelers, globalTrips, globalDestinations;
var currentTraveler;
var allTripInstances;

//QUERY SELECTORS

var nameDisplay = document.querySelector('#nameGreeting')

var presentDestination = document.querySelector('#presentTripsDestination')
var presentDates = document.querySelector('#presentTripsDates')
var presentTravelers = document.querySelector('#presentTripsTravelers')

var upcomingDestination = document.querySelector('#upcomingTripsDestination')
var upcomingDates = document.querySelector('#upcomingTripsDates')
var upcomingTravelers = document.querySelector('#upcomingTripsTravelers')
var upcomingStatus = document.querySelector('#upcomingTripsStatus')

var pastDestination = document.querySelector('#pastTripsDestination')
var pastDates = document.querySelector('#pastTripsDates')
var pastTravelers = document.querySelector('#pastTripsTravelers')

var pendingDestination = document.querySelector('#pendingTripsDestination')
var pendingDates = document.querySelector('#pendingTripsDates')
var pendingTravelers = document.querySelector('#pendingTripsTravelers')
var pendingStatus = document.querySelector('#pendingTripsStatus')

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
  currentTraveler = getRandomTraveler(globalTravelers);
  nameDisplay.innerHTML += currentTraveler.name;
  displayPresentTrips(currentTraveler.id);
  displayPastTrips(currentTraveler.id);
  displayUpcomingTrips(currentTraveler.id);
  displayPendingTrips(currentTraveler.id);
}

function displayPresentTrips(travelerID) {
  allTripInstances = new Trips(travelerID, globalTrips.trips, globalDestinations.destinations);
  console.log("TRIPS instances", allTripInstances.trips.map(trip => trip.date));
  let presentTrips = allTripInstances.trips.filter(instance => instance.isCurrent === true);
  let allPresentNames = presentTrips.map(trip => {
    return presentDestination.innerHTML += trip.destinationObj.destination
  });
  let allPresentDates = presentTrips.map(trip => {
    return presentDates.innerHTML += trip.date;
  });
  let allPresentTravelers = presentTrips.map(trip => {
    return presentTravelers.innerHTML += trip.travelers;
  });
}

function displayUpcomingTrips(travelerID) {
  let upcomingTrips = allTripInstances.trips.filter(instance => instance.isUpcoming === true);
  let allUpcomingNames = upcomingTrips.map(trip => {
    return upcomingDestination.innerHTML += trip.destinationObj.destination
  });
  let allUpcomingDates = upcomingTrips.map(trip => {
    return upcomingDates.innerHTML += trip.date;
  });
  let allUpcomingTravelers = upcomingTrips.map(trip => {
    return upcomingTravelers.innerHTML += trip.travelers;
  });
  let allUpcomingStatuses = upcomingTrips.map(trip => {
    return upcomingStatus.innerHTML += trip.status;
  });
}

function displayPendingTrips(travelerID) {
  let pendingTrips = allTripInstances.trips.filter(instance => instance.status === "pending");
  let allPendingNames = pendingTrips.map(trip => {
    return pendingDestination.innerHTML += trip.destinationObj.destination
  });
  let allPendingDates = pendingTrips.map(trip => {
    return pendingDates.innerHTML += trip.date;
  });
  let allPendingTravelers = pendingTrips.map(trip => {
    return pendingTravelers.innerHTML += trip.travelers;
  });
  let allPendingStatuses = pendingTrips.map(trip => {
    return pendingStatus.innerHTML += trip.status;
  });
}

function displayPastTrips(travelerID) {
  let pastTrips = allTripInstances.trips.filter(instance => instance.isPast === true);
  let allPastNames = pastTrips.map(trip => {
    return pastDestination.innerHTML += trip.destinationObj.destination
  });
  let allPastDates = pastTrips.map(trip => {
    return pastDates.innerHTML += trip.date;
  });
}
