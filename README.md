# Jewish Party Games

A platform for collaborative party card games inspired by Monikers, themed around Jewish festivals. Browse cards, build custom decks with real-time collaboration, and print them for your holiday table.

**[Play Now](https://davmos15.github.io/jewish-party-games/)**

## Editions

### Matzah-kers: Pesach Edition
119 cards covering people, objects, phrases, and fun moments from the Seder and the Exodus story.

### Torah-kers: Shavuot Edition
50 cards about Matan Torah, Megillat Ruth, dairy foods, staying up all night, and more.

### Channukers: Chanukah Edition
45 cards about Maccabees, menorahs, latkes, dreidels, and everything in between.

### Party Cards: Custom Edition
A blank template — start from scratch and create your own party card game for any occasion.

## How It Works

1. **Choose an edition** — pick a festival or start from a blank template
2. **Browse the catalog** — the home page shows all default cards
3. **Start a session** — create your own deck with a unique shareable link
4. **Share the link** — your partner opens the same link and you both edit cards in real-time
5. **Cull & customize** — remove cards you don't want, add your own, upload images for picture cards
6. **Bulk edit** — switch to Table view for spreadsheet-style inline editing of all cards at once
7. **Custom card back** — upload your own card back design (synced with collaborators)
8. **Print** — export your final deck as a printable A4 layout with card fronts and backs

## How to Play

1. **Split into two teams** (at least 2 players each)
2. **Deal 5 cards** per player — keep the ones you know, discard the rest
3. **Round 1 — Describe It:** Say anything except words in the title
4. **Round 2 — One Word:** Same cards, reshuffled — only one word as a clue
5. **Round 3 — Act It Out:** Same cards — charades only, no words
6. **Score:** Each card is worth its point value (1, 2, or 3). Most points after 3 rounds wins!

The same cards are used in all three rounds — clues from Round 1 help in later rounds.

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no build tools)
- Firebase Realtime Database for live collaboration
- GitHub Pages for hosting

## Project Structure

```
/
├── index.html              # Hub / landing page
├── shared/
│   ├── core.js             # Shared app logic (builds DOM + all game behaviour)
│   ├── core.css            # Shared styles (CSS variable theming)
│   ├── hub.css             # Landing page styles
│   └── firebase-config.js  # Firebase init
├── pesach/                 # Pesach edition (119 cards)
├── shavuot/                # Shavuot edition (50 cards)
├── chanukah/               # Chanukah edition (45 cards)
└── custom/                 # Blank template
```

## Support

If you enjoy the game, consider supporting the project:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-nadavmoskow-yellow?logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/nadavmoskow)
