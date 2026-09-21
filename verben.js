/*
  Verben für den Bereich „Grammatik“ (Französisch, Présent).

  - Regelmäßige Verben auf -er: nur den Infinitiv eintragen, die Formen bildet die App
    (Stamm + Endung: -e, -es, -e, -ons, -ez, -ent; je → j' vor Vokal / stummem h).
  - Unregelmäßige Verben: die sechs Formen von Hand angeben, ohne Pronomen, in der Reihenfolge
    je, tu, il/elle, nous, vous, ils/elles:  forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']
  - id: kurzer Name ohne Sonderzeichen. Er gehört zum Fortschritt – nicht mehr ändern.
  - Neue Verben einfach unten anhängen. Dazu in sw.js nichts ändern.
*/
window.VERBEN = [
  { id: 'etre',     inf: 'être',     de: 'sein',                forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'] },
  { id: 'chercher', inf: 'chercher', de: 'suchen' },
  { id: 'arriver',  inf: 'arriver',  de: '(an)kommen' },
  { id: 'habiter',  inf: 'habiter',  de: 'wohnen' },
  { id: 'regarder', inf: 'regarder', de: 'ansehen, betrachten' },
  { id: 'aimer',    inf: 'aimer',    de: 'mögen, lieben' },
  { id: 'danser',   inf: 'danser',   de: 'tanzen' },
  { id: 'donner',   inf: 'donner',   de: 'geben' },
  { id: 'detester', inf: 'détester', de: 'verabscheuen, überhaupt nicht mögen' },
];
