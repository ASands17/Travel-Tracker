import { expect } from "chai";
import Trip from "../src/Trip";

describe("Trip", () => {
  let singleTrip1;
  let singleTrip2;
  let trip1, trip2;
  let destinationData;

  beforeEach(() => {
    singleTrip1 =
      {
      "id": 1,
      "userID": 1,
      "destinationID": 49,
      "travelers": 1,
      // "date": "2022/09/16",
      "date": "2022/06/05",
      "duration": 8,
      "status": "pending",
      "suggestedActivities": [],
      "isCurrent": "",
      },

      singleTrip2 =
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      // "date": "2022/10/04",
      "date": "2022/04/18",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": [],
      "isCurrent": "",
      },

      destinationData =[
      {
        "id": 49,
        "destination": "Castries, St Lucia",
        "estimatedLodgingCostPerDay": 650,
        "estimatedFlightCostPerPerson": 90,
        "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        "alt": "aerial photography of rocky mountain under cloudy sky"
      },
      {
        "id": 25,
        "destination": "New York, New York",
        "estimatedLodgingCostPerDay": 175,
        "estimatedFlightCostPerPerson": 200,
        "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
      }
    ]

    trip1 = new Trip(singleTrip1, destinationData);
    trip2 = new Trip(singleTrip2, destinationData);
  });

  it("should be an instance of Trip", () => {
    expect(trip1).to.be.an.instanceof(Trip);
    expect(trip2).to.be.an.instanceof(Trip);
  });

  it("should have a unique Trip ID", () => {
    expect(trip1.id).to.equal(1);
    expect(trip2.id).to.equal(2);
  });

  it("should have a destination ID", () => {
    expect(trip1.destinationId).to.equal(49);
    expect(trip2.destinationId).to.equal(25);
  });

  it("should have the number of travelers", () => {
    expect(trip1.travelers).to.equal(1);
    expect(trip2.travelers).to.equal(5);
  });

  it("should have the start date of the trip", () => {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
  });

  it("should have the trip duration", () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it("should have the status", () => {
    expect(trip1.status).to.equal("pending");
    expect(trip2.status).to.equal("approved");
  });

  it("should determine the trip destination", () => {
    expect(trip1.determineDestination()).to.deep.equal(
      {
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
      }
    );

    expect(trip1.destinationObj).to.deep.equal(
      {
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
      }
    // expect(trip2.determineDestination(trip2.destinationId, destinationData)).to.equal("New York, New York");
    );
  });

  it("should calculate the trip cost", () => {
    expect(trip1.calculateCost(trip1.determineDestination(destinationData))).to.equal(5819);
    // expect(trip2.calculateCost(destinationData)).to.equal("New York, New York");
  });

  // it("should update property to show if trip is current", () => {
  //   expect(trip1.isCurrent.to.equal(true);
  // })


});
