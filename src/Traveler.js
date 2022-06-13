class Traveler {
  constructor(singleTraveler) {
    this.id = singleTraveler.id;
    this.name = singleTraveler.name;
  }

  getTravelerName() {
    return this.name.split(" ")[0];
  }
}

export default Traveler;
