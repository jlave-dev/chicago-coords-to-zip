const GeoJsonGeometriesLookup = require("geojson-geometries-lookup");
const geoJson = require("./chicago.json");

const glookup = new GeoJsonGeometriesLookup(geoJson);

module.exports = function getAreaFromCoords(lat, long) {
  const point = { type: "Point", coordinates: [long, lat] };
  const containers = glookup.getContainers(point);
  if (containers.features && containers.features.length > 0) {
    return containers.features[0].properties || undefined;
  } else {
    return undefined;
  }
};
