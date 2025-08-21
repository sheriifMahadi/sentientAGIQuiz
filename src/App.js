import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import CardList from "./CardList";
import Quiz from "./Quiz";
import ResultPage from "./ResultPage";
import cards from "./cards";

const TOTAL_CARDS = cards.length;

const readProgress = () => {
  const saved = JSON.parse(localStorage.getItem("quizProgress") || "null");
  return (
    saved || {
      currentCard: 1, // which card is unlocked to take next
      completedCards: [], // ids of cards passed (>=70%)
      scores: {}, // { [cardId]: percentage }
    }
  );
};

const App = () => {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );
  const [page, setPage] = useState("quiz"); // "quiz" | "results"
  const [activeCard, setActiveCard] = useState(null); // id or null
  const [progress, setProgress] = useState(readProgress());

  const persistProgress = (next) => {
    localStorage.setItem("quizProgress", JSON.stringify(next));
    setProgress(next);
  };

  const handleStart = (name) => {
    // Capitalize first letter
    const formatted =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    setUsername(formatted);
    localStorage.setItem("username", formatted);
  };

  const handleReset = () => {
    localStorage.removeItem("quizProgress");
    const fresh = { currentCard: 1, completedCards: [], scores: {} };
    persistProgress(fresh);
    setActiveCard(null);
    setPage("quiz");
  };

  // Called by Quiz when user finishes a card
  const handleQuizComplete = (cardId, percentage) => {
    const newScores = { ...progress.scores, [cardId]: percentage };

    let newCompleted = progress.completedCards.slice();
    if (percentage >= 70 && !newCompleted.includes(cardId)) {
      newCompleted.push(cardId);
    }

    // Unlock the *next* card only if passed
    let newCurrentCard = progress.currentCard;
    if (percentage >= 70 && cardId >= progress.currentCard) {
      newCurrentCard = cardId + 1;
    }

    const next = {
      ...progress,
      scores: newScores,
      completedCards: newCompleted,
      currentCard: newCurrentCard,
    };
    persistProgress(next);

    setActiveCard(null); // back to grid
  };

  const allCompleted = progress.completedCards.length === TOTAL_CARDS;

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Username + tagline */}
      {username && (
        <div style={{ paddingBottom: 10, textAlign: "left" }}>
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>
            {username}
          </span>
          {/* Tagline only on grid view */}
          {page === "quiz" && activeCard === null && (
            <p style={{ marginTop: 6, fontSize: 20, color: "#bbb" }}>
              Test your{" "}
              <span style={{ color: "#ff6600", fontWeight: "bold" }}>
                SentientAGI
              </span>{" "}
              knowledge and top the leaderboard.
            </p>
          )}
        </div>
      )}

      {/* Main content */}
      <div style={{ marginTop: "20px" }}>
        {!username ? (
          <WelcomePage onStart={handleStart} />
        ) : page === "results" ? (
          <ResultPage
            goBack={() => setPage("quiz")}
            progress={progress}
            cards={cards}
          />
        ) : activeCard !== null ? (
          <Quiz
            card={cards.find((c) => c.id === activeCard)}
            onComplete={handleQuizComplete}
          />
        ) : (
          <CardList
            cards={cards}
            progress={progress}
            onOpenCard={(id) => setActiveCard(id)}
          />
        )}
      </div>

      {/* Bottom buttons */}
      {username && page === "quiz" && activeCard === null && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <button
            onClick={handleReset}
            style={{
              padding: "12px 20px",
              backgroundColor: "#ff6600",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Reset Progress
          </button>

          <button
            onClick={() => setPage("results")}
            disabled={!allCompleted}
            style={{
              padding: "12px 20px",
              backgroundColor: allCompleted ? "#fff" : "#555",
              color: allCompleted ? "#000" : "#999",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: allCompleted ? "pointer" : "not-allowed",
              fontWeight: "bold",
            }}
          >
            Results
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
