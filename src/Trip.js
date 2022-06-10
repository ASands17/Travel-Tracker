class Trip {
  constructor(tripObj){
    this.id = tripObj.id;
    this.destinationId = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    // this.suggestedActivities = tripObj.suggestedActivities;
  }
}
export default Trip;
