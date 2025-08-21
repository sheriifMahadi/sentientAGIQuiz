import React from "react";
import CardList from "./CardList";

export default function QuizPage({ username }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Hello, {username}! Select a card to start:</h2>
      <CardList />
    </div>
  );
}
