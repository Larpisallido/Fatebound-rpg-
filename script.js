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

const continueScreen =
    document.getElementById("continueScreen");


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

const continueBackButton =
    document.getElementById("continueBackButton");


/* ==========================================
   SAVE DATA
   ========================================== */

const SAVE_KEY = "fatebound_save";


/* ==========================================
   SCREEN NAVIGATION
   ========================================== */

function hideAllScreens() {

    lobby.classList.add("hidden");

    newGameScreen.classList.add("hidden");

    continueScreen.classList.add("hidden");
}


function showLobby() {

    hideAllScreens();

    lobby.classList.remove("hidden");
}


function showNewGame() {

    hideAllScreens();

    newGameScreen.classList.remove("hidden");
}


function showContinue() {

    hideAllScreens();

    continueScreen.classList.remove("hidden");
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

        if (!savedGame) {

            showContinue();

            return;
        }

        const gameData =
            JSON.parse(savedGame);

        alert(
            "Saved adventure found!\n\n" +
            "Mode: " +
            gameData.mode +
            "\n\n" +
            "The full adventure system will be added later."
        );
    }
);


/* ==========================================
   BACK BUTTONS
   ========================================== */

newGameBackButton.addEventListener(
    "click",
    showLobby
);


continueBackButton.addEventListener(
    "click",
    showLobby
);


/* ==========================================
   FATEBOUND MODE
   ========================================== */

fateboundModeButton.addEventListener(
    "click",
    () => {

        const gameData = {

            mode: "Fatebound",

            createdAt:
                new Date().toISOString()

        };


        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(gameData)
        );


        alert(
            "Fatebound adventure created and saved."
        );

    }
);


/* ==========================================
   CLASSIC MODE
   ========================================== */

classicModeButton.addEventListener(
    "click",
    () => {

        const gameData = {

            mode: "Classic",

            createdAt:
                new Date().toISOString()

        };


        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(gameData)
        );


        alert(
            "Classic adventure created and saved."
        );

    }
);


/* ==========================================
   SETTINGS
   ========================================== */

settingsButton.addEventListener(
    "click",
    () => {

        alert(
            "Settings will be added later."
        );

    }
);
