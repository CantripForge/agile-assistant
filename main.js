const os       = require("os");
const setup    = require("./setup");
const readline = require("readline-sync");

function cleanInput(bytes){
  return bytes.toString().split(os.EOL).filter( input => input != '');
}

const stories  = cleanInput(setup.getStories());
const players  = cleanInput(setup.getPlayers());
const stations = cleanInput(setup.getStations());

// set up "stories" object to collect player scores
storiesScoreMap = stories.map( story => [story, [] ]);

for(i = 0; i<1 /* stories.length */; i++){

  story = stories[i];
  storyScores = [story];

  console.log(os.EOL + "Collecting scores for the following story: " + os.EOL + story + os.EOL);

  for(x = 0; x<players.length; x++){
    player = players[x];
    score  = readline.question(`${player}, what do you score this story? `);
    storiesScoreMap[i][1].push( { player: player, score: score } );
  }
}

console.log(storiesScoreMap);
