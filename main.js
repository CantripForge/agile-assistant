const os       = require("os");
const setup    = require("./setup");
const readline = require("readline");

function cleanInput(bytes){
  return bytes.toString().split(os.EOL).filter( input => input != '');
}

const stories  = cleanInput(setup.getStories());
const players  = cleanInput(setup.getPlayers());
const stations = cleanInput(setup.getStations());

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

for(i = 0; i<stories.length; i++){

  story = stories[i];
  storyScores = [story];

  for(x = 0; x<players.length; x++){
    player = players[x];
    rl.question('sup?!', (answer) => { console.log(answer + "!!") });
    console.log(player);
  }
}
