// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
// import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import Trips from './Trips'

// console.log('This is the JavaScript entry file - your code begins here.');

//IMPORTS
import {getTravelers, getTrips, getDestinations, addNewTrip} from './API-fetch';
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
var totalForPastTrips = document.querySelector('#pastTripsSpent');
var pendingTripsHolder = document.querySelector('#pendingTripsHolder')

var submitButton = document.querySelector('#requestTripsDepartureButton')



//EVENT LISTENERS
window.addEventListener('load', getGlobalDataFromAPI);
submitButton.addEventListener("click", getInputData);


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
  assignDropDownValues();
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
      <p> Trip Dates: ${new Date(trip.date).toLocaleDateString()} </p>
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
      <p> Trip Dates: ${new Date(trip.date).toLocaleDateString()} </p>
      <p> Number of Travelers: ${trip.travelers} </p>
      <p> Status: ${trip.status}</p>
      </div>`;
  });

}

function displayPendingTrips() {
  pendingTripsHolder.innerHTML = '';
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
      <p> Trip Dates: ${new Date(trip.date).toLocaleDateString()} </p>
      <p> Number of Travelers: ${trip.travelers} </p>
      <p> Status: ${trip.status} </p>
      <p> Estimated Cost: ${trip.calculateCost()} </p>
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
      <p> Trip Dates: ${new Date(trip.date).toLocaleDateString()} </p>
      </div>`;
  });

  totalForPastTrips.innerHTML += allTripInstances.getCostOfApprovedTrips();

}

function assignDropDownValues() {
  const dropdown = document.querySelector('#requestTripsDestinationDropdown');

  globalDestinations.destinations.forEach((destination) => {
    dropdown.innerHTML += `<option value="${destination.id}">${destination.destination}</option>`
  })
}

function getInputData() {
  let arrivalDate = document.getElementById('requestTripsArrivalInput').value;
  let departureDate = document.getElementById('requestTripsDepartureInput').value;
  let destination = document.getElementById('requestTripsDestinationDropdown').value;
  let numberOfTravelers = document.getElementById('requestTripsTravelersInput').value
  const arriveDate = new Date(arrivalDate);
  const departDate = new Date(departureDate);
  const diffTime = Math.abs(departDate - arriveDate);
  const duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const formattedArrival = new Date(arrivalDate).toLocaleDateString('en-ZA')
  let dataToTransmit = {id: globalTrips.trips.length + 1, userID: currentTraveler.id, destinationID: Number(destination),
    travelers: numberOfTravelers, date: formattedArrival, duration: duration,
    status: 'pending', suggestedActivities: []};

  submitNewTrip(dataToTransmit);
}

function submitNewTrip(newTrip) {
  addNewTrip(newTrip).then((newRes) => {
    getTrips().then((res) => {
      globalTrips = res;
      allTripInstances.allTrips = globalTrips.trips;
      allTripInstances.getTripInstances();
      allTripInstances.getPendingTrips();
      displayPendingTrips();
    })
  });
}
