//IMPORTS
import {getTravelers, getTrips, getDestinations, addNewTrip} from './API-fetch';
import './css/styles.css';
import Trip from './Trip';
import Trips from './Trips';
import Traveler from './Traveler';

//GLOBAL VARIABLES
var globalTravelers, globalTrips, globalDestinations;
var currentTraveler;
var allTripInstances;

//QUERY SELECTORS
var nameDisplay = document.querySelector('#nameGreeting');
var presentTripsHolder = document.querySelector('#presentTripsHolder');
var upcomingTripsHolder = document.querySelector('#upcomingTripsHolder');
var pastTripsHolder = document.querySelector('#pastTripsCardHolder');
var totalForPastTrips = document.querySelector('#pastTripsSpent');
var pendingTripsHolder = document.querySelector('#pendingTripsHolder');
var submitButton = document.querySelector('#requestTripsDepartureButton');

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
      <p class="no-trips" tabindex="0">Currently there are no present trips</p>
      <img tabindex="0" src="https://images.unsplash.com/photo-1622967024058-afd7efe8a095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
      alt="A worn yellow suitcase sits on a cobblestone path" class="trip-image">
    </div>`;
    return;
  }

  allTripInstances.presentTrips.forEach(trip => {
    presentTripsHolder.innerHTML += `<div class="trip-card">
      <p class="destination-name" tabindex="0"> Destination: <br> ${trip.destinationObj.destination}</p>
      <img tabindex="0" src="${trip.destinationObj.image}" alt="${trip.destinationObj.alt}" class="trip-image">
      <p tabindex="0"> Start Date: ${new Date(trip.date).toLocaleDateString()}</p>
      <p tabindex="0"> Trip Duration: ${trip.duration} days</p>
      <p tabindex="0"> Number of Travelers: ${trip.travelers} </p>
      </div>`;
  });
}

function displayUpcomingTrips() {
  let upcomingTrips = allTripInstances.upcomingTrips;
  if(upcomingTrips.length === 0) {
    upcomingTripsHolder.innerHTML += `<div class="trip-card">
      <p class="no-trips" tabindex="0">Currently there are no upcoming trips</p>
      <img tabindex="0" src="https://images.unsplash.com/photo-1584967918940-a7d51b064268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      alt="A travel journal and pencil sits in the center of a yellowing map, along with a camera, magnifying class, and coffee mug" class="trip-image">
    </div>`;
    return;
  }
  upcomingTrips.forEach(trip => {
    upcomingTripsHolder.innerHTML += `<div class="trip-card">
      <p class="destination-name" tabindex="0"> Destination: <br> ${trip.destinationObj.destination}</p>
      <img tabindex="0" src="${trip.destinationObj.image}" alt="${trip.destinationObj.alt}" class="trip-image">
      <p tabindex="0"> Start Date: ${new Date(trip.date).toLocaleDateString()}</p>
      <p tabindex="0"> Trip Duration: ${trip.duration} days</p>
      <p tabindex="0"> Number of Travelers: ${trip.travelers} </p>
      <p tabindex="0"> Status: ${trip.status}</p>
      </div>`;
  });
}

function displayPendingTrips() {
  pendingTripsHolder.innerHTML = '';
  let pendingTrips = allTripInstances.pendingTrips;
  if(pendingTrips.length === 0) {
    pendingTripsHolder.innerHTML += `<div class="trip-card">
      <p class="no-trips" tabindex="0">Currently there are no pending trips</p>
      <img tabindex="0" src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      alt="We see a person's back as they view lit up departure and arrival board at the airport" class="trip-image">
    </div>`;
    return;
  }

  pendingTrips.forEach(trip => {
    pendingTripsHolder.innerHTML += `<div class="trip-card">
      <p class="destination-name" tabindex="0"> Destination: <br> ${trip.destinationObj.destination}</p>
      <img tabindex="0" src="${trip.destinationObj.image}" alt="${trip.destinationObj.alt}" class="trip-image">
      <p tabindex="0"> Start Date: ${new Date(trip.date).toLocaleDateString()}</p>
      <p tabindex="0"> Trip Duration: ${trip.duration} days</p>
      <p tabindex="0"> Number of Travelers: ${trip.travelers} </p>
      <p tabindex="0"> Status: ${trip.status} </p>
      <p tabindex="0"> Estimated Cost: $${trip.calculateCost()} </p>
      </div>`;
  });
}

function displayPastTrips() {
  let pastTrips = allTripInstances.pastTrips;
  if (pastTrips.length === 0) {
    pastTripsHolder.innerHTML += `<div class="bottom-trip-card">
      <p class="no-trips" tabindex="0">Currently there are no past trips</p>
      <img tabindex="0" src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"
      alt="A person holds a silver compass in front of a grassy mountain on a cloudy day" class="trip-image">
    </div>`;
    return;
  }
  pastTrips.forEach(trip => {
    pastTripsHolder.innerHTML += `<div class="bottom-trip-card">
      <p class="destination-name" tabindex="0"> Destination: <br> ${trip.destinationObj.destination}</p>
      <img tabindex="0" src="${trip.destinationObj.image}" alt="${trip.destinationObj.alt}" class="past-trips-image">
      <p tabindex="0"> Start Date: ${new Date(trip.date).toLocaleDateString()}</p>
      <p tabindex="0"> Trip Duration: ${trip.duration} days</p>
      </div>`;
  });
  totalForPastTrips.innerHTML += `$${allTripInstances.getCostOfApprovedTrips()}`;
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
