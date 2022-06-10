import Trip from './Trip'

    //gets all trips for one user
class Trips{
  constructor(travelerId, allTripsData, allDestinationData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
  }

  //will get array of all a user's trips
  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
      return travelerTrips;
  }

  getTravelerPendingTrips() {
    let travelerTrips = this.getTravelerTrips();
    let pendingTrips = travelerTrips.filter(trip => {
      return trip.status === "pending";
    })
    return pendingTrips;
  }

  getTravelerPresentTrips() {
    let travelerTrips = this.getTravelerTrips();
  }

  //this gives me an array of trip instances
  //this means all of these trips would have methods from trip available
  //confused about this in params
  //confused about how exactly this helps?
  getTripInstances() {
    return this.getTravelerTrips(this.travelerId, this.allTrips)
    .map(tripObj => new Trip(tripObj))
  }

//could I do this same thing?
  // getDestinationInstances() {
  //   return this.getTravelerTrips(this.travelerId, this.destinationData)
  //   .map(tripObj => new Destination(tripObj))
  // }
}

export default Trips;
