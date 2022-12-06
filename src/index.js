(() => {
  const FLOORS = [
    {
      VEHICLE_BIKE: 20,
      VEHICLE_CAR: 20,
    }
  ]

  const lot = new ParkingLot("Test Parking Lot", FLOORS);
  const ticket = lot.park(VEHICLE_BIKE, new Vehicle(VEHICLE_BIKE, "123", "Maruti"))


  setTimeout(() => {
    const charges = lot.exit(ticket);
    console.log(lot.floors, charges);
  }, 4000);


})();
