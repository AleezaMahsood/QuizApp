import { quiz } from "./question";
import "./App.css";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const goNext = () => {
    if (quiz[question] && answer === quiz[question].correctAnswer) {
      setScore(score + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
    setAnswer("");
    setQuestion((prev) => prev + 1);
  };

  const handleOptionClick = (selectedOption) => {
    setAnswer(selectedOption);
  };

  return (
    <div className="quiz-container">
      {question < quiz.length ? (
        <>
          <h3>{quiz[question].question}</h3>
          <ul>
            {quiz[question].choices.map((item, index) => (
              <div className="optionz" key={index}>
                <input
                  type="radio"
                  id={index}
                  name="answer"
                  value={item}
                  checked={answer === item}
                  onChange={() => handleOptionClick(item)}
                />
                <label className="boyzz">{item}</label>
              </div>
            ))}
          </ul>
          <button className="next" onClick={goNext}>
            Next
          </button>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{quiz.length}</span>
          </p>
          <p>
            Correct Answers:<span> {score}</span>
          </p>
          <p>
            Wrong Answers:<span> {wrongAnswer}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
