class Trip {
  constructor(tripObj, destinationDataAll){
    this.id = tripObj.id;
    this.destinationId = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    this.destinationObj;
    this.isCurrent;
    this.isUpcoming;
    this.isPast;

    //maybe refactor below to be one method
    this.checkIfCurrentTrip();
    this.checkIfUpcomingTrip();
    this.checkIfPast();
  }

  determineDestination(destinationId, destinationDataAll) {
    let tripDestination = destinationDataAll.find(destinationObj => {
      return destinationObj.id === destinationId;
    })
    this.destinationObj = tripDestination;
    return tripDestination;
  }

  calculateCost() {
    let flightCost = this.travelers * this.destinationObj.estimatedFlightCostPerPerson;
    let lodgingCost = this.duration * this.destinationObj.estimatedLodgingCostPerDay;
    // console.log("flight in trip", this.destinationObj.estimatedFlightCostPerPerson)
    let totalCost = flightCost + lodgingCost;
    let totalCostWithAgentFee = totalCost + (totalCost * .10);
    return totalCostWithAgentFee;
  }

  checkIfCurrentTrip() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endDate = new Date(this.date);
    endDate.setDate(endDate.getDate() + this.duration);
    if(new Date(this.date) <= today && today <= endDate) {
      this.isCurrent = true;
    } else {
      this.isCurrent = false;
    }
  }

  checkIfUpcomingTrip() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let tripDate = new Date(this.date);
    if (today < tripDate && this.status != "pending") {
      this.isUpcoming = true;
    } else {
      this.isUpcoming = false;
    }
  }

  checkIfPast() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let tripDate = new Date(this.date);
    if (today > tripDate && !this.isCurrent) {
      this.isPast = true;
    } else {
      this.isPast = false;
    }
  // console.log("isPast", this.isPast)
  }
}
export default Trip;
