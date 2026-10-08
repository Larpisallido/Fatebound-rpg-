/* ==========================================
   FATEBOUND - NAVIGATION
   ========================================== */

const screens = {

    lobby:
        document.getElementById("lobby"),

    newGame:
        document.getElementById("newGameScreen"),

    characterCreation:
        document.getElementById("characterCreationScreen"),

    statPotential:
        document.getElementById("statPotentialScreen"),

    fateDetails:
        document.getElementById("fateDetailsScreen"),

    continue:
        document.getElementById("continueScreen"),

    game:
        document.getElementById("gameScreen")

};


function hideAllScreens() {

    Object.values(screens).forEach(screen => {

        if (screen) {
            screen.classList.add("hidden");
        }

    });

}


function showScreen(screen) {

    hideAllScreens();

    if (screen) {
        screen.classList.remove("hidden");
    }

}


function showLobby() {
    showScreen(screens.lobby);
}


function showNewGame() {
    showScreen(screens.newGame);
}


function showCharacterCreation() {
    showScreen(screens.characterCreation);
}


function showStatPotential() {
    showScreen(screens.statPotential);
}


function showFateDetails() {
    showScreen(screens.fateDetails);
}


function showContinue() {
    showScreen(screens.continue);
}


function showGame() {
    showScreen(screens.game);
}
