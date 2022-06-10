class Destination {
  // constructor(id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt)
  constructor(destinationData)  {
  this.id = destinationData.id;
  this.destination = destinationData.destination;
  this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
  this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson
  this.image = destinationData.image;
  this.alt = destinationData.alt;
  }
}


//how to get API data into class instance
// function mapAPIDataToDestination() {
//   let mappedData = apiData.map(destination => {
//     return new Destination (destination.id, destination.destination, destination.estimatedLodgingCostPerDay,
//       destination.estimatedFlightCostPerPerson, destination.image, destination.alt);
//   })
// }
