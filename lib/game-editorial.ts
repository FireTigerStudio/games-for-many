export type GameEditorial = {
  summary: string;
  objective: string;
  modes: string;
  input: string;
  deviceSetup: string;
  invite: string;
  tips: string[];
  pickedBecause: string;
  limitations: string;
};

export const gameEditorial: Record<string, GameEditorial> = {
  "bounce-path-multiplayer": {
    summary: "A compact physics puzzle about shaping a route before the bouncing ball commits to it. It suits players who prefer experimentation and comparing solutions over reflex-heavy competition.",
    objective: "Place and adjust obstacles so the ball follows a safe path to its destination. Watch the result, identify where the route fails, then revise the layout.",
    modes: "The game presents solo and multiplayer choices. Its multiplayer appeal is based on comparing puzzle solutions rather than direct combat.",
    input: "Mouse or touch controls are used to drag and reposition obstacles.",
    deviceSetup: "Browser play; mouse or touchscreen input is documented.", invite: "A specific friend invitation method has not been verified.",
    tips: ["Make one small change between attempts so you can see which obstacle affected the route.", "Use the ball's first collision to judge the angle of the rest of the path.", "Leave extra clearance around narrow gaps instead of relying on a perfect bounce."],
    pickedBecause: "It adds a slower cooperative-comparison option to a catalog otherwise dominated by races and duels.",
    limitations: "Players looking for simultaneous head-to-head action may find the puzzle structure less competitive."
  },
  "ninja-parkour-multiplayer": {
    summary: "A direct online obstacle race where movement accuracy matters more than fighting. Rooms and matchmaking make it useful for either planned sessions or a quick public race.",
    objective: "Reach the finish before the other runners by moving steadily and timing jumps through the course.",
    modes: "Create a room, join an existing room or enter matchmaking.", input: "Move with A/D or Left/Right and jump with W or Up Arrow.",
    deviceSetup: "Keyboard controls are verified for desktop browser play.", invite: "Room creation and joining are visible; the exact sharing flow may vary inside the game.",
    tips: ["Prioritize clean landings instead of jumping at every possible moment.", "Use early attempts to learn obstacle timing before trying to maximize speed.", "Keep movement inputs short near narrow platforms to avoid overcorrecting."],
    pickedBecause: "It has a clear multiplayer objective, readable controls and both room and matchmaking routes.", limitations: "It is keyboard-focused, and success depends on precise platform movement."
  },
  "multiplayer-pong": {
    summary: "A minimal online paddle duel that starts quickly and keeps the rules familiar. It works well for short rematches because there is almost no setup to learn.",
    objective: "Track the ball with your paddle and return it so the opponent cannot defend their side.", modes: "Public matchmaking and private-room play are documented.",
    input: "Move the mouse to position the paddle; Escape returns to the title screen.", deviceSetup: "Desktop browser with mouse input is verified.", invite: "Private-room play is available; follow the in-game room flow to connect.",
    tips: ["Return to the center after each hit so both edges remain reachable.", "Watch the ball's angle immediately after contact rather than following the opponent's paddle.", "Use small mouse movements near the edge to avoid overshooting."],
    pickedBecause: "It is a recognizable two-player format with simple controls and a private-room option.", limitations: "The stripped-down design offers less progression than larger sports games."
  },
  "master-checkers-multiplayer": {
    summary: "A flexible checkers page for online opponents, computer practice or two people sharing one device. The multiple modes make it one of the easiest board-game choices for different setups.",
    objective: "Move diagonally, capture opposing pieces and protect routes that can promote a piece at the far side of the board.", modes: "Online multiplayer, computer opponent and local friend modes are visible.",
    input: "Click or tap a piece, then choose a valid destination.", deviceSetup: "Mouse and touch input are supported; local players share the same board.", invite: "Online opponent play is verified, but a specific friend-invite method is not confirmed.",
    tips: ["Keep pieces connected so a capture does not expose another piece immediately.", "Check for forced captures before planning a longer move.", "Avoid sending a single piece forward without support unless promotion is secure."],
    pickedBecause: "It combines a familiar ruleset with local, online and AI choices in one official embed.", limitations: "Players unfamiliar with forced-capture rules may need a practice round."
  },
  "nightmare-runners": {
    summary: "A lively knockout race with traps, monsters and shared-keyboard support. It works for local competition while also offering online or bot opponents.",
    objective: "Survive the obstacle course and advance through each race without being eliminated.", modes: "Single-player online or bot competition and a local two-player mode are documented.",
    input: "Solo uses WASD or Arrow Keys plus Space. Locally, Player 1 uses WASD and G; Player 2 uses Arrow Keys and L.", deviceSetup: "Desktop shared-keyboard play is verified.", invite: "Online play is available, but a specific private invitation flow is not confirmed.",
    tips: ["Let crowded opponents trigger uncertain traps before committing.", "Use short directional corrections after landing instead of holding a key continuously.", "In local play, agree on hand positions before starting so the keyboard remains comfortable."],
    pickedBecause: "It offers a rare combination of local controls, online competition and spectator-friendly knockout rounds.", limitations: "Busy obstacles can make early rounds feel chaotic, especially for a new player."
  },
  "gang-fall-party": {
    summary: "A cartoon arena fighter about knocking rivals from elevated platforms. It supports a local duel and larger online battles, making it suitable for quick rotation at a party.",
    objective: "Use movement, running and punches to force opponents off the arena while staying on the platform.", modes: "Local 1v1, online play and a larger Vs All mode are documented.",
    input: "Player 1 uses WASD, C and V. Player 2 uses Arrow Keys, O and P.", deviceSetup: "Desktop shared-keyboard controls are verified.", invite: "Online modes are available; the exact friend invitation route is not confirmed.",
    tips: ["Fight from the safer center and make opponents approach the edge.", "Save running movement for repositioning instead of staying at full speed.", "After a missed punch, move away briefly rather than trading hits beside a drop."],
    pickedBecause: "Its controls are clearly split for two local players and the objective is easy for spectators to understand.", limitations: "The game contains light cartoon fighting and deliberately unstable platform action."
  },
  "castle-wars-legacy": {
    summary: "A tactical card duel that combines resource management, castle defense and direct attacks. It is better suited to players who want decisions and deck planning rather than reflex action.",
    objective: "Spend resources on cards that build your castle, defend its wall or damage the opponent until you achieve the match objective.", modes: "Online friend battles, tournaments, campaign play and AI practice are described.",
    input: "Click or tap cards and menu options during each turn.", deviceSetup: "Pointer or touch-style input is documented.", invite: "Online friend play is available; guest access was confirmed during review.",
    tips: ["Balance resource production with immediate defense instead of spending every turn on attacks.", "Keep one affordable response available when the opponent builds momentum.", "Read the wall and castle values separately before choosing a damage card."],
    pickedBecause: "It provides a deeper online strategy option with both practice and competitive modes.", limitations: "Deck and resource systems take longer to learn than a traditional board game."
  },
  "carrom-pro": {
    summary: "A local pass-and-play carrom game with realistic collisions and several scoring formats. It suits players who prefer careful aim and alternating turns on one screen.",
    objective: "Position the striker, choose power and direction, then pot the required pieces before the opponent under the selected rules.", modes: "Classic Carrom, Disc Pool, Freestyle and local pass-and-play are documented.",
    input: "Drag to position the striker, pull back to aim and set power, then release to shoot.", deviceSetup: "Local players share the pointer or touchscreen.", invite: "No invitation is needed for the verified local pass-and-play mode.",
    tips: ["Plan where the striker will stop, not only which piece it will hit.", "Use moderate power for crowded areas so pieces remain controllable.", "Clear an easy piece before attempting a difficult bank shot."],
    pickedBecause: "It offers polished tabletop physics and a clear local mode without requiring separate controls for each player.", limitations: "Turns are slower than action games, and learning rebound angles takes practice."
  },
  "turkish-draughts": {
    summary: "A distinct draughts variant where movement and captures run horizontally and vertically. AI, same-device and online modes make it useful for learning or competing in different setups.",
    objective: "Capture opposing pieces through orthogonal movement and promote pieces while protecting your own formation.", modes: "AI, two people on one device, online opponents and spectator features are described.",
    input: "Click or tap a piece and then a valid horizontal or vertical destination.", deviceSetup: "Mouse or touch-style shared-board controls are documented.", invite: "Online opponent play is verified; a private friend invitation method is not confirmed.",
    tips: ["Do not apply diagonal-checkers habits; scan rows and columns before every move.", "Keep pieces supporting adjacent lanes so a capture does not open a long route.", "Use AI mode to learn the unfamiliar starting formation before an online match."],
    pickedBecause: "It adds a less common board-game ruleset with local, online and practice modes.", limitations: "Players familiar only with diagonal draughts need time to adjust to the orthogonal rules."
  },
  "mcatlants": {
    summary: "A shared-keyboard cooperative platform adventure where two players collect required items, defeat monsters and reach a portal together.",
    objective: "Work as a team to collect the black coins, handle enemies and open the route to the portal.", modes: "The reviewed mode is local two-player cooperation on one device.",
    input: "Movement uses WASD and Arrow Keys; Q and P throw each player's sword. Touch controls are also listed by the supplier.", deviceSetup: "Desktop shared-keyboard play is verified; mobile touch controls are documented but not deeply reviewed.", invite: "No invitation is needed for local cooperation.",
    tips: ["Keep both characters close enough to respond when enemies appear.", "Collect required coins before pushing to the portal area.", "Assign each player a side of the keyboard before the first moving section."],
    pickedBecause: "It gives the local collection a true cooperative objective instead of another head-to-head duel.", limitations: "Progress depends on both players, so one missed item or separated character can slow the team."
  }
};

export function getGameEditorial(slug: string): GameEditorial | undefined { return gameEditorial[slug]; }
