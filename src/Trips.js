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
    this.getUpcomingTrips();
  }

  getTripInstances() {
    this.trips = this.getTravelerTrips()
      .map(tripObj => new Trip(tripObj, this.allDestinationData));
    return this.trips;
  };

  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
    return travelerTrips;
  };

  getPresentTrips() {
    this.presentTrips = this.trips.filter((trip) => {
      return trip.isCurrent === true;
    })
  };

  getPendingTrips() {
    this.pendingTrips = this.trips.filter(instance => instance.status === "pending");
  };

  getPastTrips() {
    this.pastTrips = this.trips.filter(instance => instance.isPast === true);
  };

  getUpcomingTrips() {
    this.upcomingTrips = this.trips.filter((trip) => {
      return trip.isUpcoming === true;
    })
  };

  getCostOfApprovedTrips() {
    const currentYear = new Date().getFullYear();

    let approvedTrips = this.trips.filter(trip => {
      return (trip.status === "approved" && new Date(trip.date).getFullYear() === currentYear);
    });
      let totalCost = approvedTrips.reduce((sum, trip) => {
        sum += trip.calculateCost();
        return sum;
      }, 0);
    return totalCost;
  };
};

export default Trips;
