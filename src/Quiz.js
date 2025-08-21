import React, { useState } from "react";

const Quiz = ({ card, onComplete, onBack }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [correct, setCorrect] = useState(0);

  if (!card)
    return <div style={{ textAlign: "center", marginTop: 40 }}>Loading...</div>;

  const total = card.questions.length;
  const q = card.questions[currentQ];

  const handleAnswer = (opt) => {
    if (opt === q.answer) setCorrect((c) => c + 1);

    const next = currentQ + 1;
    if (next < total) {
      setCurrentQ(next);
    } else {
      const pct = Math.round(
        ((opt === q.answer ? correct + 1 : correct) / total) * 100
      );
      onComplete(card.id, pct);
    }
  };

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "40px auto",
        padding: 20,
        background: "#181818",
        borderRadius: 14,
        border: "1px solid #2a2a2a",
      }}
    >
      {/* 🔙 Back button */}
      <button
        onClick={onBack}
        style={{
          marginBottom: 16,
          padding: "8px 14px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>

      <div style={{ marginBottom: 12, fontSize: 14, color: "#bbb" }}>
        {card.title} • Question {currentQ + 1} / {total}
      </div>
      <h2 style={{ marginTop: 0 }}>{q.q}</h2>

      <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={{
              padding: "12px 16px",
              background: "#000",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: 10,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Tiny progress bar */}
      <div style={{ marginTop: 22 }}>
        <div style={{ height: 6, background: "#333", borderRadius: 6 }}>
          <div
            style={{
              width: `${(currentQ / total) * 100}%`,
              height: "100%",
              background: "#ff6600",
              borderRadius: 6,
              transition: "width 0.2s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
