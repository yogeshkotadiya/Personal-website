import React from "react";
import IndexStyled from "./IndexStyled";
import TopProjects from "../Projects/TopProjects";

const Home = () => (
  <IndexStyled>
    <div className="introduction">
      <h1>WORK IN PROGRESS. CHECK BACK SOON.</h1>
      <p>
        Hi!
        <span role="img" aria-label="Wave Emoji">
          👋
        </span>{" "}
        I'm <span id="name">Yogesh Kotadiya</span>
      </p>
      <p>
        I'm a Javascript Developer from India
        <span role="img" aria-label="India Flag Emoji">
          🇮🇳
        </span>
        .
      </p>
      <p>
        You can find me on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/yogeshkotadiya"
        >
          Twitter
        </a>
        , I mostly tinker with new things in Javascript when i'm not doing
        anything, you can find my Open Source Porjects on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yogeshkotadiya"
        >
          Github
        </a>
        .<br />I enjoy Pizza
        <span role="img" aria-label="Pizza Emoji">
          🍕
        </span>
        and coffee
        <span role="img" aria-label="Coffee Emoji">
          ☕
        </span>
      </p>
    </div>
    <h2 id="projects-heading">Projects</h2>
    <TopProjects />
  </IndexStyled>
);

export default Home;