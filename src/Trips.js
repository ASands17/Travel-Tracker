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

  getTripInstances() {
    this.trips = this.getTravelerTrips()
      .map(tripObj => new Trip(tripObj, this.allDestinationData));
      console.log("this.tripsOK", this.trips)
      //this makes all trips into instances of trip
    return this.trips;
  }

  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
    // console.log("travelerTripsOK", travelerTrips)
    //This gets all trips for only one user
      return travelerTrips;
  }

  getCostOfApprovedTrips() {
    let approvedTrips = this.trips.filter(trip => {
      return trip.status === "approved";
    });
      let totalCost = approvedTrips.reduce((sum, trip) => {
        sum += trip.calculateCost();
        return sum;
      }, 0);
    return totalCost;
  }
}

export default Trips;
