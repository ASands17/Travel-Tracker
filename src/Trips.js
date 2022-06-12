import Trip from './Trip'

    //gets all trips for one user
class Trips{
  constructor(travelerId, allTripsData, allDestinationData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
    this.trips;
    this.allDestinationData = allDestinationData;

    this.getTripInstances();
  }

  //will get array of all a user's trips

  getTripInstances() {
    this.trips = this.getTravelerTrips()
    // TODO 1
      .map(tripObj => new Trip(tripObj, this.allDestinationData));
    return this.trips;
  }

  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
      return travelerTrips;
  }

  getCostOfApprovedTrips() {
    let approvedTrips = this.trips.filter(trip => {
      // console.log("assigned trips", destinationTrips)
      // return trip.status === "approved";
      // console.log("TEST", trip.estimatedLodgingCostPerDay)
      return trip.status === "approved";
    });

      let totalCost = approvedTrips.reduce((sum, trip) => {
        // console.log("trip", trip);
        sum += trip.calculateCost();
        return sum;
      }, 0);
      console.log("tot cost", totalCost)
    return totalCost;
  }
}

export default Trips;
