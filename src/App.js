// App.js
import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import CardList from "./CardList";
import Quiz from "./Quiz";
import ResultPage from "./ResultPage";
import StudyPage from "./StudyPage";
import cards from "./cards";

const TOTAL_CARDS = cards.length;

const readProgress = () => {
  const saved = JSON.parse(localStorage.getItem("quizProgress") || "null");
  return (
    saved || {
      currentCard: 1,
      completedCards: [],
      scores: {},
    }
  );
};

const App = () => {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );
  const [page, setPage] = useState("quiz"); // "quiz" | "results" | "read"
  const [activeCard, setActiveCard] = useState(null); // id or null
  const [progress, setProgress] = useState(readProgress());

  const persistProgress = (next) => {
    localStorage.setItem("quizProgress", JSON.stringify(next));
    setProgress(next);
  };

  const handleStart = (name) => {
    const formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
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

  const handleQuizComplete = (cardId, percentage) => {
    const newScores = { ...progress.scores, [cardId]: percentage };

    let newCompleted = progress.completedCards.slice();
    if (percentage >= 70 && !newCompleted.includes(cardId)) {
      newCompleted.push(cardId);
    }

    let newCurrentCard = progress.currentCard;
    if (percentage >= 70 && cardId >= progress.currentCard) {
      newCurrentCard = cardId + 1;
    }

    persistProgress({
      ...progress,
      scores: newScores,
      completedCards: newCompleted,
      currentCard: newCurrentCard,
    });

    setActiveCard(null);
  };

  const allCompleted = (progress.completedCards || []).length === TOTAL_CARDS;

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Header: username left; READ button right */}
      {username && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 30, fontWeight: "bold" }}>{username}</div>
            {page === "quiz" && activeCard === null && (
              <p style={{ marginTop: 6, fontSize: 16, color: "#bbb" }}>
                Test your <span style={{ color: "#ff6600", fontWeight: "bold" }}>SentientAGI</span> knowledge and top the leaderboard.
              </p>
            )}
          </div>

          {/* Orange READ button (hidden on Welcome) */}
          {page !== "read" && (
            <button
              onClick={() => setPage("read")}
              style={{
                padding: "10px 16px",
                background: "#ff6600",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: "bold",
                cursor: "pointer",
                height: 42,
              }}
            >
              READ
            </button>
          )}
        </div>
      )}

      {/* Main content */}
      <div style={{ marginTop: "20px" }}>
        {!username ? (
          <WelcomePage onStart={handleStart} />
        ) : page === "read" ? (
          <StudyPage onBack={() => setPage("quiz")} />
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
            onBack={() => setActiveCard(null)}
          />
        ) : (
          <CardList
            cards={cards}
            progress={progress}
            onOpenCard={(id) => setActiveCard(id)}
          />
        )}
      </div>

      {/* Bottom buttons (grid only) */}
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
