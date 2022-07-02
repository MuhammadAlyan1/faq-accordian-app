import { useState } from "react";
import "./faq.css";
export function Faq(props) {
  const { id, title, info } = props.data;
  const [showInfo, setShowInfo] = useState(false);
  function showInfoBtn() {
    setShowInfo(!showInfo);
  }

  return (
    <section key={id} className="faq">
      <div className="title-button-container">
        <h2>{title}</h2>
        <button onClick={showInfoBtn}>{showInfo ? "-" : "+"}</button>
      </div>
      {showInfo && <p>{info}</p>}
    </section>
  );
}
