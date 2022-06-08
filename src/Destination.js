class Destination {
  constructor(id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt) {
  this.id = id;
  this.destination = destination;
  this.estimatedLodgingCostPerDay = estimatedLodgingCostPerDay;
  this.estimatedFlightCostPerPerson = estimatedFlightCostPerPerson
  this.image = image;
  this.alt = alt;
  }
}


//how to get API data into class instance
function mapAPIDataToDestination() {
  let mappedData = apiData.map(destination => {
    return new Destination (destination.id, destination.destination, destination.estimatedLodgingCostPerDay,
      destination.estimatedFlightCostPerPerson, destination.image, destination.alt);
  })
}
