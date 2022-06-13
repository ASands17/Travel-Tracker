import { expect } from "chai";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1, traveler2, traveler3;
  let traveler1Data, traveler2Data, traveler3Data;

  beforeEach(() => {
    traveler1Data = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    };
    traveler2Data = {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker"
    };
    traveler3Data = {
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    };
    traveler1 = new Traveler(traveler1Data);
    traveler2 = new Traveler(traveler2Data);
    traveler3 = new Traveler(traveler3Data);
  });

  it("should be an instance of Traveler", () => {
    expect(traveler1Data).to.be.an("object");
    expect(traveler1).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceof(Traveler);
    expect(traveler3).to.be.an.instanceof(Traveler);
  });

  it("should have a unique Traveler ID", () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
    expect(traveler3.id).to.equal(3);
  });

  it("should have a name", () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler2.name).to.equal("Rachael Vaughten");
    expect(traveler3.name).to.equal("Sibby Dawidowitsch");
  });

  it("should be able to return a Traveler's first name", function () {
    expect(traveler1.getTravelerName()).to.equal("Ham");
    expect(traveler2.getTravelerName()).to.equal("Rachael");
    expect(traveler3.getTravelerName()).to.equal("Sibby");
  });
});
