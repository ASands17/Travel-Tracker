class Trip {
  constructor(tripObj, destinationDataAll){
    this.id = tripObj.id;
    this.destinationId = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    // this.suggestedActivities = tripObj.suggestedActivities;
  }

  determineDestination(destinationId, destinationDataAll) {
    let tripDestination = destinationDataAll.filter(destinationObj => {
      return destinationObj.id === destinationId;
    })
    return tripDestination[0].destination;
  }

  calculateCost(tripObj, destinationDataAll) {
    let flightCost = tripObj.travelers * destinationDataAll.estimatedFlightCostPerPerson;
    let lodgingCost = tripObj.duration * destinationDataAll.estimatedLodgingCostPerDay;
    let totalCost = flightCost + lodgingCost;
    return totalTripCost;
  }
}
export default Trip;
