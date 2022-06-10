import Trip from './Trip'

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

  // getTravelerPresentTrips() {
  //   let travelerTrips = this.getTravelerTrips(travelerId, allTripsData);
  //
  // }

  getallTrips() {
    return this.getTravelerTrips(this.travelerId, this.allTrips).map(tripObj => new Trip(tripObj))
  }
}

export default Trips;
