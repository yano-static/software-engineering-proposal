// ===== DATA OBJECTS =====
const WBS_DATA = {
    december: {
        month: "December",
        weeks: [
            {
                weekLabel: "Week 1",
                days: "Group created, Picking roles",
                tasks: [
                    {
                        name: "Group created, Picking roles",
                        clue: "The first step in any adventure is assembling your team.",
                        hintGame: "general",
                        fullClue: "The team gathers at the beginning—roles are assigned, goals are set. This is where the narrative begins."
                    },
                    // ...rest of tasks and all other weeks/months...
                ]
            }
        ]
    },
    // january: {...}
};

const GAME_CONCEPTS = [
    {
        id: "the-locked-wing",
        title: "The Locked Wing",
        mood: "Mysterious • Exploratory • Tense",
        overview: "A system failure in the Dalupan Building prevents the evacuation alert from reaching the entire campus, leading to the mysterious disappearance and eventual collapse of the university grounds.",
        summary: `A system failure in the Dalupan Building prevents the evacuation alert from reaching the entire campus. ...`,
        logos: [
            "thelockedwing.jpg",
            "thelockedwing2.jpg",
            "thelockedwing4.jpg",
            "thelockedwing6.jpg",
            "logo.jpg"
        ]
    },
    // ...other games...
];

// ===== FUNCTIONS =====
// switchScreen, switchMonth, renderWBS, renderGameCards, openGameDetail, openModal, closeModal, etc.
// plus the initialization code that runs on load
