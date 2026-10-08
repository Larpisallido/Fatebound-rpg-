/* ==========================================
   FATEBOUND - MAIN SCRIPT
   ========================================== */


/* ==========================================
   SCREENS
   ========================================== */

const lobby =
    document.getElementById("lobby");

const newGameScreen =
    document.getElementById("newGameScreen");

const characterCreationScreen =
    document.getElementById("characterCreationScreen");

const continueScreen =
    document.getElementById("continueScreen");

const gameScreen =
    document.getElementById("gameScreen");


/* ==========================================
   BUTTONS
   ========================================== */

const newGameButton =
    document.getElementById("newGameButton");

const continueButton =
    document.getElementById("continueButton");

const settingsButton =
    document.getElementById("settingsButton");

const fateboundModeButton =
    document.getElementById("fateboundModeButton");

const classicModeButton =
    document.getElementById("classicModeButton");

const newGameBackButton =
    document.getElementById("newGameBackButton");

const characterCreationBackButton =
    document.getElementById("characterCreationBackButton");

const continueBackButton =
    document.getElementById("continueBackButton");

const enterWorldButton =
    document.getElementById("enterWorldButton");

const gameBackButton =
    document.getElementById("gameBackButton");

const rollOriginButton =
    document.getElementById("rollOriginButton");

const originContinueButton =
    document.getElementById("originContinueButton");


/* ==========================================
   CHARACTER CREATION ELEMENTS
   ========================================== */

const originResult =
    document.getElementById("originResult");

const originName =
    document.getElementById("originName");

const originDescription =
    document.getElementById("originDescription");

const originSkill =
    document.getElementById("originSkill");


/* ==========================================
   SAVE DATA
   ========================================== */

const SAVE_KEY = "fatebound_save";


/* ==========================================
   ORIGIN TABLE
   ========================================== */

const origins = {

    1: {
        name: "Starving Beggar",
        skill: "Begging",
        level: 1
    },

    2: {
        name: "Abandoned Orphan",
        skill: "Scavenging",
        level: 1
    },

    3: {
        name: "Street Child",
        skill: "Street Awareness",
        level: 1
    },

    4: {
        name: "Slum Dweller",
        skill: "Street Survival",
        level: 1
    },

    5: {
        name: "Destitute Laborer's Child",
        skill: "Physical Labor",
        level: 1
    },

    6: {
        name: "Poor Farmer's Child",
        skill: "Farming",
        level: 1
    },

    7: {
        name: "Beggar Family",
        skill: "Begging",
        level: 2
    },

    8: {
        name: "Wandering Refugee Family",
        skill: "Survival",
        level: 1
    },

    9: {
        name: "Poor Fisherman's Family",
        skill: "Fishing",
        level: 1
    },

    10: {
        name: "Poor Hunter's Family",
        skill: "Hunting",
        level: 1
    },

    11: {
        name: "Village Farmer's Family",
        skill: "Farming",
        level: 2
    },

    12: {
        name: "Village Laborer's Family",
        skill: "Physical Labor",
        level: 2
    },

    13: {
        name: "Shepherd's Family",
        skill: "Animal Handling",
        level: 1
    },

    14: {
        name: "Woodcutter's Family",
        skill: "Woodcutting",
        level: 1
    },

    15: {
        name: "Fisherman's Family",
        skill: "Fishing",
        level: 2
    },

    16: {
        name: "Hunter's Family",
        skill: "Hunting",
        level: 2
    },

    17: {
        name: "Stablekeeper's Family",
        skill: "Riding",
        level: 1
    },

    18: {
        name: "Caravan Worker's Family",
        skill: "Navigation",
        level: 1
    },

    19: {
        name: "Innkeeper's Family",
        skill: "Hospitality",
        level: 1
    },

    20: {
        name: "Household Servant's Family",
        skill: "Housekeeping",
        level: 1
    },

    21: {
        name: "Blacksmith's Family",
        skill: "Blacksmithing",
        level: 1
    },

    22: {
        name: "Carpenter's Family",
        skill: "Carpentry",
        level: 1
    },

    23: {
        name: "Weaver's Family",
        skill: "Weaving",
        level: 1
    },

    24: {
        name: "Potter's Family",
        skill: "Pottery",
        level: 1
    },

    25: {
        name: "Village Scholar's Family",
        skill: "Literacy",
        level: 1
    },

    26: {
        name: "Master Blacksmith's Family",
        skill: "Blacksmithing",
        level: 2
    },

    27: {
        name: "Master Carpenter's Family",
        skill: "Carpentry",
        level: 2
    },

    28: {
        name: "Master Weaver's Family",
        skill: "Weaving",
        level: 2
    },

    29: {
        name: "Master Tanner's Family",
        skill: "Leatherworking",
        level: 1
    },

    30: {
        name: "Experienced Merchant's Family",
        skill: "Commerce",
        level: 1
    },

    31: {
        name: "Apothecary's Family",
        skill: "Herbalism",
        level: 1
    },

    32: {
        name: "Physician's Family",
        skill: "Medicine",
        level: 1
    },

    33: {
        name: "Scribe's Family",
        skill: "Writing",
        level: 1
    },

    34: {
        name: "Teacher's Family",
        skill: "Teaching",
        level: 1
    },

    35: {
        name: "Master Mason's Family",
        skill: "Masonry",
        level: 1
    },

    36: {
        name: "Shipwright's Family",
        skill: "Shipbuilding",
        level: 1
    },

    37: {
        name: "Professional Hunter's Family",
        skill: "Hunting",
        level: 3
    },

    38: {
        name: "Scout's Family",
        skill: "Reconnaissance",
        level: 1
    },

    39: {
        name: "Guard's Family",
        skill: "Weapon Handling",
        level: 1
    },

    40: {
        name: "Veteran Soldier's Family",
        skill: "Military Training",
        level: 1
    },

    41: {
        name: "Wealthy Merchant Family",
        skill: "Commerce",
        level: 2
    },

    42: {
        name: "Merchant Guild Family",
        skill: "Negotiation",
        level: 1
    },

    43: {
        name: "Banking Family",
        skill: "Finance",
        level: 1
    },

    44: {
        name: "Wealthy Artisan Family",
        skill: "Craftsmanship",
        level: 1
    },

    45: {
        name: "Renowned Blacksmith Family",
        skill: "Blacksmithing",
        level: 3
    },

    46: {
        name: "Renowned Physician Family",
        skill: "Medicine",
        level: 2
    },

    47: {
        name: "Scholar Family",
        skill: "Scholarship",
        level: 1
    },

    48: {
        name: "Academy Scholar's Family",
        skill: "Academic Theory",
        level: 1
    },

    49: {
        name: "Court Scribe's Family",
        skill: "Writing",
        level: 2
    },

    50: {
        name: "Guildmaster's Family",
        skill: "Guild Management",
        level: 1
    },

    51: {
        name: "Caravan Master Family",
        skill: "Navigation",
        level: 2
    },

    52: {
        name: "Ship Captain's Family",
        skill: "Navigation",
        level: 3
    },

    53: {
        name: "Renowned Hunter Family",
        skill: "Hunting",
        level: 4
    },

    54: {
        name: "Wealthy Landowner Family",
        skill: "Land Management",
        level: 1
    },

    55: {
        name: "Influential Local Family",
        skill: "Leadership",
        level: 1
    },

    56: {
        name: "Knight's Family",
        skill: "Swordsmanship",
        level: 1
    },

    57: {
        name: "Knight Commander's Family",
        skill: "Swordsmanship",
        level: 2
    },

    58: {
        name: "Noble Military Family",
        skill: "Military Strategy",
        level: 1
    },

    59: {
        name: "Noble Cavalry Family",
        skill: "Mounted Combat",
        level: 1
    },

    60: {
        name: "Noble Archer Family",
        skill: "Archery",
        level: 1
    },

    61: {
        name: "Noble Scholar Family",
        skill: "Scholarship",
        level: 2
    },

    62: {
        name: "Noble Administrator Family",
        skill: "Administration",
        level: 1
    },

    63: {
        name: "Minor Noble House",
        skill: "Etiquette",
        level: 1
    },

    64: {
        name: "Old Noble House",
        skill: "Etiquette",
        level: 2
    },

    65: {
        name: "Noble Diplomatic Family",
        skill: "Diplomacy",
        level: 1
    },

    66: {
        name: "Noble Political Family",
        skill: "Politics",
        level: 1
    },

    67: {
        name: "Noble Merchant House",
        skill: "Commerce",
        level: 3
    },

    68: {
        name: "Noble Mage Family",
        skill: "Magic Theory",
        level: 1
    },

    69: {
        name: "Noble Clerical Family",
        skill: "Religious Knowledge",
        level: 1
    },

    70: {
        name: "Baronial Household",
        skill: "Leadership",
        level: 2
    },

    71: {
        name: "Powerful Baron Family",
        skill: "Leadership",
        level: 3
    },

    72: {
        name: "Ancient Baron House",
        skill: "Swordsmanship",
        level: 3
    },

    73: {
        name: "Wealthy Baron House",
        skill: "Commerce",
        level: 4
    },

    74: {
        name: "Military Noble House",
        skill: "Military Strategy",
        level: 2
    },

    75: {
        name: "Elite Knight House",
        skill: "Swordsmanship",
        level: 4
    },

    76: {
        name: "Noble Cavalry House",
        skill: "Mounted Combat",
        level: 2
    },

    77: {
        name: "Noble Mage House",
        skill: "Magic Theory",
        level: 2
    },

    78: {
        name: "Noble Scholar House",
        skill: "Scholarship",
        level: 3
    },

    79: {
        name: "Political Noble House",
        skill: "Politics",
        level: 2
    },

    80: {
        name: "Diplomatic Noble House",
        skill: "Diplomacy",
        level: 2
    },

    81: {
        name: "Royal Administrator's House",
        skill: "Administration",
        level: 2
    },

    82: {
        name: "Powerful Noble House",
        skill: "Leadership",
        level: 4
    },

    83: {
        name: "Count Family",
        skill: "Leadership",
        level: 5
    },

    84: {
        name: "Count Military House",
        skill: "Military Strategy",
        level: 3
    },

    85: {
        name: "Count Knightly House",
        skill: "Swordsmanship",
        level: 5
    },

    86: {
        name: "Count Mage House",
        skill: "Magic Theory",
        level: 3
    },

    87: {
        name: "Count Political House",
        skill: "Politics",
        level: 3
    },

    88: {
        name: "Ancient Count House",
        skill: "Etiquette",
        level: 3
    },

    89: {
        name: "Marquis Family",
        skill: "Leadership",
        level: 6
    },

    90: {
        name: "Marquis Military House",
        skill: "Military Strategy",
        level: 4
    },

    91: {
        name: "Marquis Knightly House",
        skill: "Swordsmanship",
        level: 6
    },

    92: {
        name: "Marquis Mage House",
        skill: "Magic Theory",
        level: 4
    },

    93: {
        name: "Marquis Diplomatic House",
        skill: "Diplomacy",
        level: 4
    },

    94: {
        name: "Duke Family",
        skill: "Leadership",
        level: 7
    },

    95: {
        name: "Duke Military House",
        skill: "Military Strategy",
        level: 5
    },

    96: {
        name: "Duke Knightly House",
        skill: "Swordsmanship",
        level: 7
    },

    97: {
        name: "Ancient Duke House",
        skill: "Diplomacy",
        level: 5
    },

    98: {
        name: "Royal Family",
        skill: "Royal Etiquette",
        level: 1
    },

    99: {
        name: "Direct Royal Bloodline",
        skill: "Royal Authority",
        level: 1
    },

    100: {
        name: "Amnesiac Orphan",
        skill: "Unknown",
        level: 0,
        special: true
    }

};


/* ==========================================
   ORIGIN DESCRIPTIONS
   ========================================== */

function getOriginDescription(originNumber) {

    if (originNumber === 100) {

        return "A mysterious orphan with no known memories of their past.";

    }

    const origin =
        origins[originNumber];

    return `You were born into the circumstances of a ${origin.name.toLowerCase()}.`;
}


/* ==========================================
   SCREEN NAVIGATION
   ========================================== */

function hideAllScreens() {

    lobby.classList.add("hidden");

    newGameScreen.classList.add("hidden");

    characterCreationScreen.classList.add("hidden");

    continueScreen.classList.add("hidden");

    gameScreen.classList.add("hidden");
}


function showLobby() {

    hideAllScreens();

    lobby.classList.remove("hidden");
}


function showNewGame() {

    hideAllScreens();

    newGameScreen.classList.remove("hidden");
}


function showCharacterCreation() {

    hideAllScreens();

    characterCreationScreen.classList.remove("hidden");
}


function showContinue() {

    hideAllScreens();

    continueScreen.classList.remove("hidden");
}


function showGame() {

    hideAllScreens();

    gameScreen.classList.remove("hidden");
}


/* ==========================================
   NEW GAME
   ========================================== */

newGameButton.addEventListener(
    "click",
    showNewGame
);


/* ==========================================
   CONTINUE
   ========================================== */

continueButton.addEventListener(
    "click",
    () => {

        const savedGame =
            localStorage.getItem(SAVE_KEY);

       
