import { expect } from "chai";
import Trips from "../src/Trips";

describe("Trips", () => {
  let allTripsData;
  let traveler1Id, traveler2Id, traveler3Id;
  let trips1, trips2, trips3;

  beforeEach(() => {
    traveler1Id = 1;
    traveler2Id = 2;
    traveler3Id = 3;

    allTripsData = [
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
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 4,
      "userID": 1,
      "destinationID": 14,
      "travelers": 2,
      "date": "2022/02/25",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 5,
      "userID": 2,
      "destinationID": 29,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 7,
      "userID": 1,
      "destinationID": 17,
      "travelers": 5,
      "date": "2022/5/28",
      "duration": 20,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 8,
      "userID": 2,
      "destinationID": 39,
      "travelers": 6,
      "date": "2022/02/07",
      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 10,
      "userID": 1,
      "destinationID": 50,
      "travelers": 6,
      "date": "2022/07/23",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
      }
    ]

    trips1 = new Trips(traveler1Id, allTripsData);
    trips2 = new Trips(traveler2Id, allTripsData);
    trips3 = new Trips(traveler3Id, allTripsData);
  });

  it("should be an instance of Trips", () => {
    expect(allTripsData).to.be.an("array");
    expect(trips1).to.be.an.instanceof(Trips);
    expect(trips2).to.be.an.instanceof(Trips);
    expect(trips3).to.be.an.instanceof(Trips);
  });

  it("should hold all trips", () => {
    expect(allTripsData).to.deep.equal([
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
      {
      "id": 2,
      "userID": 2,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 4,
      "userID": 1,
      "destinationID": 14,
      "travelers": 2,
      "date": "2022/02/25",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 5,
      "userID": 2,
      "destinationID": 29,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 7,
      "userID": 1,
      "destinationID": 17,
      "travelers": 5,
      "date": "2022/5/28",
      "duration": 20,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 8,
      "userID": 2,
      "destinationID": 39,
      "travelers": 6,
      "date": "2022/02/07",
      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 10,
      "userID": 1,
      "destinationID": 50,
      "travelers": 6,
      "date": "2022/07/23",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
      }
    ]);
  });

  it("should have a unique Traveler ID", () => {
    expect(trips1.travelerId).to.equal(1);
    expect(trips2.travelerId).to.equal(2);
    expect(trips3.travelerId).to.equal(3);
  });

  it("should get all of a Traveler's trips by ID", function () {
    expect(trips3.getTravelerTrips(traveler3Id, allTripsData)).to.deep.equal([
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 6,
      "userID": 3,
      "destinationID": 35,
      "travelers": 3,
      "date": "2022/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 9,
      "userID": 3,
      "destinationID": 19,
      "travelers": 5,
      "date": "2022/12/19",
      "duration": 19,
      "status": "pending",
      "suggestedActivities": []
      }
      ])
    });

    it("should get all pending trips for the Traveler", function () {
      expect(trips3.getTravelerPendingTrips(traveler3Id, allTripsData)).to.deep.equal([
        {
        "id": 9,
        "userID": 3,
        "destinationID": 19,
        "travelers": 5,
        "date": "2022/12/19",
        "duration": 19,
        "status": "pending",
        "suggestedActivities": []
        }
      ]);
    });
});
