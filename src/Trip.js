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

    this.checkIfCurrentTrip();
    // this.suggestedActivities = tripObj.suggestedActivities;
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
    let totalCost = flightCost + lodgingCost;
    let totalCostWithAgentFee = totalCost + (totalCost * .10);
    return totalCostWithAgentFee;
  }

  checkIfCurrentTrip() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);


    const endDate = new Date(this.date);


    endDate.setDate(endDate.getDate() + this.duration);
    //setDate can take a UTC code and a number and add them up
    //the method is able to take in both parameters and return a Date
    //if it were minutes or seconds it would be different
    //setDate gets an actual date, getDate is getting the UTC code Date
    //That's why we wrap everything in setDate

    // if(new Date(this.date) < today && )



  }
}
export default Trip;
