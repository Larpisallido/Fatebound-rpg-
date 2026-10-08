/* ==========================================
   FATEBOUND - CHARACTER CREATION
   ========================================== */


/* ==========================================
   ELEMENTS
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

const originRollDisplay =
    document.getElementById("originRollDisplay");

const originRollNumber =
    document.getElementById("originRollNumber");

const rollStatus =
    document.getElementById("rollStatus");

const characterCreationBackButton =
    document.getElementById(
        "characterCreationBackButton"
    );


/* ==========================================
   CHARACTER DATA
   ========================================== */

let currentCharacter = null;

let rolling = false;


/* ==========================================
   RESET
   ========================================== */

function resetCharacterCreation() {

    currentCharacter = null;

    rolling = false;


    if (originResult)
        originResult.classList.add("hidden");


    if (originRollDisplay)
        originRollDisplay.classList.add("hidden");


    if (rollOriginButton) {

        rollOriginButton.classList.remove("hidden");

        rollOriginButton.disabled = false;

    }


    if (originContinueButton)
        originContinueButton.classList.add("hidden");


    if (originRollNumber)
        originRollNumber.textContent = "?";


    if (rollStatus)
        rollStatus.textContent = "Awaiting Fate...";

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

            if (rolling) {
                return;
            }


            rolling = true;


            /* =========================
               HIDE OLD RESULT
               ========================= */

            originResult.classList.add("hidden");

            originContinueButton.classList.add("hidden");


            /* =========================
               SHOW ROLL DISPLAY
               ========================= */

            originRollDisplay.classList.remove("hidden");


            rollOriginButton.disabled = true;

            rollOriginButton.classList.add(
                "rolling-button"
            );


            rollStatus.textContent =
                "Fate is deciding...";


            /* =========================
               DETERMINE REAL RESULT
               ========================= */

            const result =
                rollOrigin();


            /* =========================
               ANIMATION SETTINGS
               ========================= */

            const duration = 2400;

            const startTime = performance.now();

            let lastNumber = 0;


            /* =========================
               ROLL ANIMATION
               ========================= */

            function animateRoll(currentTime) {

                const elapsed =
                    currentTime - startTime;


                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );


                /*
                 * Ease-out curve.
                 *
                 * At the beginning:
                 * numbers change rapidly.
                 *
                 * Near the end:
                 * numbers slow down.
                 */

                const eased =
                    1 - Math.pow(
                        1 - progress,
                        3
                    );


                if (progress < 1) {

                    /*
                     * Rolling speed decreases
                     * as the animation progresses.
                     */

                    const speed =
                        Math.max(
                            35,
                            180 * (1 - eased)
                        );


                    const now =
                        performance.now();


                    if (
                        now - lastNumber >= speed
                    ) {

                        const randomNumber =
                            Math.floor(
                                Math.random() * 100
                            ) + 1;


                        originRollNumber.textContent =
                            randomNumber;


                        lastNumber = now;

                    }


                    requestAnimationFrame(
                        animateRoll
                    );


                } else {

                    /* =====================
                       FINAL NUMBER
                       ===================== */

                    originRollNumber.textContent =
                        result.roll;


                    originRollNumber.classList.add(
                        "origin-final"
                    );


                    rollStatus.textContent =
                        "Fate has spoken.";


                    /*
                     * Small delay before
                     * revealing the origin.
                     */

                    setTimeout(
                        () => {

                            revealOrigin(result);

                        },
                        550
                    );

                }

            }


            requestAnimationFrame(
                animateRoll
            );

        }
    );

}


/* ==========================================
   REVEAL ORIGIN
   ========================================== */

function revealOrigin(result) {

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
       DISPLAY ORIGIN
       ========================= */

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
       SHOW RESULT
       ========================= */

    originResult.classList.remove(
        "hidden"
    );


    /* =========================
       BUTTONS
       ========================= */

    rollOriginButton.classList.add(
        "hidden"
    );


    originContinueButton.classList.remove(
        "hidden"
    );


    /* =========================
       SAVE
       ========================= */

    saveGame(currentCharacter);


    rolling = false;

}


/* ==========================================
   CONTINUE FROM ORIGIN
   ========================================== */

if (originContinueButton) {

    originContinueButton.addEventListener(
        "click",
        () => {

            startStatPotential();

        }
    );

}


/* ==========================================
   BACK
   ========================================== */

if (characterCreationBackButton) {

    characterCreationBackButton.addEventListener(
        "click",
        () => {

            if (rolling) {
                return;
            }


            resetCharacterCreation();

            showNewGame();

        }
    );

       }
