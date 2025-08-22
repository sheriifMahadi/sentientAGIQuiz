// StudyPage.js
import React from "react";

const StudyPage = ({ onBack }) => {
  const wrap = {
    maxWidth: 900,
    margin: "40px auto",
    padding: "24px",
    background: "#181818",
    color: "#fff",
    border: "1px solid #2a2a2a",
    borderRadius: 14,
    lineHeight: 1.6,
  };
  const h1 = { marginTop: 0, marginBottom: 12, fontSize: 28 };
  const h2 = { marginTop: 26, marginBottom: 8, fontSize: 20, color: "#ff6600" };
  const p  = { margin: "8px 0", color: "#ddd" };
  const li = { margin: "6px 0" };

  return (
    <div style={wrap}>
      <button
        onClick={onBack}
        style={{
          marginBottom: 16,
          padding: "10px 16px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ← Back to Quizzes
      </button>

      <h1 style={h1}>Sentient AGI Primer</h1>
      <p style={p}>A community-friendly guide to Sentient AGI and GRID.</p>

      <h2 style={h2}>Mission: Loyal AGI for Humanity</h2>
      <p style={p}>
        AI development today is concentrated in a few corporations. These organizations
        decide what AI knows, how it thinks, and who it serves—without transparency
        or accountability. This creates systems aligned with corporate agendas
        rather than the interests of humanity.
      </p>
      <p style={p}>Loyal AI means:</p>
      <ul>
        <li style={li}><b>Aligned</b> — AI reflects community values and ethics.</li>
        <li style={li}><b>Owned</b> — Models are collectively owned, and communities share the benefits of their use.</li>
        <li style={li}><b>Controlled</b> — The community decides how AI evolves in the future.</li>
      </ul>
      <p style={p}>
        The mission is to ensure that when AGI is created, it is Loyal—not to corporations,
        but to humanity.
      </p>

      <h2 style={h2}>The Problem with Closed AGI</h2>
      <ul>
        <li style={li}>Lack of transparency and accountability.</li>
        <li style={li}>Centralized control over knowledge, reasoning, and access.</li>
        <li style={li}>AI decisions shaped by corporate profit rather than human values.</li>
      </ul>
      <p style={p}>This concentration of power represents a fundamental societal risk.</p>

      <h2 style={h2}>Vision: A Network of Intelligences</h2>
      <p style={p}>
        AGI is understood as a <b>network of specialized intelligences</b>—agents and models
        with different skills, knowledge, and values. These agents work together to form
        <b> Sentient AGI</b>, the first open and community-built general intelligence.
      </p>
      <ul>
        <li style={li}><b>Openness</b> — Community-built, transparent, and inclusive.</li>
        <li style={li}><b>Utility</b> — Capable of delivering real-world value and sustainable revenue.</li>
      </ul>

      <h2 style={h2}>GRID: The Infrastructure of Sentient AGI</h2>
      <p style={p}>
        <b>GRID</b> (Global Research and Intelligence Directory) is the foundation for building
        community-driven AGI.
      </p>
      <ul>
        <li style={li}><b>Coordination layer</b> — Connects specialized agents and models into seamless workflows.</li>
        <li style={li}><b>Transparency</b> — Shows which agents contribute to answers and decisions.</li>
        <li style={li}><b>Community-driven growth</b> — Anyone can contribute new agents or models.</li>
        <li style={li}><b>Self-sustaining ecosystem</b> — Revenue from usage flows back to contributors and innovators.</li>
      </ul>

      <h2 style={h2}>Loyalty = Alignment + Ownership + Control</h2>
      <ul>
        <li style={li}><b>Alignment</b> — AI tuned to community principles.</li>
        <li style={li}><b>Ownership</b> — Benefits shared by the community.</li>
        <li style={li}><b>Control</b> — Direction guided by collective decision-making.</li>
      </ul>

      <h2 style={h2}>Why It Matters</h2>
      <p style={p}>
        Sentient AGI combines openness with real-world viability. It stands apart by being
        both community-owned and commercially practical—building a future where humanity
        owns and guides the intelligence shaping its world.
      </p>
    </div>
  );
};

export default StudyPage;
