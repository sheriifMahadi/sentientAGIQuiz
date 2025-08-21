import React from "react";

const barWrap = {
  width: "100%",
  height: 8,
  background: "#333",
  borderRadius: 6,
  overflow: "hidden",
  marginTop: 8,
};
const barFill = (pct) => ({
  width: `${pct}%`,
  height: "100%",
  background: pct >= 70 ? "#ff6600" : "#fff",
  transition: "width 0.3s ease",
});

const CardList = ({ cards, progress, onOpenCard }) => {
  return (
    <div
      className="card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "20px",
      }}
    >
      {cards.map((card) => {
        const pct = progress.scores?.[card.id] ?? 0; // default 0%
        const completed = pct >= 70;
        const unlocked = card.id === progress.currentCard; // only current unlockable

        return (
          <div
            key={card.id}
            style={{
              background: completed ? "#1b1b1b" : "#181818",
              color: "#fff",
              border: "1px solid #2a2a2a",
              borderRadius: 14,
              padding: 18,
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
              opacity: completed ? 0.9 : 1,
              position: "relative",   // ✅ required for shield positioning
              cursor: unlocked ? "pointer" : "default",
            }}
            onClick={() => unlocked && onOpenCard(card.id)}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{card.title}</h3>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "#bbb" }}>
                {card.questions?.length ?? 0} questions
              </p>
            </div>

            <div>
              <div style={barWrap}>
                <div style={barFill(pct)} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                  fontSize: 13,
                }}
              >
                <span>Score: {pct}%</span>
                <span>
                  {completed
                    ? "✅ Completed"
                    : unlocked
                    ? "▶ Start"
                    : "🔒 Locked"}
                </span>
              </div>
            </div>

            {/* ✅ Only block clicks if locked */}
            {!unlocked && !completed && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 14,
                  background: "rgba(0,0,0,0.3)",
                  cursor: "not-allowed",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
