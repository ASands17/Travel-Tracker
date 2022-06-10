class Trip {
  constructor(tripObj, destinationDataAll){
    this.id = tripObj.id;
    this.destinationId = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    this.destinationObj;
    // this.suggestedActivities = tripObj.suggestedActivities;
  }

  determineDestination(destinationId, destinationDataAll) {
    let tripDestination = destinationDataAll.find(destinationObj => {
      return destinationObj.id === destinationId;
    })
    this.destinationObj = tripDestination;
    return tripDestination;
  }

  calculateCost(destinationObj) {
    let flightCost = this.travelers * destinationObj.estimatedFlightCostPerPerson;
    let lodgingCost = this.duration * destinationObj.estimatedLodgingCostPerDay;
    let totalCost = flightCost + lodgingCost;
    return totalCost;
  }
}
export default Trip;
