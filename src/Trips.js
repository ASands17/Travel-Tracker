    //gets all trips for one user
class Trips{
  constructor(travelerId, allTripsData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
  }

  //will get array of all a user's trips
  getTravelerTrips(travelerId, allTripsData) {
    let travelerTrips = allTripsData.filter(trip => {
      return trip.userID === travelerId;
    })
      return travelerTrips;
  }

  getTravelerPendingTrips(travelerId, allTripsData) {
    let travelerTrips = this.getTravelerTrips(travelerId, allTripsData);
    let pendingTrips = travelerTrips.filter(trip => {
      return trip.status === "pending";
    })
    return pendingTrips;
  }
}

export default Trips;

//Traveler
// "id": 1,
// "name": "Ham Leadbeater",
// "travelerType": "relaxer"

//Trip
// "id": 117,
// "userID": 1,
// "destinationID": 28,
// "travelers": 3,
// "date": "2021/01/09",
// "duration": 15,
// "status": "approved",
// "suggestedActivities": []

// let userTrips = new Trips(1, apiTripData);
//
// let allUserTrips = userTrips.getTravelerTrips(1, apiTripData);
