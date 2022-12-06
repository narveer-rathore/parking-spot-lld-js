class ParkingLot {
  constructor(name, floors) {
    this.id = generateId("pl_");
    this.name = name;
    this.floors = [];
    floors.forEach((fl, index) => {
      this.floors.push(new ParkingFloor(index, fl));
    });
  }

  park(type, vehicle) {
    for (const floor of this.floors) {
      const spot = floor.getEmptySpot(type);
      if (spot) {
        spot.park(vehicle);
        return `${this.name}:${floor.number}:${type}:${spot.id}:${Date.now()}`;
      }
    };
  }

  exit(ticketId) {
    const [name, fNumber, type, spotId, startTime] = ticketId.split(":");
    for (const floor of this.floors) {
      if (floor.number === Number(fNumber)) {
        const lastTime = floor.free(type, spotId);

        const totalTime = lastTime - Number(startTime);

        return totalTime / 1000;
      }
    }
  }

}
