/*
  Eingebaute Vokabellisten für Finnys Vokabeltrainer.

  Aufbau eines Eintrags:   ['Fremdwort', 'Deutsche Bedeutung']
  - Mehrere richtige Schreibweisen mit | trennen:  ['grey|gray', 'grau']
  - Das erste Fremdwort wird angezeigt und vorgesprochen.
  - lang: 'fr' (Französisch) oder 'en' (Englisch)

  Neue Listen kann man entweder hier eintragen oder in der App unter "Listen" einlesen
  (einfügen oder als .csv/.txt-Datei laden).
*/
window.VOKABELN = [

  /* ───────────────────────── FRANZÖSISCH ───────────────────────── */
  { id: 'fr-begruessung', lang: 'fr', emoji: '👋', name: 'Begrüßung & Höflichkeit', words: [
    ['bonjour', 'Guten Tag / Hallo'],
    ['salut', 'Hallo / Tschüss (unter Freunden)'],
    ['bonsoir', 'Guten Abend'],
    ['bonne nuit', 'Gute Nacht'],
    ['au revoir', 'Auf Wiedersehen'],
    ['à bientôt', 'Bis bald'],
    ['merci', 'Danke'],
    ['s\'il te plaît', 'Bitte (zu einem Freund)'],
    ['s\'il vous plaît', 'Bitte (höflich, „Sie“)'],
    ['de rien', 'Gern geschehen'],
    ['pardon', 'Entschuldigung'],
    ['oui', 'ja'],
    ['non', 'nein'],
    ['comment ça va', 'Wie geht es dir?'],
    ['ça va bien', 'Es geht mir gut'],
    ['je m\'appelle', 'Ich heiße'],
  ]},
  { id: 'fr-zahlen', lang: 'fr', emoji: '🔢', name: 'Zahlen 0–10', words: [
    ['zéro', 'null'], ['un', 'eins'], ['deux', 'zwei'], ['trois', 'drei'], ['quatre', 'vier'],
    ['cinq', 'fünf'], ['six', 'sechs'], ['sept', 'sieben'], ['huit', 'acht'], ['neuf', 'neun'], ['dix', 'zehn'],
  ]},
  { id: 'fr-farben', lang: 'fr', emoji: '🎨', name: 'Farben', words: [
    ['rouge', 'rot'], ['bleu', 'blau'], ['vert', 'grün'], ['jaune', 'gelb'], ['noir', 'schwarz'],
    ['blanc', 'weiß'], ['orange', 'orange'], ['rose', 'rosa'], ['gris', 'grau'], ['marron', 'braun'], ['violet', 'lila'],
  ]},
  { id: 'fr-tiere', lang: 'fr', emoji: '🐾', name: 'Tiere', words: [
    ['le chat', 'die Katze'], ['le chien', 'der Hund'], ['l\'oiseau', 'der Vogel'], ['le poisson', 'der Fisch'],
    ['le cheval', 'das Pferd'], ['la vache', 'die Kuh'], ['le lapin', 'das Kaninchen'], ['la souris', 'die Maus'],
    ['le cochon', 'das Schwein'], ['l\'éléphant', 'der Elefant'], ['le lion', 'der Löwe'], ['la grenouille', 'der Frosch'],
  ]},
  { id: 'fr-familie', lang: 'fr', emoji: '👨‍👩‍👧', name: 'Familie & Freunde', words: [
    ['la famille', 'die Familie'], ['la mère', 'die Mutter'], ['le père', 'der Vater'], ['le frère', 'der Bruder'],
    ['la sœur', 'die Schwester'], ['la grand-mère', 'die Großmutter'], ['le grand-père', 'der Großvater'],
    ['l\'enfant', 'das Kind'], ['le bébé', 'das Baby'], ['l\'ami', 'der Freund'], ['l\'amie', 'die Freundin'],
  ]},
  { id: 'fr-schule', lang: 'fr', emoji: '🎒', name: 'Schule', words: [
    ['l\'école', 'die Schule'], ['la classe', 'die Klasse'], ['le professeur', 'der Lehrer'], ['le livre', 'das Buch'],
    ['le cahier', 'das Heft'], ['le stylo', 'der Kugelschreiber'], ['le crayon', 'der Bleistift'],
    ['la trousse', 'das Mäppchen'], ['le cartable', 'der Schulranzen'], ['la table', 'der Tisch'],
    ['la chaise', 'der Stuhl'], ['le sac', 'die Tasche'],
  ]},
  { id: 'fr-essen', lang: 'fr', emoji: '🥖', name: 'Essen & Trinken', words: [
    ['le pain', 'das Brot'], ['le fromage', 'der Käse'], ['le lait', 'die Milch'], ['l\'eau', 'das Wasser'],
    ['la pomme', 'der Apfel'], ['la banane', 'die Banane'], ['le gâteau', 'der Kuchen'], ['le chocolat', 'die Schokolade'],
    ['le jus d\'orange', 'der Orangensaft'], ['la glace', 'das Eis'], ['le petit déjeuner', 'das Frühstück'],
  ]},

  /* ───────────────────────── ENGLISCH ───────────────────────── */
  { id: 'en-greetings', lang: 'en', emoji: '👋', name: 'Greetings', words: [
    ['hello', 'Hallo'], ['hi', 'Hi / Hallo'], ['good morning', 'Guten Morgen'], ['good afternoon', 'Guten Tag (nachmittags)'],
    ['good evening', 'Guten Abend'], ['good night', 'Gute Nacht'], ['goodbye', 'Auf Wiedersehen'], ['see you', 'Bis später'],
    ['thank you', 'Danke'], ['please', 'Bitte'], ['sorry', 'Entschuldigung'], ['yes', 'ja'], ['no', 'nein'],
    ['how are you', 'Wie geht es dir?'], ['I\'m fine', 'Mir geht es gut'], ['my name is', 'Ich heiße'],
  ]},
  { id: 'en-numbers', lang: 'en', emoji: '🔢', name: 'Numbers 0–10', words: [
    ['zero', 'null'], ['one', 'eins'], ['two', 'zwei'], ['three', 'drei'], ['four', 'vier'], ['five', 'fünf'],
    ['six', 'sechs'], ['seven', 'sieben'], ['eight', 'acht'], ['nine', 'neun'], ['ten', 'zehn'],
  ]},
  { id: 'en-colours', lang: 'en', emoji: '🎨', name: 'Colours', words: [
    ['red', 'rot'], ['blue', 'blau'], ['green', 'grün'], ['yellow', 'gelb'], ['black', 'schwarz'], ['white', 'weiß'],
    ['orange', 'orange'], ['pink', 'rosa'], ['grey|gray', 'grau'], ['brown', 'braun'], ['purple', 'lila'],
  ]},
  { id: 'en-animals', lang: 'en', emoji: '🐾', name: 'Animals', words: [
    ['cat', 'die Katze'], ['dog', 'der Hund'], ['bird', 'der Vogel'], ['fish', 'der Fisch'], ['horse', 'das Pferd'],
    ['cow', 'die Kuh'], ['rabbit', 'das Kaninchen'], ['mouse', 'die Maus'], ['pig', 'das Schwein'],
    ['elephant', 'der Elefant'], ['lion', 'der Löwe'], ['frog', 'der Frosch'],
  ]},
  { id: 'en-family', lang: 'en', emoji: '👨‍👩‍👧', name: 'Family & Friends', words: [
    ['family', 'die Familie'], ['mother', 'die Mutter'], ['father', 'der Vater'], ['brother', 'der Bruder'],
    ['sister', 'die Schwester'], ['grandmother', 'die Großmutter'], ['grandfather', 'der Großvater'],
    ['child', 'das Kind'], ['baby', 'das Baby'], ['friend', 'der Freund / die Freundin'], ['parents', 'die Eltern'],
  ]},
  { id: 'en-school', lang: 'en', emoji: '🎒', name: 'School', words: [
    ['school', 'die Schule'], ['class', 'die Klasse'], ['teacher', 'der Lehrer'], ['book', 'das Buch'],
    ['exercise book', 'das Heft'], ['pen', 'der Kugelschreiber'], ['pencil', 'der Bleistift'],
    ['pencil case', 'das Mäppchen'], ['school bag', 'der Schulranzen'], ['table', 'der Tisch'],
    ['chair', 'der Stuhl'], ['bag', 'die Tasche'],
  ]},
  { id: 'en-food', lang: 'en', emoji: '🍎', name: 'Food & Drink', words: [
    ['bread', 'das Brot'], ['cheese', 'der Käse'], ['milk', 'die Milch'], ['water', 'das Wasser'],
    ['apple', 'der Apfel'], ['banana', 'die Banane'], ['cake', 'der Kuchen'], ['chocolate', 'die Schokolade'],
    ['orange juice', 'der Orangensaft'], ['ice cream', 'das Eis'], ['breakfast', 'das Frühstück'],
  ]},
];
