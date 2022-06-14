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

var presentTripsHolder = document.querySelector('#presentTripsHolder')
var upcomingTripsHolder = document.querySelector('#upcomingTripsHolder')
var pastTripsHolder = document.querySelector('#pastTripsCardHolder')
var pendingTripsHolder = document.querySelector('#pendingTripsHolder')

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
    showTraveler();
  })
}

//FUNCTIONS


function getRandomTraveler(allTravelers) {
  return allTravelers.travelers[Math.floor(Math.random()*allTravelers.travelers.length)];
}

function showTraveler() {
  currentTraveler = getRandomTraveler(globalTravelers);
  nameDisplay.innerHTML += currentTraveler.name;
  allTripInstances = new Trips(currentTraveler.id, globalTrips.trips, globalDestinations.destinations);
  displayPresentTrips();
  displayPastTrips();
  displayUpcomingTrips();
  displayPendingTrips();
}

function displayPresentTrips() {
  if (allTripInstances.presentTrips.length === 0) {
    presentTripsHolder.innerHTML += `<div class="trip-card">
      <h3>Currently there are no present trips</h3>
    </div>`;
    return;
  }

  allTripInstances.presentTrips.forEach(trip => {
    presentTripsHolder.innerHTML += `<div class="trip-card">
      <p> Destination: ${trip.destinationObj.destination}</p>
      <p> Trip Dates: ${trip.date} </p>
      <p> Number of Travelers: ${trip.travelers} </p>
      </div>`;
  });

}

function displayUpcomingTrips() {
  let upcomingTrips = allTripInstances.upcomingTrips;
  if(!upcomingTrips) {
    upcomingTripsHolder.innerHTML += `<div class="trip-card">
      <h3>Currently there are no upcoming trips</h3>
    </div>`;
    return;
  }
  upcomingTrips.forEach(trip => {
    upcomingTripsHolder.innerHTML += `<div class="trip-card">
      <p> Destination: ${trip.destinationObj.destination}</p>
      <p> Trip Dates: ${trip.date} </p>
      <p> Number of Travelers: ${trip.travelers} </p>
      <p> Status: ${trip.status}</p>
      </div>`;
  });

}

function displayPendingTrips() {
  let pendingTrips = allTripInstances.pendingTrips;
  if(pendingTrips.length === 0) {
    pendingTripsHolder.innerHTML += `<div class="trip-card">
      <h3>Currently there are no pending trips</h3>
    </div>`;
    return;
  }
  pendingTrips.forEach(trip => {
    pendingTripsHolder.innerHTML += `<div class="trip-card">
      <p> Destination: ${trip.destinationObj.destination}</p>
      <p> Trip Dates: ${trip.date} </p>
      <p> Number of Travelers: ${trip.travelers} </p>
      <p> Status: ${trip.status} </p>
      </div>`;
  });
}

function displayPastTrips() {
  let pastTrips = allTripInstances.pastTrips;
  if (pastTrips.length === 0) {
    pastTripsHolder.innerHTML += `<div class="trip-card">
      <h3>Currently there are no past trips</h3>
    </div>`;
    return;
  }
  pastTrips.forEach(trip => {
    pastTripsHolder.innerHTML += `<div class="trip-card">
      <p> Destination: ${trip.destinationObj.destination}</p>
      <p> Trip Dates: ${trip.date} </p>
      </div>`;
  });

}
