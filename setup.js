const fs = require('fs');

module.exports = {
  getStories:  function() { return fs.readFileSync("./resources/stories") },
  getPlayers:  function() { return fs.readFileSync("./resources/players") },
  getStations: function() { return fs.readFileSync("./resources/stations") }
}
