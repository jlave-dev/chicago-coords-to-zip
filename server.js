const express = require("express");
const app = express();
const getAreaFromCoords = require("./get-zip-from-coords");

const PORT = 3000;

app.get("/", (req, res) => {
  const { lat, long } = req.query;
  if (!lat || !long) {
    res.status(404).send("lat or long query parameters were missing.");
  }
  const area = getAreaFromCoords(lat, long);
  if (!area) {
    res.status(404).send();
  } else {
    res.send(area);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
