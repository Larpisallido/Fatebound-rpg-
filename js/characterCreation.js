/* ==========================================
   FATEBOUND - CHARACTER CREATION
   ========================================== */


const rollOriginButton =
    document.getElementById("rollOriginButton");

const originContinueButton =
    document.getElementById("originContinueButton");

const originResult =
    document.getElementById("originResult");

const originName =
    document.getElementById("originName");

const originDescription =
    document.getElementById("originDescription");

const originSkill =
    document.getElementById("originSkill");


let currentCharacter = null;


/* ==========================================
   RESET CREATION
   ========================================== */

function resetCharacterCreation() {

    currentCharacter = null;

    if (originResult)
        originResult.classList.add("hidden");

    if (rollOriginButton)
        rollOriginButton.classList.remove("hidden");

    if (originContinueButton)
        originContinueButton.classList.add("hidden");

}


/* ==========================================
   START FATEBOUND CREATION
   ========================================== */

function startFateboundCreation() {

    resetCharacterCreation();

    showCharacterCreation();

}


/* ==========================================
   ROLL ORIGIN
   ========================================== */

if (rollOriginButton) {

    rollOriginButton.addEventListener(
        "click",
        () => {

            const result =
                rollOrigin();

            currentCharacter = {

                mode: "Fatebound",

                originRoll:
                    result.roll,

                origin:
                    result.name,

                skill:
                    result.skill,

                skillLevel:
                    result.skillLevel,

                createdAt:
                    new Date().toISOString()

            };


            /* =========================
               DISPLAY RESULT
               ========================= */

            originResult.classList.remove("hidden");


            originName.textContent =
                `${result.roll} — ${result.name}`;


            if (result.special) {

                originDescription.textContent =
                    "A mysterious orphan with no known memories of their past.";

                originSkill.textContent =
                    "Your past and abilities are unknown.";

            } else {

                originDescription.textContent =
                    `You were born into the circumstances of a ${result.name.toLowerCase()}.`;

                originSkill.textContent =
                    `Starting Skill: ${result.skill} Lv.${result.skillLevel}`;

            }


            /* =========================
               BUTTONS
               ========================= */

            rollOriginButton.classList.add("hidden");

            originContinueButton.classList.remove("hidden");


            /* =========================
               SAVE
               ========================= */

            saveGame(currentCharacter);

        }
    );

}


/* ==========================================
   CONTINUE FROM ORIGIN
   ========================================== */

if (originContinueButton) {

    originContinueButton.addEventListener(
        "click",
        () => {

            /*
             * AGE GENERATION WILL BE ADDED HERE.
             */

            alert(
                "Origin complete. Age generation is the next feature."
            );

        }
    );

}


/* ==========================================
   BACK
   ========================================== */

const characterCreationBackButton =
    document.getElementById(
        "characterCreationBackButton"
    );


if (characterCreationBackButton) {

    characterCreationBackButton.addEventListener(
        "click",
        () => {

            resetCharacterCreation();

            showNewGame();

        }
    );

}
