import Trip from './Trip'

    //gets all trips for one user
class Trips{
  constructor(travelerId, allTripsData, allDestinationData){
    this.travelerId = travelerId;
    this.allTrips = allTripsData;
    this.trips;
    this.allDestinationData = allDetinationData;

    this.getTripInstances();
  }

  //will get array of all a user's trips

  getTripInstances() {
    this.trips = this.getTravelerTrips()
      .map(tripObj => new Trip(tripObj));
    return this.trips;
  }

  getTravelerTrips() {
    let travelerTrips = this.allTrips.filter(trip => {
      return trip.userID === this.travelerId;
    })
      return travelerTrips;
  }

  //Why is this not working????????

  //I have access to array of user trips in this.trips
  //That means I have access to calculate cost
  //must first determine destination for each trip
  //then I should be able to calculate cost since destination will be
  //availiable to me.

  //so why is this giving me undefined???

  getCostOfApprovedTrips() {
    let destinationTrips = this.trips.map(trip => {
      return trip.determineDestination(trip.destinationObj.id, this.allDestinationData);
    });

    let approvedTrips = destinationTrips.filter(trip => {
      return trip.status === "approved";
    });
    console.log("all trips", approvedTrips)
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
