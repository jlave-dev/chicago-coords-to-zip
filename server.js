const express = require("express");
const app = express();
const getZipFromCoords = require("./get-zip-from-coords");

const PORT = 3000;

app.get("/", (req, res) => {
  try {
    const { lat, long } = req.query;
    if (!lat || !long) {
      return res.status(400).send("lat or long query parameters were missing.");
    }
    const zip = getZipFromCoords(lat, long);
    return res.send(zip);
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
