/* ==========================================
   FATEBOUND MENU
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
   LOBBY
   ========================================== */

newGameButton.addEventListener(
    "click",
    showNewGame
);


continueButton.addEventListener(
    "click",
    showContinue
);


/* ==========================================
   BACK
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

        alert(
            "Fatebound Mode character creation will be built next."
        );

    }
);


/* ==========================================
   CLASSIC MODE
   ========================================== */

classicModeButton.addEventListener(
    "click",
    () => {

        alert(
            "Classic Mode character creation will be built next."
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
