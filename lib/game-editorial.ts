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
  },
  "table-pong": {
    summary: "A straightforward local table-tennis duel with separate keyboard controls for two people. Short rallies and familiar scoring make it easy to rotate players.",
    objective: "Move your paddle into the ball's path, return each shot and make the opponent miss.", modes: "The reviewed setup is local two-player competition on one device.",
    input: "One player uses WASD and the other uses the Arrow Keys. On-screen arrows are documented for mobile.", deviceSetup: "Desktop shared-keyboard play is verified; mobile controls are documented but not deeply reviewed.", invite: "No invitation is needed for local play.",
    tips: ["Return toward the center after each shot.", "Use small corrections instead of holding one direction too long.", "Watch the ball immediately after contact to read its new angle."],
    pickedBecause: "It has clear split controls and a game format most players understand immediately.", limitations: "The simple presentation offers less variety than larger sports games."
  },
  "fish-eat-getting-big": {
    summary: "A shared-device growth game for up to three players. Each fish hunts smaller targets while avoiding anything large enough to eat it.",
    objective: "Eat smaller fish to grow, survive encounters with larger fish and become the strongest fish in the ocean.", modes: "Local play for up to three players is documented.",
    input: "Player 1 uses WASD, Player 2 uses the Arrow Keys, and Player 3 uses the mouse and left click.", deviceSetup: "Desktop keyboard-and-mouse sharing is verified.", invite: "No invitation is needed for local play.",
    tips: ["Stay near smaller targets until your size clearly increases.", "Avoid crossing another player's route when a larger fish is nearby.", "Give the mouse player enough desk space before starting a three-player round."],
    pickedBecause: "It supports three people on one device with clearly separated inputs.", limitations: "Three players must share a keyboard and mouse area, which can feel crowded on a small desk."
  },
  "fish-eat-fish-2": {
    summary: "A local survival contest with one-, two- and three-player modes. Growth creates an easy-to-read advantage, so new players can understand the match quickly.",
    objective: "Eat fish smaller than your own, grow over time and avoid becoming food for a larger rival.", modes: "Single-player, local two-player and local three-player modes are documented.",
    input: "Player 1 uses WASD, Player 2 uses the Arrow Keys, and Player 3 uses the mouse and left click.", deviceSetup: "Desktop shared keyboard and mouse controls are verified.", invite: "No invitation is required for local multiplayer.",
    tips: ["Do not chase a target into an area filled with larger fish.", "Use the edges to escape when the center becomes crowded.", "Track each player's size before challenging them directly."],
    pickedBecause: "It offers flexible local player counts and a simple survival loop suited to quick group sessions.", limitations: "The core eat-and-grow loop is repetitive during longer sessions."
  },
  "growwars-io": {
    summary: "A local arena duel where evolving heroes use movement, attacks and dashes on one shared keyboard. It is a more combat-focused choice for two players.",
    objective: "Damage and defeat the opposing hero while using movement and dashes to control distance in the arena.", modes: "Single-player and local two-player arena modes are documented.",
    input: "Player 1 uses WASD, F to attack and G to dash. Player 2 uses Arrow Keys, K to attack and L to dash.", deviceSetup: "Desktop shared-keyboard play is verified.", invite: "No invitation is needed for local play.",
    tips: ["Use the dash to escape after attacking rather than only to approach.", "Keep enough distance to see the opponent's attack startup.", "Agree on keyboard hand positions before the round begins."],
    pickedBecause: "It provides clearly divided two-player controls and a direct local arena format.", limitations: "The game centers on cartoon weapon combat and may not suit players looking for non-combat competition."
  },
  "aqua-dogy": {
    summary: "A cooperative-looking water-park platform adventure built around two dog siblings. The simple jump controls make it approachable for a shared-device session.",
    objective: "Guide both characters through the water park, collect the badges and use the black-hole goal to complete the route.", modes: "The reviewed gameplay supports two characters on one device.",
    input: "The documented jump keys are W and Up Arrow; mobile touch control is also listed.", deviceSetup: "Desktop two-key sharing is documented; mobile support is listed but not deeply reviewed.", invite: "No invitation is needed for shared-device play.",
    tips: ["Move both characters forward together so one is not left behind.", "Collect badges before committing to the final route.", "Use short jump presses near slide edges to avoid overshooting."],
    pickedBecause: "It adds a low-complexity cooperative option to the local catalog.", limitations: "The available supplier instructions are brief, so some movement details must be learned inside the game."
  },
  "aquapark-balls-party": {
    summary: "A local two-player race where groups of balls pass through number gates and compete to reach the finish pool first.",
    objective: "Choose favorable gates, preserve a useful ball count and reach the finish before the other player.", modes: "Single-player and local two-player racing modes are documented.",
    input: "Player 1 uses A and D; Player 2 uses the Left and Right Arrow Keys.", deviceSetup: "Desktop shared-keyboard controls are verified.", invite: "No invitation is needed for local competition.",
    tips: ["Read the next gate before changing lanes.", "Avoid a risky shortcut if it removes too many balls.", "Make small steering inputs so the group stays aligned with the ramp."],
    pickedBecause: "It uses only two keys per player, making local competition easy to start.", limitations: "The lane-based control is simple and may feel repetitive after several races."
  },
  "backgammonia-online-backgammon-game": {
    summary: "A browser adaptation of backgammon with computer and two-player options. Shared pointer controls make it suitable for turn-based play on one device.",
    objective: "Move all of your checkers around the board and bear them off before the opponent, using each dice roll legally.", modes: "Computer play and a two-player friend mode are documented; the title also presents itself as online backgammon.",
    input: "Use the mouse or touch controls to select and move pieces.", deviceSetup: "Pointer and touch-style controls are documented for a shared board.", invite: "A specific online invitation flow has not been verified.",
    tips: ["Use both dice values efficiently before committing to the first move.", "Avoid leaving a single exposed checker when a safer pair is available.", "Build blocking points before racing every checker toward home."],
    pickedBecause: "It brings a classic deeper board game to local and computer play with simple shared controls.", limitations: "Backgammon rules and legal-move restrictions take longer to learn than simpler grid games."
  },
  "dominoes-classic-duel": {
    summary: "A traditional dominoes duel with AI practice and online opponent play. It rewards planning around matching ends and tracking which values remain available.",
    objective: "Build the chain by matching the number on an open end and aim to play all of your dominoes before the opponent.", modes: "Artificial-intelligence practice and online multiplayer against an opponent are documented.",
    input: "Click or tap to select and place a legal domino.", deviceSetup: "Mouse and touch-style browser input are documented.", invite: "Online opponent play is verified; a private friend invitation method is not confirmed.",
    tips: ["Keep several number values available instead of using all copies of one value early.", "Notice which open ends repeatedly force the opponent to pass.", "Use doubles when they improve your future choices, not simply because they are available."],
    pickedBecause: "It offers a familiar board-game ruleset with both practice and live-opponent modes.", limitations: "The online flow may depend on available opponents, and private-room support is unconfirmed."
  },
  "music-night-battle-rhythm-game": {
    summary: "A fast online rhythm duel where accurate arrow timing builds combos and determines the result. It suits players who prefer reaction and pattern recognition.",
    objective: "Hit each directional prompt in time with the music, maintain combos and outperform the opponent.", modes: "Solo play and online multiplayer rhythm matches are documented.",
    input: "Use the Up, Down, Left and Right Arrow Keys in time with the notes.", deviceSetup: "Desktop keyboard play is documented.", invite: "Online matches are verified; a private invitation option is not confirmed.",
    tips: ["Watch the upcoming note lane rather than the judgment line alone.", "Recover with accurate single notes instead of rushing after a missed combo.", "Keep your fingers resting on all four arrow keys to reduce movement."],
    pickedBecause: "It adds a non-traditional competitive genre and a clear skill-based online objective.", limitations: "Rhythm timing can be difficult with audio latency or an unfamiliar keyboard layout."
  },
  "battle-jitsu": {
    summary: "A compact online card duel based on an elemental counter cycle. Matches emphasize anticipating the opponent rather than managing a large deck.",
    objective: "Choose the element that defeats the opponent's choice: fire beats snow, snow beats water, and water beats fire.", modes: "Online multiplayer battles are documented.",
    input: "Use the mouse to select an elemental card.", deviceSetup: "Desktop pointer input is documented.", invite: "Online multiplayer is verified; private friend matching is not confirmed.",
    tips: ["Avoid repeating the same element after it succeeds.", "Track short opponent patterns instead of guessing each turn independently.", "Change your rhythm occasionally so your choices are harder to read."],
    pickedBecause: "Its rules are easy to explain, but opponent prediction gives repeated duels some depth.", limitations: "The simple counter system offers less strategic variety than a full deck-building game."
  },
  "darts-pro-multiplayer": {
    summary: "An online darts match built around steady aim and exact 501 scoring. It is a slower, precision-focused alternative to the site's action games.",
    objective: "Reduce a starting score of 501 to exactly zero, finishing with a legal final throw rather than dropping below zero.", modes: "Online multiplayer darts is documented by the reviewed catalog entry.",
    input: "Aim with the mouse or touch controls, then click or tap to throw.", deviceSetup: "Mouse and touchscreen input are documented for browser play.", invite: "Online competition is documented; a private friend invitation flow has not been verified.",
    tips: ["Favor repeatable scoring areas before attempting narrow high-value targets.", "Plan the last few turns so a double finish remains available.", "Make small aim corrections and keep the release timing consistent."],
    pickedBecause: "It adds a recognizable precision sport with a clearly stated scoring objective.", limitations: "Exact finishing rules can be confusing for a first-time darts player, and private-room support is unconfirmed."
  },
  "tic-tac-toe-pro-multiplayer-challenge": {
    summary: "A lightweight online version of the familiar three-in-a-row game. Its short rounds work well for quick rematches and introductory strategy.",
    objective: "Place three matching marks in a horizontal, vertical or diagonal line before the opponent does.", modes: "Online two-player competition is documented.",
    input: "Click or tap an empty square to place a mark.", deviceSetup: "Mouse and touchscreen controls are documented.", invite: "Online play is documented, but a private friend invitation method has not been confirmed.",
    tips: ["Take the center when it is available because it participates in four winning lines.", "Block an immediate threat before building a slower attack.", "Create two possible winning lines at once so one move cannot stop both."],
    pickedBecause: "It offers instantly recognizable rules and very little setup before an online match.", limitations: "The small board limits long-term strategic variety, and the exact matchmaking flow may vary."
  },
  "tic-tac-toe-with-ai-and-multiplayer": {
    summary: "A simple tic-tac-toe board with computer practice and a two-player option. It is designed for fast rounds on desktop or mobile browsers.",
    objective: "Complete a row, column or diagonal of three marks while preventing the other side from doing the same.", modes: "Computer-opponent and two-player modes are documented; whether the two-player mode is remote or shared-device has not been independently confirmed.",
    input: "Click or tap an open board square.", deviceSetup: "Mouse and touch input are documented.", invite: "No verified private invitation flow is available in the current review notes.",
    tips: ["Check the opponent's last move for an immediate threat before placing your own mark.", "Use a corner to create diagonal and edge-line possibilities.", "When going second, protect the center or force the game toward a draw."],
    pickedBecause: "The AI option gives players a way to practice before using the two-player mode.", limitations: "The connection method for the advertised multiplayer option still needs a deeper mode-by-mode review."
  },
  "greedy-snake-multiplayer-duel": {
    summary: "A colorful Snake-style duel about growing longer while preserving room to turn. The familiar movement loop makes the basic goal easy to understand.",
    objective: "Collect growth items, avoid collisions and survive longer or build a stronger snake than the opponent.", modes: "Multiplayer duel play and additional level-based modes are described by the supplier.",
    input: "Mouse click or tap controls are listed; follow the prompts shown inside the selected mode.", deviceSetup: "Pointer and touch-style input are documented.", invite: "The exact opponent-matching and friend-invitation routes have not been verified.",
    tips: ["Leave turning space around the snake's head instead of chasing every nearby item.", "Use the open outer area when the center becomes crowded.", "Plan an exit route before entering a narrow gap for food."],
    pickedBecause: "It adds a recognizable growth-and-survival format to the multiplayer catalog.", limitations: "The supplier's control and matchmaking descriptions are brief, so some mode details must be learned in game."
  },
  "black-and-white-stickman": {
    summary: "A two-character platform adventure where both stick figures must collect the required items and reach the portal. Coordination matters more than racing.",
    objective: "Collect the star points and monster balls, keep both characters safe and guide them to the portal.", modes: "A shared-device two-character adventure is documented.",
    input: "The documented jump keys are W and Up Arrow; mobile touch controls are also listed.", deviceSetup: "Desktop shared-keyboard and mobile touch play are documented.", invite: "No invitation is needed for the documented shared-device setup.",
    tips: ["Move the two characters in stages so neither is stranded beyond an obstacle.", "Check the route for missed collectibles before approaching the portal.", "Use short jump inputs near platform edges to reduce overshooting."],
    pickedBecause: "It provides a cooperative objective with minimal controls for two people on one device.", limitations: "The supplier instructions do not explain every movement interaction, so the opening section serves as a tutorial."
  },
  "duo-water-and-fire": {
    summary: "A cooperative platform game where two elemental characters have different safe routes. Players must collect the key and bring both characters to the exit.",
    objective: "Use each character's elemental ability to cross matching hazards, avoid green water and reach the door with the key.", modes: "The documented setup is a two-character shared-device adventure.",
    input: "One character uses WASD and the other uses the Arrow Keys; double jump and mobile touch controls are listed.", deviceSetup: "Desktop shared-keyboard and mobile touch support are documented.", invite: "No invitation is needed for shared-device cooperation.",
    tips: ["Match each character to water of the same color and never enter green water.", "Keep both players near the same section before triggering the next obstacle.", "Use double jump only when a normal jump cannot safely reach the platform."],
    pickedBecause: "Its asymmetric hazard rules give both local players a clear cooperative responsibility.", limitations: "Both players need to coordinate progress, and touch controls have not been deeply reviewed."
  },
  "kingdom-of-toilets": {
    summary: "A shared-keyboard escape platformer starring two robot characters in an underground obstacle course. The goal is to keep both moving toward safety.",
    objective: "Guide both characters through the prison, avoid toxic water and reach the escape route.", modes: "Two-character shared-device play is documented.",
    input: "Use WASD and the Arrow Keys for the two characters; double jump and mobile touch controls are listed.", deviceSetup: "Desktop shared-keyboard and mobile touch support are documented.", invite: "No invitation is needed for the documented local setup.",
    tips: ["Pause before toxic-water sections and plan both characters' jumps.", "Use the double jump late enough to extend distance rather than immediately after takeoff.", "Advance one character at a time when a platform has limited landing space."],
    pickedBecause: "It adds another clearly divided two-player control scheme with a cooperative escape objective.", limitations: "The theme is intentionally absurd, and the supplier provides only a brief explanation of level mechanics."
  },
  "viking-tomahawk": {
    summary: "A compact axe-fighting game with computer and friend-opponent choices. Positioning and throw timing drive each short duel.",
    objective: "Land tomahawk attacks on the opposing fighter while avoiding their return attacks.", modes: "Computer-opponent and friend-versus-friend modes are documented.",
    input: "Mouse control is listed by the supplier; use the prompts inside the game to aim and attack.", deviceSetup: "Desktop mouse play is documented.", invite: "A specific remote invitation flow has not been verified, so the friend mode's connection setup remains unconfirmed.",
    tips: ["Change position after an attack so the opponent cannot answer along the same line.", "Wait for a clear angle instead of throwing continuously.", "Use the computer mode first to learn the weapon's travel timing."],
    pickedBecause: "It offers both practice and competitive choices in a short arena format.", limitations: "It contains cartoon weapon combat, and the supplier does not clearly describe how the friend mode connects."
  },
  "whot-the-ultimate-nigerian-card-game": {
    summary: "A browser version of the Nigerian card game WHOT with AI practice and real-time multiplayer. Matching shapes or numbers creates an approachable but tactical hand-management game.",
    objective: "Be the first player to empty a starting hand of six cards by making legal matches to the face-up card.", modes: "Solo play against AI and real-time multiplayer are documented.",
    input: "Click or tap cards and game controls to play a legal match or draw.", deviceSetup: "Pointer and touch-style controls are documented.", invite: "Real-time multiplayer is documented; a private friend invitation flow has not been confirmed.",
    tips: ["Keep cards from several shapes or numbers so more future plays remain possible.", "Save flexible or special cards for turns when a normal match is unavailable.", "Watch which prompts cause an opponent to draw and adapt the active shape when possible."],
    pickedBecause: "It broadens the board-and-card collection with a culturally specific ruleset and an AI learning route.", limitations: "New players need to learn WHOT's special-card rules, and private-room support is unconfirmed."
  },
  "clonium": {
    summary: "A turn-based territory game where overloaded cells burst into neighboring spaces and convert opposing pieces. Small moves can trigger large chain reactions.",
    objective: "Capture the opponent's cells through controlled explosions and remain the last player with pieces on the board.", modes: "The catalog documents multiplayer-oriented turn-based play; the exact local or remote connection setup has not been independently confirmed.",
    input: "Click or tap a cell you control to add a piece; full cells distribute pieces into adjacent cells.", deviceSetup: "Mouse and touch-style board input are documented.", invite: "A private invitation method has not been verified.",
    tips: ["Build corner and edge cells carefully because they require fewer pieces to burst.", "Look beyond the first explosion and count which neighboring cells may also overload.", "Avoid feeding an opponent's nearly full cell unless the resulting chain favors you."],
    pickedBecause: "Its chain-reaction system offers deeper spatial planning than a traditional line-making board game.", limitations: "The multiplayer connection method needs further review, and chain reactions can be difficult to predict at first."
  },
  "brainrot-bridge-race-3d": {
    summary: "A colorful multiplayer obstacle race where collecting bananas helps build the route ahead. Speed matters, but choosing a clean line through each section matters too.",
    objective: "Collect enough bananas to advance across the course and reach the finish before competing runners.", modes: "Multiplayer racing against other runners is documented.",
    input: "Mouse click or tap controls are listed; follow the movement prompts shown in the game.", deviceSetup: "Pointer and touch-style browser input are documented.", invite: "Opponent racing is documented, but a private friend invitation flow has not been verified.",
    tips: ["Collect along a direct route instead of crossing the course for every banana.", "Watch the next obstacle while gathering so you approach it from a useful angle.", "Protect a safe lead rather than taking a crowded shortcut near the finish."],
    pickedBecause: "It adds an easy-to-read party race with collection and route-choice decisions.", limitations: "The meme-inspired presentation may not appeal to everyone, and private-room support is unconfirmed."
  },
  "color-path-io": {
    summary: "A territory-running arena where every movement extends a colored trail. Players balance expansion against the risk of leaving a path exposed.",
    objective: "Loop back to claimed territory to capture new space and finish with more area than competing players.", modes: "Online IO-style multiplayer territory play is documented.",
    input: "Click, tap or use the movement method shown inside the game to steer the runner.", deviceSetup: "Mouse and touch-style controls are listed.", invite: "Public multiplayer is documented; private friend matching has not been confirmed.",
    tips: ["Start with short loops until there is enough safe territory behind you.", "Turn back early when another trail approaches your exposed path.", "Expand into quiet edges rather than contesting the busiest center immediately."],
    pickedBecause: "Its visible territory gives multiplayer progress a clear objective beyond simple survival.", limitations: "Long expansion routes can be lost quickly, and the supplier does not document a private-room option."
  },
  "board-kings-board-dice": {
    summary: "A multiplayer board-building game driven by dice rolls, upgrades and visits to rival boards. Progress comes from deciding where earned resources have the most value.",
    objective: "Roll to move, earn resources, improve the board and compete by developing a stronger empire than other players.", modes: "Online multiplayer board progression is documented.",
    input: "Click or tap to roll, select upgrades and use board actions.", deviceSetup: "Mouse and touchscreen-style controls are documented.", invite: "Multiplayer interaction is documented; a direct private invitation method has not been verified.",
    tips: ["Prioritize upgrades that improve repeated income before expensive cosmetic choices.", "Keep some resources available when an upcoming space may require a decision.", "Review the board before rolling so you know which outcomes are most valuable."],
    pickedBecause: "It provides a persistent board-game format distinct from the site's short head-to-head matches.", limitations: "Progression is more complex than a traditional board game, and friend-specific matching is unconfirmed."
  },
  "ballon-race-3d": {
    summary: "A whimsical 3D multiplayer race where collected balloons lift runners off the ground. Efficient collection creates both height and forward speed.",
    objective: "Gather balloons, gain enough lift to clear the course and reach the finish before the other racers.", modes: "Multiplayer racing against other runners is documented.",
    input: "Mouse click or tap controls are listed; use the in-game steering prompts during the race.", deviceSetup: "Pointer and touch-style input are documented.", invite: "Racing against other players is documented, but private friend invitations are not confirmed.",
    tips: ["Follow dense balloon lines instead of zigzagging for isolated pickups.", "Build lift before approaching sections that require a longer flight.", "Make small steering corrections in the air to preserve forward momentum."],
    pickedBecause: "The balloon collection mechanic makes its racing strategy visually clear and different from ground-only runners.", limitations: "The title is spelled 'Ballon' in the supplier listing, and the exact matchmaking options are not documented."
  },
  "imposter-duck-online": {
    summary: "An online social-deduction game set on a space station, with crew members completing missions while hidden imposters disrupt the group.",
    objective: "As crew, complete tasks and identify suspicious ducks; as an imposter, interfere without being discovered.", modes: "Cross-platform online multiplayer with hidden-role matches is documented.",
    input: "Use WASD or Arrow Keys on desktop; a touch joystick is documented for mobile.", deviceSetup: "Desktop keyboard and mobile touch controls are documented.", invite: "Online multiplayer is verified; a specific private-room or friend-code flow has not been confirmed.",
    tips: ["Learn task locations early so unusual movement is easier to notice.", "Stay near enough to observe others without following one player blindly.", "Base accusations on routes and events rather than one unexplained pause."],
    pickedBecause: "It adds team deduction and cross-platform play instead of another reflex-only arena.", limitations: "Social-deduction matches involve deception and depend heavily on the behavior and availability of other players."
  },
  "drunken-duel-2-players": {
    summary: "A physics-based western duel controlled with a single action button. Unstable ragdoll movement makes each short round unpredictable.",
    objective: "Time shots to hit the opposing duelist and win the required number of rounds first.", modes: "One-player and two-player modes are documented.",
    input: "The game uses left-click input; follow the on-screen side assignment in two-player mode.", deviceSetup: "Desktop pointer play is documented.", invite: "No remote invitation flow is verified; the two-player option should be treated as shared-device unless the game shows otherwise.",
    tips: ["Wait for the weapon to rotate toward the opponent before firing.", "Use the first round to learn how recoil changes the character's position.", "Avoid rapid clicking when one well-timed shot can preserve ammunition and balance."],
    pickedBecause: "Its one-button rules make it easy to hand between players for quick party rounds.", limitations: "The game contains cartoon gun duels, and the exact two-player device arrangement is only briefly documented."
  },
  "rocketcar-cup": {
    summary: "A fast 2D car-soccer game with boosts, hard hits and aerial movement. Matches reward rotation between attacking the ball and protecting the goal.",
    objective: "Drive the ball into the opposing goal while defending your own side in one-on-one or team matches.", modes: "Online one-on-one and team competition are documented.",
    input: "Use WASD or Arrow Keys to drive, Shift for boost and Q for a hard hit; virtual joystick controls are also listed.", deviceSetup: "Desktop keyboard and mobile virtual controls are documented.", invite: "Online matches are documented, but a private friend invitation route has not been verified.",
    tips: ["Stay behind the ball when defending so a missed challenge does not expose the goal.", "Save some boost for recovery after an attack.", "Use hard hits when the car is aligned with open space rather than striking from every angle."],
    pickedBecause: "It brings a recognizable competitive sport format with both solo-duel and team possibilities.", limitations: "Aerial control takes practice, and private-room support is unconfirmed."
  },
  "jungle-fight": {
    summary: "A lane-based animal battle where players deploy different units to pressure the opposing side. Timing and lane choice are more important than direct character control.",
    objective: "Use animal abilities to break through the opposing forces and reduce the opponent's health to zero.", modes: "Competitive player-versus-player strategy is described by the supplier.",
    input: "Select an available animal skill, then click or tap a lane to deploy it.", deviceSetup: "Mouse and touch-style controls are documented.", invite: "The current review confirms competitive play but not a private invitation method.",
    tips: ["Do not stack every unit in one lane when the opponent can counter it cheaply.", "Hold a flexible skill until the opponent reveals where pressure is building.", "Deploy durable units before fragile damage dealers when pushing the same lane."],
    pickedBecause: "It adds a tactical lane game with readable unit deployment instead of reflex-heavy movement.", limitations: "The supplier does not fully document matchmaking, unit statistics or friend-room support."
  },
  "speen": {
    summary: "A momentum-based IO game where two connected circles swap pivot roles to swing through pickups and opponents. Mastering the single action creates most of the skill ceiling.",
    objective: "Fill both meters, use charged movement to defeat hazards and rivals, then expand territory in the shared multiplayer world.", modes: "Progression challenges, boss encounters and a shared multiplayer territory mode are documented.",
    input: "Click or tap to swap which circle is planted and which circle swings.", deviceSetup: "Mouse and touch input are documented.", invite: "A shared multiplayer world is documented; direct friend invitation has not been confirmed.",
    tips: ["Swap pivots near the end of an arc to carry momentum forward.", "Approach green and pink pickups with the correct circle role already prepared.", "Enter rival territory with enough meter to escape after a challenge."],
    pickedBecause: "Its one-action momentum system gives the IO collection a distinctive movement mechanic.", limitations: "The pivot physics require practice, and the shared-world connection options are only briefly described."
  },
  "quiz-runner-io": {
    summary: "An online race that combines directional movement with trivia decisions. Fast answers help, but staying on a controlled route is equally important.",
    objective: "Answer questions correctly, keep moving through the course and finish ahead of competing players on the leaderboard.", modes: "Online multiplayer quiz racing is documented.",
    input: "Use W to move forward and A or D to move sideways; double left-click movement is also listed.", deviceSetup: "Desktop keyboard and mouse input are documented.", invite: "Online competition is documented, while a private friend lobby has not been verified.",
    tips: ["Read all available answers before committing when the course allows time.", "Center the runner after a sideways move so the next choice remains reachable.", "Recover from one wrong answer instead of making a second rushed decision."],
    pickedBecause: "It blends knowledge and movement, adding a different skill mix to the online catalog.", limitations: "Question difficulty can vary, and private-lobby support is unconfirmed."
  },
  "tung-sahur-io": {
    summary: "A large online infection match where players begin as escaping characters while infected opponents spread across the map.",
    objective: "Survive as an uninfected runner or, after infection, catch the remaining runners before the round ends.", modes: "Online infection matches advertised for up to 100 players are documented.",
    input: "Use WASD or Arrow Keys to move, the mouse to look and left click to jump or attack; mobile dual-drag controls are listed.", deviceSetup: "Desktop keyboard-and-mouse and mobile touch controls are documented.", invite: "Large online matches are documented; private friend-room support has not been verified.",
    tips: ["Keep several escape routes visible instead of entering a dead end.", "Save sudden direction changes for when an infected player commits to a chase.", "After infection, approach runners from the side rather than following directly behind."],
    pickedBecause: "It provides a large-player infection format with different objectives during the same round.", limitations: "The game uses viral meme imagery and school-character framing, and private matching is unconfirmed."
  },
  "billiard-champion": {
    summary: "A browser billiards game focused on aim, shot strength and planning where the cue ball will finish after contact.",
    objective: "Pot the required balls under the selected table rules while avoiding fouls and leaving difficult replies.", modes: "The catalog labels the game multiplayer, but the exact opponent and match setup has not been independently confirmed.",
    input: "Use the on-screen mouse or touch controls to aim and set shot power.", deviceSetup: "Pointer and touch-style controls are documented.", invite: "No private invitation flow has been verified.",
    tips: ["Plan the cue ball's stopping point before choosing shot power.", "Use moderate force for routine pots so the next position remains predictable.", "Choose a defensive leave when no high-percentage shot is available."],
    pickedBecause: "It adds a precision table sport with a slower tactical pace.", limitations: "The supplier description is corrupted and does not clearly document multiplayer connection or the exact billiards rules."
  },
  "pga3-zombie": {
    summary: "A voxel survival shooter where players defend against repeated zombie waves, improve equipment and use traps to hold each area.",
    objective: "Survive escalating waves, maintain defenses and defeat stronger enemies without letting the team collapse.", modes: "Solo survival and online cooperation for up to four players are documented.",
    input: "Use the mouse to aim and left click to shoot; follow the in-game keyboard prompts for movement, weapons and menus.", deviceSetup: "Desktop keyboard-and-mouse play is documented.", invite: "Four-player cooperation is documented, but a private friend invitation flow has not been confirmed.",
    tips: ["Repair defenses during quiet moments rather than waiting for the next wave.", "Cover different approaches so the whole team does not aim at one target.", "Spend upgrades on a dependable weapon before spreading resources across several options."],
    pickedBecause: "It offers a clear cooperative survival objective for a small online team.", limitations: "It contains voxel gun combat and zombie themes, and the supplier's control text is incomplete."
  },
  "iron-legion": {
    summary: "A real-time online tank game with vehicle classes, terrain and team battles. Positioning and cooperation matter alongside accurate shooting.",
    objective: "Complete combat objectives with the team, damage opposing vehicles and use the chosen tank's strengths effectively.", modes: "Real-time online team battles for up to 20 players are documented.",
    input: "Use WASD or Arrow Keys to drive, the mouse to rotate the camera, left click to fire and right click to aim.", deviceSetup: "Desktop keyboard-and-mouse controls are documented.", invite: "Team matchmaking is documented; private squads or friend invitations have not been verified.",
    tips: ["Use terrain as cover while reloading instead of remaining exposed.", "Stay close enough to teammates to focus fire without bunching into one target.", "Match the route to the vehicle class: scouts need mobility, while heavier tanks benefit from protected angles."],
    pickedBecause: "It adds larger team battles and vehicle roles to the online catalog.", limitations: "The game centers on modern military tank combat and realistic damage mechanics."
  },
  "pga-toons": {
    summary: "A bright voxel arena shooter that combines rooftop parkour, jump pads and jetpack movement with quick firefights.",
    objective: "Use movement and weapon control to outscore opponents across the arena's vertical routes.", modes: "Online multiplayer arena shooting is documented.",
    input: "Use the keyboard for movement, the mouse to aim and click to shoot; Tab opens the menu according to the supplier controls.", deviceSetup: "Desktop keyboard-and-mouse play is documented.", invite: "Online arena play is documented; private friend matching has not been verified.",
    tips: ["Change elevation after firing so opponents cannot hold the same angle.", "Use jump pads with a destination in mind rather than entering the air without cover.", "Reload behind solid geometry instead of while crossing open rooftops."],
    pickedBecause: "Its vertical movement distinguishes it from flatter multiplayer shooting arenas.", limitations: "It contains cartoon gun combat, and the supplier does not provide a complete control list or private-room details."
  },
  "guardz-io": {
    summary: "A fast medieval IO arena where knights compete at close range. Survival depends on spacing attacks and avoiding crowded engagements.",
    objective: "Defeat rival knights, improve the current run and survive as long as possible in the multiplayer arena.", modes: "Online multiplayer sword combat is documented.",
    input: "Mouse click or tap controls are listed; use the prompts inside the game for movement and attacks.", deviceSetup: "Pointer and touch-style browser input are documented.", invite: "Public online play is documented; private friend-room support has not been confirmed.",
    tips: ["Approach from an angle so a missed attack does not leave a direct counter line.", "Avoid the center when several fights overlap.", "Disengage briefly after taking damage instead of immediately trading again."],
    pickedBecause: "It offers short, accessible IO rounds with a clearly competitive arena goal.", limitations: "The game contains cartoon sword combat, and its supplier description leaves control and matchmaking details sparse."
  },
  "snake-war-multiplayer": {
    summary: "An online snake-survival arena where glowing orbs increase length and defeated rivals leave additional resources behind.",
    objective: "Grow the snake, avoid collisions and outlast or trap other snakes in the arena.", modes: "Online multiplayer survival play is documented.",
    input: "Mouse click or tap controls are listed; follow the steering prompts shown inside the game.", deviceSetup: "Pointer and mobile-style touch input are documented.", invite: "Public multiplayer is documented; a private friend invitation method has not been confirmed.",
    tips: ["Collect safely at the edge until the snake is long enough to pressure rivals.", "Do not cross in front of a larger snake without a clear exit.", "Circle dropped orbs carefully because other players will converge on the same reward."],
    pickedBecause: "It provides the familiar competitive snake loop with clear growth and survival feedback.", limitations: "Crowded arenas can end a run suddenly, and friend-specific matchmaking is unconfirmed."
  },
  "survev-io": {
    summary: "A top-down online battle royale where players begin without equipment, search buildings and stay ahead of a shrinking safe zone.",
    objective: "Find weapons and supplies, remain inside the safe area and be the last surviving player or team.", modes: "Online battle-royale multiplayer is documented.",
    input: "Use WASD to move, the mouse to aim, left click to attack, number keys or the wheel to change weapons and R to reload.", deviceSetup: "Desktop keyboard-and-mouse controls are documented.", invite: "Online matches are documented; team invitations or private rooms have not been verified.",
    tips: ["Loot quickly near the starting area and move before the safe-zone route becomes urgent.", "Keep a close-range and a longer-range option when inventory allows.", "Use cover to reload and avoid crossing open ground without checking nearby movement."],
    pickedBecause: "It adds a complete last-player-standing loop with looting, positioning and a changing map boundary.", limitations: "It includes gun combat and elimination, and its many keyboard controls take time to learn."
  },
  "sunny-fields": {
    summary: "A farming progression game that mixes card matching, product packing and building upgrades. Competition comes through production leaderboards rather than direct live battles.",
    objective: "Earn coins from matching and packing, expand the farm and produce enough value to climb the leaderboard.", modes: "Solo farm progression with leaderboard competition is documented; real-time multiplayer is not confirmed.",
    input: "Click or tap to match cards, pack products, buy animals and choose upgrades.", deviceSetup: "Mouse and touch-style controls are documented.", invite: "No direct friend invitation or live opponent mode has been verified.",
    tips: ["Upgrade production that repeatedly feeds the packing stage before buying every available item.", "Arrange milk and eggs to reduce wasted box space.", "Compare upgrade cost with the extra income it produces before spending all coins."],
    pickedBecause: "It offers asynchronous leaderboard competition and a non-combat progression loop.", limitations: "This is not verified as real-time multiplayer, so players seeking a live opponent should choose another game."
  },
  "ultimate-flying-car": {
    summary: "A vehicle sandbox that combines city driving, aerial movement and a local multiplayer option in one browser game.", objective: "Explore the city, switch between road and flight movement, and use the available race or free-play modes to compete or practice.", modes: "Solo and multiplayer options were confirmed during the owner's hands-on review.", input: "Use the keyboard controls displayed inside the game for driving, flying and each player.", deviceSetup: "Desktop browser play is the clearest setup for the verified multiplayer controls.", invite: "The confirmed multiplayer option is selected inside the game; no account or chat is required.", tips: ["Learn the road controls before switching to flight.", "Use open areas to practice landing and turning.", "Check both players' keys before starting a race."], pickedBecause: "It adds a distinctive driving-and-flight choice to the local multiplayer catalog.", limitations: "The broader movement system takes longer to learn than a simple racing game."
  },
  "drunken-boxing-2": {
    summary: "A light arcade boxing duel built around intentionally unstable movement and stamina management.", objective: "Land enough punches to win each round while conserving energy and keeping the fighter balanced.", modes: "Solo and local two-player modes were confirmed during hands-on review.", input: "Select a mode and use the separate fighter controls displayed inside the game.", deviceSetup: "Two players share one desktop keyboard in the verified multiplayer mode.", invite: "No account, room or chat is required for local play.", tips: ["Avoid pressing attacks continuously because energy is limited.", "Let the fighter recover before beginning another exchange.", "Keep both players' hands on separate sides of the keyboard."], pickedBecause: "It offers a quick local duel with an unusual stamina-and-balance mechanic.", limitations: "It contains stylized boxing and an alcohol-themed title."
  },
  "kobadoo-emojis": {
    summary: "A sequence-memory challenge using recognizable emoji symbols, suitable for solo practice or taking turns with other players.", objective: "Remember each displayed emoji sequence and reproduce it in the correct order as the sequence grows.", modes: "Solo and multiplayer play were confirmed by the owner.", input: "Click or tap the emojis in the order shown.", deviceSetup: "Players can share a mouse or touchscreen for turn-based play.", invite: "No login or chat is required; follow the in-game player prompts.", tips: ["Group longer sequences into pairs or short chunks.", "Say each symbol silently as it appears.", "Avoid rushing the first input after the sequence disappears."], pickedBecause: "It provides a non-combat multiplayer memory option with simple input.", limitations: "Competition is turn-based rather than simultaneous."
  },
  "kobadoo-shapes": {
    summary: "A visual-memory game where colorful shapes replace words or numbers, with solo and shared turn-based play.", objective: "Repeat the displayed sequence of shapes accurately as each round becomes longer.", modes: "Solo and multiplayer play were confirmed by the owner.", input: "Click or tap the shapes in the same order in which they appeared.", deviceSetup: "A shared pointer or touchscreen is suitable for the verified turn-based mode.", invite: "No account or open chat is required.", tips: ["Associate each shape with a short name.", "Break longer sequences into groups.", "Pause briefly before entering the full answer."], pickedBecause: "It broadens the party catalog with a calm, accessible memory contest.", limitations: "It is a turn-taking challenge rather than real-time multiplayer."
  },
  "cerkio": {
    summary: "A minimalist timing game about launching a ball between circular targets, playable solo or as a shared precision challenge.", objective: "Release the ball at the correct angle and moment to reach the next target through all 30 levels.", modes: "Solo and multiplayer options were confirmed during hands-on review.", input: "Click or tap to launch the ball when its path lines up with the next target.", deviceSetup: "Mouse and touch input are suitable; players can share the device when taking turns.", invite: "No account or chat is required for the confirmed multiplayer option.", tips: ["Watch several rotations before attempting a difficult launch.", "Aim for the center rather than the edge of a target.", "Use early levels to learn the timing rhythm."], pickedBecause: "It offers a quiet, one-button alternative to action-heavy multiplayer games.", limitations: "The multiplayer experience is based on shared precision challenges, not a live online arena."
  },
  "popaloon": {
    summary: "A cartoon balloon-defense game where different weapons change the timing and accuracy needed to stop targets escaping the screen.",
    objective: "Pop incoming balloons before they escape and reduce the player's health, adapting to each weapon's strengths.", modes: "The catalog carries two-player and multiplayer labels, but a specific competitive or cooperative mode has not been independently confirmed.",
    input: "Click or tap to aim and fire at balloons.", deviceSetup: "Mouse and touchscreen input are documented.", invite: "No friend invitation or opponent connection flow has been verified.",
    tips: ["Prioritize balloons closest to leaving the screen.", "Learn one weapon's timing before switching frequently.", "Aim for controlled shots when targets overlap instead of firing at empty space."],
    pickedBecause: "It provides a light cartoon shooting challenge with varied weapon behavior.", limitations: "Despite multiplayer catalog tags, the reviewed data does not establish a true two-player mode; the game also uses mild cartoon weapon imagery."
  }
};

export function getGameEditorial(slug: string): GameEditorial | undefined {
  return gameEditorial[slug] ?? (gamePixBatch as Record<string, GameEditorial>)[slug];
}
import gamePixBatch from "@/data/game-editorial-gamepix-batch.json";
