// Alle Projekte. Neues Projekt = neuen Eintrag oben einfügen.
// status: 'live' (online erreichbar) | 'privat' (nicht öffentlich) | 'lokal' (nur auf dem Laptop)
// cover: {type:'img', src} | {type:'video', poster, src} | {type:'art', id}  (id = CSS-Motiv in index.html)
window.UPDATED = '2026-10-11';
window.PROJECTS = [
  {
    title: 'VARG – Krallen der Wut',
    kind: 'Spiel',
    date: '2026-10',
    status: 'live',
    desc: '2D-Actionspiel im Browser: Ein Wolfskrieger kämpft sich durch Wellen von Gegnern bis zum Endgegner KRAAG. Kombos, Wut-Modus, Selbstheilung, Sound und Musik direkt aus dem Browser.',
    tags: ['Canvas', 'Web Audio', 'GPT Image', 'Handy-App'],
    cover: {type: 'img', src: 'assets/varg-cover.jpg'},
    links: [
      {label: 'Spielen', url: 'https://danielgit8.github.io/varg/'},
      {label: 'Code', url: 'https://github.com/Danielgit8/varg'}
    ],
    folder: 'Krallen-Spiel'
  },
  {
    title: 'PARA Cockpit',
    kind: 'App',
    date: '2026-10',
    status: 'live',
    desc: 'Mein zweites Gehirn nach der PARA-Methode: Habit-Tracker, Aufgaben, Projekte, Bereiche, Ressourcen und Notizen, alles verknüpft. Mit Login auf Laptop und Handy.',
    tags: ['Web-App', 'Supabase', 'Offline'],
    cover: {type: 'art', id: 'para'},
    links: [
      {label: 'Öffnen', url: 'https://danielgit8.github.io/para-cockpit/'},
      {label: 'Code', url: 'https://github.com/Danielgit8/para-cockpit'}
    ],
    folder: 'PARA Cockpit',
    extras: [
      'Cockpit Clipper – Chrome-Erweiterung, speichert Webseiten mit KI-Zusammenfassung ins Cockpit',
      'Whiteboard (Excalidraw) fürs Cockpit',
      'Anleitungen: Französisch-Tagesablauf, HyperLingua-Methode, Rosenkranz'
    ]
  },
  {
    title: 'Français A1',
    kind: 'App',
    date: '2026-10',
    status: 'live',
    desc: 'Französisch-Lern-App nach der HyperLingua-Methode: Sätze kennenlernen, nachsprechen, in Zehnerrunden abrufen und im Hintergrund hören. Fortschritt synchron auf allen Geräten.',
    tags: ['Web-App', 'Supabase', 'Sprachausgabe'],
    cover: {type: 'art', id: 'francais'},
    links: [
      {label: 'Lernen', url: 'https://danielgit8.github.io/francais-a1/'},
      {label: 'Code', url: 'https://github.com/Danielgit8/francais-a1'}
    ],
    folder: 'Französisch A1'
  },
  {
    title: 'L’esplosiva Ciabatta',
    kind: 'Video',
    date: '2026-10',
    status: 'lokal',
    desc: 'Reel fürs Hochformat: Schritt-für-Schritt-Tutorial für Ciabatta mit 100 % Pasta-Madre-Biga, mit deutscher Sprecherstimme und animierten Rezeptkarten.',
    tags: ['HyperFrames', 'KI-Stimme', 'Reel 9:16'],
    cover: {type: 'video', poster: 'assets/ciabatta-poster.jpg', src: 'assets/ciabatta.mp4'},
    links: [],
    folder: 'videos\\l-esplosiva-ciabatta'
  },
  {
    title: 'ZukunftSmarter Academy',
    kind: 'Plattform',
    date: '2026-10',
    status: 'privat',
    desc: 'Selbst gehostete Kursplattform mit mehreren Akademien, Theme-Editor und Lernansicht im Stil des Münchner Erscheinungsbilds von 1972.',
    tags: ['SvelteKit', 'Docker', 'Kurse'],
    cover: {type: 'art', id: 'academy'},
    links: [],
    folder: 'Kurs Plattform-Zukunftssmarter'
  },
  {
    title: 'Cache-Leiste',
    kind: 'Werkzeug',
    date: '2026-10',
    status: 'lokal',
    desc: 'Erweiterung für Claude Code: eine Leiste über dem Eingabefeld mit Cache-Restzeit, Trefferquote, Kontext-Füllstand und einem Compact-Knopf.',
    tags: ['Claude Code', 'Mod'],
    cover: {type: 'art', id: 'cache'},
    links: [],
    folder: 'Claude Code Mods\\cache-leiste'
  },
  {
    title: 'Projektwächter',
    kind: 'Werkzeug',
    date: '2026-10',
    status: 'lokal',
    desc: 'Erweiterung für Claude Code, die Ordnung hält: Lose Dateien im Claude-Ordner werden verhindert, jedes Projekt bekommt seinen eigenen Ordner.',
    tags: ['Claude Code', 'Mod'],
    cover: {type: 'art', id: 'waechter'},
    links: [],
    folder: '.claude\\mods\\projektwaechter'
  }
];
