const app = require("./bin/express");

const port = 3333;

app.get("/", (req, res) => {
  res.status(200).send("Ola marlon");
});

app.listen(port, () => {
  console.log(`Api initialized success in port: ${port}`);
});
