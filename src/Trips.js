import Trip from './Trip'

    //gets all trips for one user
class Trips{
  constructor(travelerId, allTripsData, allDestinationData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
    this.trips;

    this.getTripInstances();
  }

  //will get array of all a user's trips
  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
      return travelerTrips;
  }

  getTripInstances() {
    this.trips = this.getTravelerTrips()
      .map(tripObj => new Trip(tripObj));
    return this.trips;
  }


  // This test for below is now failing.

  getTravelerPendingTrips() {
  let pendingTrips = this.trips.filter(trip => {
    return trip.status === "pending";
  })
  return pendingTrips;
}

  getCostOfAllTrips() {
    let cost = 0;
    this.trips.forEach((item, i) => {
      cost += item.calculateCost()
    });
    return cost;
  }

  // getTravelerPresentTrips() {
  //   let travelerTrips = this.getTravelerTrips();
  // }

  // getTripInstances() {
  //   return this.getTravelerTrips(this.travelerId, this.allTrips)
  //   .map(tripObj => new Trip(tripObj))
  // }

//could I do this same thing?
  // getDestinationInstances() {
  //   return this.getTravelerTrips(this.travelerId, this.destinationData)
  //   .map(tripObj => new Destination(tripObj))
  // }
}

export default Trips;
