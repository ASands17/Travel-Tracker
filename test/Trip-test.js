import { expect } from "chai";
import Trip from "../src/Trip";

describe("Trip", () => {
  let singleTrip1;
  let singleTrip2;
  let trip1, trip2;

  beforeEach(() => {
    singleTrip1 =
      {
      "id": 1,
      "userID": 1,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "pending",
      "suggestedActivities": []
      },

      singleTrip2 =
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },

    trip1 = new Trip(singleTrip1);
    trip2 = new Trip(singleTrip2);
  });

  it("should be an instance of Trip", () => {
    expect(trip1).to.be.an.instanceof(Trip);
    expect(trip2).to.be.an.instanceof(Trip);
  });

  it("should have a unique Trip ID", () => {
    expect(trip1.id).to.equal(1);
    expect(trip2.id).to.equal(2);
  });

  it("should have a destination ID", function () {
    expect(trip1.destinationId).to.equal(49);
    expect(trip2.destinationId).to.equal(25);
  });

  it("should have the number of travelers", function () {
    expect(trip1.travelers).to.equal(1);
    expect(trip2.travelers).to.equal(5);
  });

  it("should have the start date of the trip", function () {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
  });

  it("should have the trip duration", function () {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it("should have the status", function () {
    expect(trip1.status).to.equal("pending");
    expect(trip2.status).to.equal("approved");
  });
});
