import { Skill } from "./components";
import "./App.scss";

export default function App() {
  return (
    <>
      <Skill
        icon="memory"
        name="Reaction"
        grade={50}
        baseGrade={100}
        color="red"
      />
      <Skill
        icon="memory"
        name="Reaction"
        grade={50}
        baseGrade={100}
        color="red"
      />
      <Skill
        icon="memory"
        name="Reaction"
        grade={50}
        baseGrade={100}
        color="red"
      />
      <Skill
        icon="memory"
        name="Reaction"
        grade={50}
        baseGrade={100}
        color="red"
      />

      {/* <div className="main-container">
        <div className="results">
          <h1 className="title">Your Result</h1>
          <div className="graphic">
            <span className="score">76</span>
            <span className="total">of 100</span>
          </div>
          <h2 className="comment">Great</h2>
          <p className="info">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <h2 className="summaryTitle">Summary</h2>
          <div className="skillBox"></div>
          <button className="btn">Continue</button>
        </div>
      </div> */}
    </>
  );
}
