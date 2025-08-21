import React, { useState } from "react";

const WelcomePage = ({ onStart }) => {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) onStart(trimmed);
  };

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "100px auto",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h1 style={{ marginBottom: 10 }}>Gsenti Hooman 👋</h1>
      <p style={{ color: "#bbb" }}>Enter a username to begin</p>

      {/* form with input + button stacked */}
      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column", // 👈 stack input & button vertically
          gap: 12,
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your username"
          style={{
            padding: "12px 14px",
            borderRadius: 8,
            border: "1px solid #444",
            background: "#000",
            color: "#fff",
            minWidth: 260,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 16px",
            background: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
            width: "100%",
            maxWidth: 260,
          }}
        >
          Take Quiz
        </button>
      </form>

      {/* 👇 Footer credit */}
      <p style={{ marginTop: 40, fontSize: 14, color: "#bbb" }}>
        Built by{" "}
        <span style={{ color: "#ff6600", fontWeight: "bold" }}>
          rott11410
        </span>
      </p>
    </div>
  );
};

export default WelcomePage;
