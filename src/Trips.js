import Trip from './Trip'

class Trips{
  constructor(travelerId, allTripsData, allDestinationData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
    this.trips;
    this.allDestinationData = allDestinationData;
    this.presentTrips;
    this.upcomingTrips;
    this.pendingTrips;
    this.pastTrips;
    this.getTripInstances();
    this.getPresentTrips();
    this.getPendingTrips();
    this.getPastTrips();
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

  // getCostOfApprovedTrips() {
  //   let approvedTrips = this.trips.filter(trip => {
  //     return trip.status === "approved";
  //   });
  //     let totalCost = approvedTrips.reduce((sum, trip) => {
  //       sum += trip.calculateCost();
  //       return sum;
  //     }, 0);
  //   return totalCost;
  // }

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

  // REFACTORY

  getPresentTrips() {
    this.presentTrips = this.trips.filter((trip) => {
      return trip.isCurrent === true;
    })
  }

  getUpcomingTrips() {
    this.upcomingTrips = this.trips.filter((trip) => {
      return trip.isUpcoming === true;
    })
  }

  getPendingTrips() {
    this.pendingTrips = this.trips.filter(instance => instance.status === "pending");
  }

  getPastTrips() {
    this.pastTrips = this.trips.filter(instance => instance.isPast === true);
  }

}

export default Trips;
