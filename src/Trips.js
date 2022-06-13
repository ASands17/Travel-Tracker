import Trip from './Trip'

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
