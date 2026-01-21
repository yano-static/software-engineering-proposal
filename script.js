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
            fullClue:
              "The team gathers at the beginning—roles are assigned, goals are set. This is where the narrative begins."
          },
          {
            name: "Progress Tracking",
            clue: "Keep watch over milestones.",
            hintGame: "general",
            fullClue:
              "Documenting every step forward ensures no progress is lost to time."
          },
          {
            name: "Taking ID pictures for portfolio; discussing the first activity; giving of templates",
            clue: "Identity and documentation shape the journey.",
            hintGame: "the-forgotten-files",
            fullClue:
              "Like collecting lost files, each document is a piece of the larger truth waiting to be discovered."
          },
          {
            name: "Editing pictures for portfolio",
            clue: "Refining the visual narrative.",
            hintGame: "hallowpoint",
            fullClue:
              "As the statue is restored piece by piece, so too must the visual identity be carefully crafted."
          },
          {
            name: "Finalizing portfolio",
            clue: "The collection is complete.",
            hintGame: "general",
            fullClue:
              "When all pieces come together, the full picture emerges at last."
          }
        ]
      },
      {
        weekLabel: "Week 2",
        days: "Portfolio review",
        tasks: [
          {
            name: "Checking of portfolio online",
            clue: "Review and verification of all work.",
            hintGame: "the-forgotten-files",
            fullClue:
              "Searching through digital records reveals what was hidden before."
          },
          {
            name: "No class",
            clue: "A moment to breathe.",
            hintGame: "general",
            fullClue: "Even heroes need rest before the next chapter."
          },
          {
            name: "Progress Tracking",
            clue: "Monitoring forward momentum.",
            hintGame: "general",
            fullClue:
              "Each day brings new progress toward the ultimate goal."
          },
          {
            name: "No class",
            clue: "Quiet halls, paused progress.",
            hintGame: "general",
            fullClue:
              "The campus falls silent, but the story waits patiently."
          },
          {
            name: "Break (all)",
            clue: "Shared rest across the party.",
            hintGame: "general",
            fullClue:
              "The entire group takes a step back, preparing for the next arc."
          }
        ]
      },
      {
        weekLabel: "Week 3",
        days: "Submission week",
        tasks: [
          {
            name: "Submitting of portfolio & PIA1, TL Meeting, GD (Suggesting possible projects/games), Submitting GD recording",
            clue: "The first major submission moment.",
            hintGame: "the-locked-wing",
            fullClue:
              "Information is gathered, recorded, and locked away for safekeeping."
          },
          {
            name: "Progress Tracking",
            clue: "Document every milestone.",
            hintGame: "general",
            fullClue:
              "Progress is only real when recorded and confirmed."
          },
          {
            name: "Submitting of PGD1 and PIA2, Giving tasks to TL, TL distributing tasks to members, Doing PGA1",
            clue: "Work flows like information through a network.",
            hintGame: "campus-quest",
            fullClue:
              "Tasks are distributed, puzzles are laid out, and each member must find their role in the system."
          },
          {
            name: "Checking and finalizing PGA1, Submitting PGA1",
            clue: "The first assessment arrives.",
            hintGame: "general",
            fullClue:
              "Every task must be checked, verified, and submitted before moving forward."
          },
          {
            name: "Break (all)",
            clue: "A brief pause in the flow.",
            hintGame: "general",
            fullClue:
              "After submissions, a quiet break lets the dust settle."
          }
        ]
      },
      {
        weekLabel: "Week 4",
        days: "Final stretch",
        tasks: [
          {
            name: "Progress Tracking",
            clue: "The year winds down, progress continues.",
            hintGame: "general",
            fullClue:
              "As December fades, the team presses on toward January's challenges."
          },
          {
            name: "Break (all)",
            clue: "Rest before the next chapter.",
            hintGame: "general",
            fullClue:
              "Even the strongest adventurers need respite before the quest continues."
          }
        ]
      }
    ]
  },
  january: {
    month: "January",
    weeks: [
      {
        weekLabel: "Week 1 (Jan 5–11)",
        days: "Project presentation",
        tasks: [
          {
            name: "Presentation of the proposed projects",
            clue: "Ideas take shape before the audience.",
            hintGame: "general",
            fullClue:
              "The four games are presented to the world for the first time."
          },
          {
            name: "Brainstorm game titles/names",
            clue: "Names carry power and meaning.",
            hintGame: "general",
            fullClue:
              "Each title is a key that unlocks the story within."
          },
          {
            name: "Content for PR1 from SD and SP",
            clue: "Content flows from design minds.",
            hintGame: "the-forgotten-files",
            fullClue:
              "Like files scattered across campus, content is gathered from multiple sources."
          },
          {
            name: "Submission of PR1 @ 5 PM",
            clue: "The first deadline arrives.",
            hintGame: "campus-quest",
            fullClue:
              "Time is a puzzle to solve—deadlines are part of the game."
          },
          {
            name: "Meeting with TL",
            clue: "Leadership guides the path forward.",
            hintGame: "the-locked-wing",
            fullClue:
              "The team leader holds keys to unlocking the next phase."
          },
          {
            name: "Brainstorm game titles/names pt.2",
            clue: "Refinement through continued dialogue.",
            hintGame: "general",
            fullClue:
              "Great names emerge only after careful contemplation."
          },
          {
            name: "SDA started working on the recorded GD",
            clue: "Documentation begins the creative process.",
            hintGame: "the-forgotten-files",
            fullClue:
              "Recordings preserve the creative spark for posterity."
          },
          {
            name: "SD brainstormed ideas for the game logos",
            clue: "Visual identity takes form.",
            hintGame: "hallowpoint",
            fullClue:
              "Like fragments of a broken statue, logos piece together the visual soul of each game."
          },
          {
            name: "Submission of PR",
            clue: "Another submission, another milestone.",
            hintGame: "general",
            fullClue: "Progress is proven through submission."
          }
        ]
      },
      {
        weekLabel: "Week 2",
        days: "Continued development",
        tasks: [
          {
            name: "Continuation of the GD",
            clue: "The creative work deepens.",
            hintGame: "hallowpoint",
            fullClue:
              "Like searching for statue fragments, the concept continues to take shape."
          },
          {
            name: "Initial WBS",
            clue: "The structure of the project emerges.",
            hintGame: "campus-quest",
            fullClue:
              "Every puzzle has a structure; every project needs a WBS."
          },
          {
            name: "Progress Tracking",
            clue: "Steady progress toward the goal.",
            hintGame: "general",
            fullClue:
              "Tracking ensures no work is lost or forgotten."
          },
          {
            name: "Submission of PR2 @ 8 AM",
            clue: "Early morning, another deadline.",
            hintGame: "campus-quest",
            fullClue:
              "Time waits for no one in this locked environment."
          },
          {
            name: "Final brainstorm for the concepts of the approved game titles to start the logos",
            clue: "Concepts solidify before visuals bloom.",
            hintGame: "general",
            fullClue:
              "The narrative foundation must be strong before artistic expression can flourish."
          },
          {
            name: "Submission of PR",
            clue: "Progress report submitted.",
            hintGame: "general",
            fullClue:
              "Each submission is proof of forward momentum."
          }
        ]
      },
      {
        weekLabel: "Week 3",
        days: "Final push",
        tasks: [
          {
            name: "Submission of printed rubric with SDA filled out on the day of the group's practical exam",
            clue: "Documentation meets evaluation.",
            hintGame: "the-forgotten-files",
            fullClue:
              "Every piece of paper is a clue waiting to be found."
          },
          {
            name: "Internal deadline for the game logos, WBS, and presentation content/theme",
            clue: "The internal deadline looms.",
            hintGame: "campus-quest",
            fullClue:
              "Multiple puzzles must be solved before the escape route appears."
          },
          {
            name: "Progress Tracking",
            clue: "Monitor the final stretch.",
            hintGame: "general",
            fullClue: "In the final moments, every action counts."
          },
          {
            name: "PRELIM PRACTICAL EXAM (Presentation of the game logos)",
            clue: "The logos face their trial.",
            hintGame: "hallowpoint",
            fullClue:
              "Like the statue restored, the visual identity is now complete and ready to shine."
          },
          {
            name: "Compilation of progress for week 3",
            clue: "The week's work is gathered.",
            hintGame: "the-forgotten-files",
            fullClue:
              "All files are compiled into one final archive."
          },
          {
            name: "Submission of PR",
            clue: "The final progress report.",
            hintGame: "general",
            fullClue:
              "Work is only real when submitted and confirmed."
          }
        ]
      },
      {
        weekLabel: "Week 4",
        days: "Rest and reflection",
        tasks: [
          {
            name: "Break (all)",
            clue: "The quest pauses for a moment.",
            hintGame: "general",
            fullClue:
              "Even the greatest adventures need chapters of rest."
          }
        ]
      }
    ]
  }
};

const GAME_CONCEPTS = [
  {
    id: "the-locked-wing",
    title: "The Locked Wing",
    mood: "Mysterious • Exploratory • Tense",
    overview:
      "A system failure in the Dalupan Building prevents the evacuation alert from reaching the entire campus, leading to the mysterious disappearance and eventual collapse of the university grounds.",
    summary: `A system failure in the Dalupan Building prevents the evacuation alert from reaching the entire campus. As the player explores from the LB Building across key campus areas, they must uncover the reason behind the alert failure and navigate to the Dalupan Building itself. The investigation reveals a critical twist: students were safely confined in a secure area—the player's true objective is to release them. This narrative explores themes of miscommunication, hidden safety protocols, and the weight of responsibility.`,
    logos: [
      "thelockedwing.png",
      "thelockedwing2.png",
      "thelockedwing4.png",
      "thelockedwing6.png",
      "logo.png"
    ]
  },
  {
    id: "the-forgotten-files",
    title: "The Forgotten Files",
    mood: "Investigative • Melancholic • Revelatory",
    overview:
      "After receiving a mysterious message from a missing friend, the player embarks on a journey across the campus to find them. Scattered files reveal fragments of the school's hidden secrets.",
    summary: `The player receives an urgent message from their missing friend and begins a quest across the campus from Gastambide Gate. Their search leads them through various areas, culminating in the Archives Room at Podicit Area, where lost documents reveal campus mysteries. The journey progresses from exploration to discovery, leading to an encounter with the disoriented but cooperative friend. Together, they uncover truths about the campus. The narrative branches at the climax: choose self-preservation and abandon the friend, or sacrifice yourself to save them—becoming the new "missing friend" with memory lost. This game explores themes of friendship, sacrifice, and the cyclical nature of mysteries.`,
    logos: [
      "theforgottenfiles.png",
      "theforgottenfiles2.png",
      "theforgottenfiles3.png",
      "theforgottenfiles4.png",
      "AIpromptedlogo.png"
    ]
  },
  {
    id: "hallowpoint",
    title: "Hallowpoint",
    mood: "Dreamlike • Contemplative • Transformative",
    overview:
      "The player awakens in an abandoned campus garden with no clear goal. As they wander aimlessly, curiosity leads them to a broken Lualhati statue—the key to restoring the campus's lost essence.",
    summary: `Beginning in Recto Garden with no initial purpose, the player wanders the dreamlike campus—a blank slate of exploration. Their curiosity gradually focuses when they discover the first fragment of a broken Lualhati statue in the Quadrangle central hub. A new objective emerges: restore the statue. Through exploration of optional puzzle sections, the player collects remaining fragments. Once assembled, a bright light envelops the scene, restoring the campus to normalcy. The narrative ends ambiguously: the player wakes to an NPC's casual remark about "putting things back together," leaving them uncertain whether the experience was real or imagined. This game explores themes of healing, ambiguity, and quiet transformation.`,
    logos: [
      "hallowpoint2.png"
    ]
  },
  {
    id: "campus-quest",
    title: "Campus Quest",
    mood: "Playful • Puzzle-driven • Strategic",
    overview:
      "A campus-wide systems puzzle where gates, rooms, and devices form a dynamic network the player must analyze and reconfigure to escape in time.",
    summary: `The player begins at the Main Gate, realizing the campus has turned into a puzzle-box of interlinked systems: RFID gates, elevators, lab access, and hidden server rooms. By exploring key points such as the LB Building, CC Lab, and Admin Offices, the player pieces together how different nodes control access around the campus. In each area, they solve device-based puzzles or logic challenges that reveal new connections on their mental map. The endgame reveals a critical systems misconfiguration preventing safe evacuation. By choosing how to reroute power and access, the player either restores balance—or traps themselves in a new kind of lockdown. This game emphasizes systemic thinking, cause-and-effect, and the complexity of modern campuses.`,
    logos: [
      "campusquest.png"
    ]
  }
];

// ===== SCREEN MANAGEMENT =====
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
  }

  if (screenId === "gameConceptsScreen") {
    renderGameCards();
  }
}

// ===== WBS SCREEN LOGIC =====
let currentMonth = "december";

function switchMonth(ev, month) {
  currentMonth = month;
  document.querySelectorAll(".month-tab").forEach(tab => {
    tab.classList.remove("active");
  });
  ev.target.classList.add("active");
  renderWBS();
}

function renderWBS() {
  const monthData = WBS_DATA[currentMonth];
  const wbsGrid = document.getElementById("wbsGrid");
  if (!monthData || !wbsGrid) return;

  wbsGrid.innerHTML = "";

  monthData.weeks.forEach(week => {
    const weekColumn = document.createElement("div");
    weekColumn.className = "week-column";

    const weekHeader = document.createElement("div");
    weekHeader.className = "week-header";
    weekHeader.textContent = `${week.weekLabel} – ${week.days}`;

    const tasksList = document.createElement("div");
    tasksList.className = "tasks-list";

    week.tasks.forEach(task => {
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
      taskItem.textContent = task.name;

      taskItem.addEventListener("click", () => {
        showEventDetails(task);
      });

      tasksList.appendChild(taskItem);
    });

    weekColumn.appendChild(weekHeader);
    weekColumn.appendChild(tasksList);
    wbsGrid.appendChild(weekColumn);
  });
}

function showEventDetails(task) {
  const eventContent = document.getElementById("eventContent");
  const eventDefault = document.querySelector(".event-default");

  if (!eventContent) return;

  if (eventDefault) {
    eventDefault.style.display = "none";
  }

  eventContent.innerHTML = `
    <div class="event-title">${task.name}</div>
    <div class="event-month">${currentMonth.toUpperCase()}</div>
    <div class="event-clue">${task.fullClue}</div>
    <div class="event-game-pill">
      Related to: ${formatGameName(task.hintGame)}
    </div>
  `;
  eventContent.classList.add("active");
}

function formatGameName(id) {
  if (id === "general") return "General Project Progress";
  const game = GAME_CONCEPTS.find(g => g.id === id);
  return game ? game.title : "Unknown";
}

// ===== GAME CONCEPTS SCREEN LOGIC =====
function renderGameCards() {
  const grid = document.getElementById("gameCardsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  GAME_CONCEPTS.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.addEventListener("click", () => openGameDetail(game.id));

    card.innerHTML = `
      <div class="game-card-header">
        ${game.title}
      </div>
      <div class="game-card-body">
        <div class="game-card-title">${game.mood}</div>
        <div class="game-card-preview">${game.overview}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function openGameDetail(gameId) {
  const game = GAME_CONCEPTS.find(g => g.id === gameId);
  if (!game) return;

  const titleEl = document.getElementById("detailTitle");
  const moodEl = document.getElementById("detailMood");
  const summaryEl = document.getElementById("detailSummary");
  const logosGrid = document.getElementById("logosGrid");

  if (!titleEl || !moodEl || !summaryEl || !logosGrid) return;

  titleEl.textContent = game.title;
  moodEl.textContent = game.mood;
  summaryEl.textContent = game.summary;

  logosGrid.innerHTML = "";
  game.logos.forEach((logoSrc, index) => {
    const item = document.createElement("div");
    item.className = "logo-item";

    const img = document.createElement("img");
    img.src = logoSrc;
    img.alt = `${game.title} Logo ${index + 1}`;

    img.addEventListener("click", () => {
      openModal(logoSrc, `${game.title} – Logo ${index + 1}`);
    });

    item.appendChild(img);
    logosGrid.appendChild(item);
  });

  switchScreen("gameDetailScreen");
}

// ===== MODAL =====
function openModal(src, title) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  if (!modal || !modalImage || !modalTitle) return;

  modalImage.src = src;
  modalTitle.textContent = title;
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  renderWBS();
  renderGameCards();
});
