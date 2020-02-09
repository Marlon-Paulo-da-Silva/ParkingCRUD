const app = require("./bin/express");
const Parking = require("./module/parking/schema");
const moment = require("moment");
const port = 3333;

app.get("/", async (req, res) => {
  const pk = await Parking.create({
    vehicle: "gol branco",
    vehiclePlate: "CDF-4074",
    parkingStartAt: moment(),
    pricePerHour: 10
  });

  const all = await Parking.find();

  res.status(200).send(all);
});

app.listen(port, () => {
  console.log(`Api initialized success in port: ${port}`);
});
