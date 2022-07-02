import React from "react";
import ReactDom from "react-dom";
import { questions } from "./data.js";
import { Faq } from "./faq";
import "./index.css";

function App() {
  return (
    <section className="container">
      <div className="heading-div">
        <h1>Questions And Answers About Login</h1>
      </div>

      <div className="faq-div">
        {questions.map((item) => (
          <Faq key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
