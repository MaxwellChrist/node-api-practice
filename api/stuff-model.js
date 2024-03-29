module.exports = {
    getAll,
    getByIndex,
    add,
};

const OBJECTS = 
[
  "Bayonetta",
  "Bowser",
  "Bowser Jr.",
  "Captain Falcon",
  "Charizard",
  "Cloud",
  "Corrin",
  "Dark Pit",
  "Diddy Kong",
  "Donkey Kong",
  "Dr. Mario",
  "Duck Hunt",
  "Falco",
  "Fox",
  "Ganondorf",
  "Greninja",
  "Ike",
  "Jigglypuff",
  "King Dedede",
  "Kirby",
  "Link",
  "Little Mac",
  "Lucario",
  "Lucas",
  "Lucina",
  "Luigi",
  "Mario",
  "Marth",
  "Mega Man",
  "Meta Knight",
  "Mewtwo",
  "Mii Brawler",
  "Mii Gunner",
  "Mii Swordfighter",
  "Mr. Game & Watch",
  "Ness",
  "Olimar",
  "Pac-Man",
  "Palutena",
  "Peach",
  "Pikachu",
  "Pit",
  "R.O.B.",
  "Robin",
  "Rosalina & Luma",
  "Roy",
  "Ryu",
  "Samus",
  "Sheik",
  "Shulk",
  "Sonic",
  "Toon Link",
  "Villager",
  "Wario",
  "Wii Fit Trainer",
  "Yoshi",
  "Zelda",
  "Zero Suit Samus"
]

async function getAll() {
    return OBJECTS;
}
async function getByIndex(i) {
    return OBJECTS[i];
}
async function add(object) {
    OBJECTS.push(object);
    return object;
}