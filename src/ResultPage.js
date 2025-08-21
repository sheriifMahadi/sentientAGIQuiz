import React from "react";

const ResultPage = ({ goBack, progress, cards }) => {
  const rows = cards.map((c) => {
    const pct = progress.scores[c.id] ?? 0;
    const passed = pct >= 70;
    return { id: c.id, title: c.title, pct, passed };
  });

  const passedCount = rows.filter((r) => r.passed).length;

  return (
    <div style={{ maxWidth: 860, margin: "40px auto", color: "#fff" }}>
      <h2 style={{ marginTop: 0 }}>📊 Results</h2>
      <p style={{ color: "#bbb" }}>
        Passed {passedCount} / {rows.length}
      </p>

      <div style={{ display: "grid", gap: 14 }}>
        {rows.map((r) => (
          <div
            key={r.id}
            style={{
              background: "#181818",
              border: "1px solid #2a2a2a",
              borderRadius: 12,
              padding: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "bold" }}>{r.title}</div>
              <div style={{ fontSize: 13, color: "#bbb" }}>Score: {r.pct}%</div>
            </div>
            <div style={{ fontWeight: "bold", color: r.pct >= 70 ? "#ff6600" : "#fff" }}>
              {r.pct >= 70 ? "✅ Passed" : "❌ Not Passed"}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goBack}
        style={{
          marginTop: 24,
          padding: "12px 18px",
          background: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Back to Quiz
      </button>
    </div>
  );
};

export default ResultPage;
