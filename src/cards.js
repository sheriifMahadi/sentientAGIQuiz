// cards.js
const cards = [
  {
    id: 1,
    title: "Card 1: Basics",
    questions: [
      { q: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
      { q: "5 - 3 = ?", options: ["2", "3", "1"], answer: "2" },
      { q: "3 + 6 = ?", options: ["8", "9", "10"], answer: "9" },
    ],
  },
  {
    id: 2,
    title: "Card 2: Geography",
    questions: [
      { q: "Capital of France?", options: ["Paris", "Rome", "Berlin"], answer: "Paris" },
      { q: "Largest continent?", options: ["Asia", "Africa", "Europe"], answer: "Asia" },
      { q: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian"], answer: "Pacific" },
    ],
  },
  {
    id: 3,
    title: "Card 3: Science",
    questions: [
      { q: "Water chemical formula?", options: ["H2O", "CO2", "O2"], answer: "H2O" },
      { q: "Planet known as Red Planet?", options: ["Mars", "Venus", "Jupiter"], answer: "Mars" },
      { q: "Force = mass x ?", options: ["Acceleration", "Speed", "Energy"], answer: "Acceleration" },
    ],
  },
  {
    id: 4,
    title: "Card 4: Math",
    questions: [
      { q: "10 * 2 = ?", options: ["20", "12", "22"], answer: "20" },
      { q: "Square root of 16?", options: ["4", "8", "2"], answer: "4" },
      { q: "7 + 5 = ?", options: ["12", "11", "13"], answer: "12" },
    ],
  },
  {
    id: 5,
    title: "Card 5: General Knowledge",
    questions: [
      { q: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Tolstoy"], answer: "Shakespeare" },
      { q: "Fastest land animal?", options: ["Cheetah", "Lion", "Horse"], answer: "Cheetah" },
      { q: "H2SO4 is ?", options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid"], answer: "Sulfuric acid" },
    ],
  },
];

export default cards;
