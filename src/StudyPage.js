// StudyPage.js
import React from "react";

const StudyPage = ({ onBack }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          padding: "10px 16px",
          backgroundColor: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>

      <h2 style={{ textAlign: "center", marginTop: "30px", marginBottom: "15px" }}>
        Mission 
      </h2>
      <p>
        Sentient’s mission is to ensure <strong>AGI remains loyal to humanity</strong>, not corporations.
        Centralized AI development today concentrates power in a few companies, creating risks over
        how AI is trained, who it serves, and which values guide it.
      </p>
      <p>
        “Loyal AI” means <strong>AI that is community-built and community-owned</strong>. It is not controlled
        by shareholders or governments, but by people. The belief is that <strong>all of humanity</strong>
        should benefit from AGI, not just a select few.
      </p>
      <p>
        Closed AI models often lack <strong>transparency and accountability</strong>, making them hard to trust.
        Centralized AI can unfairly influence <strong>global governance, healthcare, and journalism</strong>.
        Sentient aims for AI aligned with <strong>community values</strong>, not corporate profits.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "15px" }}>
        The Big Problem 
      </h2>
      <p>
        The danger of <strong>closed-source AGI</strong> is that only a handful of corporations, such as
        <strong> OpenAI, Google, and Anthropic</strong>, control it. These groups decide what AGI knows and who it serves.
      </p>
      <p>
        This creates systems aligned with <strong>corporate agendas</strong>, not community ethics.
        A few corporations holding AGI power is a <strong>fundamental threat to society</strong>, as it risks monopoly
        over knowledge, truth, and decision-making.
      </p>
      <p>
        Closed models never provide <strong>community ownership</strong>. Development in these companies
        is often <strong>secretive and unaccountable</strong>, contrasting with open ecosystems
        where people can inspect, improve, and share technology.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "15px" }}>
        Vision 
      </h2>
      <p>
        Sentient defines AGI not as one massive model, but as a <strong>network of specialized intelligences</strong>.
        These models and agents together form <strong>Sentient AGI</strong>.
      </p>
      <p>
        Anyone in the community can build models and agents, not just Sentient engineers. This makes
        Sentient AGI the first that is truly <strong>open and community-built</strong>.
      </p>
      <p>
        The approach is unique because it combines <strong>openness</strong> (transparent, collaborative)
        with <strong>commercial potential</strong> (utility, sustainability, revenue).
      </p>
      <p>
        In this framework, <strong>loyalty</strong> means:
        <ul>
          <li><strong>Alignment</strong> — AI aligns with human values</li>
          <li><strong>Ownership</strong> — the community owns it</li>
          <li><strong>Control</strong> — the community directs it</li>
        </ul>
        Ultimately, <strong>the community</strong>, not corporations or governments, should control AGI.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "15px" }}>
        The Grid 
      </h2>
      <p>
        The <strong>Grid</strong> is how Sentient makes the ecosystem function in practice.
        Like a power grid that distributes electricity, the Grid distributes <strong>intelligence</strong>.
      </p>
      <p>
        Individual AI agents plug into the Grid, contributing their specialized skills. Users can access
        these agents as one seamless, coordinated system.
      </p>
      <p>
        The Grid also acts as a <strong>distribution network</strong>, connecting users who want AI tools
        with the creators who build them. Revenue from usage flows back to creators,
        creating a <strong>self-sustaining community economy</strong>.
      </p>
      <p>
        The Grid ensures intelligence is <strong>interconnected, accessible, and continuously improving</strong>,
        rather than locked in closed corporate systems.
      </p>

      <h2 style={{ textAlign: "center" }}>Contributions</h2>

<p>
Sentient thrives through community contributions. Anyone can take part in shaping the project by creating content, helping others, building tools, or producing creative works. 
Each contribution adds value to the ecosystem and helps the community grow stronger together.
</p>

<h3>Ways to Contribute</h3>
<ul>
  <li><b>Create educational content</b> about Sentient.</li>
  <li><b>Help community members</b> in Discord.</li>
  <li><b>Build useful tools</b> such as apps, websites, or agents.</li>
  <li><b>Produce artworks</b> related to Sentient or Dobby.</li>
</ul>

<p>
All contributions or links should be shared in the relevant Discord channels, such as 
<b> 🎨│artist-junior</b>, <b>💻│builder-junior</b>, or <b>📓│educator-junior</b>. 
Access to these spaces is managed through <b>👤│claim-contributor-roles</b>.
</p>

<h3>Making a Valuable Contribution</h3>

<h4>🎨 Artistic Contributions</h4>
<p>
Artistic works may include digital art, animations, videos, or hand-drawn pieces. 
Originality and creativity are highly valued, especially when contributions involve 
clever memes, pop culture references, or innovative concepts. 
Mass-generated AI spam is discouraged and may be penalized. AI tools can assist in the creative process, but originality should remain at the core.
</p>

<h4>💻 Builder Contributions</h4>
<p>
Builders create technical guides, tools, or applications that showcase what can be achieved with Sentient. 
Projects such as agents, apps, or websites that demonstrate innovation are especially valuable. 
Helping others build and sharing knowledge in the community also count as meaningful builder contributions.
</p>

<h4>📓 Educator Contributions</h4>
<p>
Educators contribute detailed threads, blogs, or analyses that provide original insights into Sentient. 
Valuable contributions go beyond repeating announcements, offering instead meaningful perspectives, deep-dive case studies, and creative guides. 
Strong educator content enhances understanding and helps people see Sentient’s mission in new ways.
</p>

<h4>🤝 Helper Contributions</h4>
<p>
Helpers foster community by offering consistent guidance, sharing useful information, and supporting newcomers. 
This type of contribution strengthens inclusivity and creates a welcoming environment for everyone.
</p>

<h3>Role Promotions</h3>
<p>
Once significant contributions are made in a specific area, contributors may request an <b>AGI role promotion</b> by submitting a request. 
This recognizes effort, growth, and commitment within the community.
</p>

    </div>
  );
};

export default StudyPage;
