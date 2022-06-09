class Traveler {
  constructor(singleTraveler) {
    this.id = singleTraveler.id;
    this.name = singleTraveler.name;
    //may add traveler type later to add flair to greeting
    // this.travelerType = singleTraveler.travelerType;
  }

  getTravelerName() {
    return this.name.split(" ")[0];
  }
}



export default Traveler;

//
// Your testing suite should test all of the functionality of the application, including the following:
//
// Class default properties
// Class methods
// Anything that updates class properties
