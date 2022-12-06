const canParkACar = () => {
  const spot = new ParkingSpot(VEHICLE_CAR);
  const v = spot.park(new Vehicle(VEHICLE_CAR, "1234", "Nano"));

  console.assert(v === true, "Cannot park a car.");
}

const cannotParkACarAtBikeSpot = () => {
  const spot = new ParkingSpot(VEHICLE_CAR);
  const v = spot.park(new Vehicle(VEHICLE_CAR, "1234", "Nano"));

  console.assert(v === true, "Cannot park a car at bike's spot");
};

const canCreateAFloor = () => {
  const floor = new ParkingFloor(0, {VEHICLE_BIKE: 20, VEHICLE_CAR: 30 });
  console.assert(floor, "");
  console.log("canCreateAFloor", floor);
};


const runTests = () => {
  // park at spot
  canParkACar();
  cannotParkACarAtBikeSpot();

  // test floor
  canCreateAFloor();
}
