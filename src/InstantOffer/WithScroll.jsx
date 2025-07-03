import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
// import "./QuestionAnswer.css";

const questions = [
  {
    key: "ownership",
    question: (car) => `Do you own the ${car}?`,
    options: [
      "Yes",
      "No, I am still making loan payments.",
      "No, I make lease payments.",
    ],
  },
  {
    key: "accident",
    question: (car) => `Has the ${car} ever been in an accident?`,
    options: ["No", "Yes"],
  },
  {
    key: "fenderCount",
    condition: (answers) => answers.accident === "Yes",
    question: () => "How many fenders and benders?",
    options: ["0", "1", "2 & More"],
  },
  {
    key: "frameDamage",
    question: (car) => `Does the ${car} have any frame damage?`,
    options: ["No", "Yes"],
  },
  {
    key: "floodDamage",
    question: (car) => `Does the ${car} have any flood damage?`,
    options: ["No", "Yes"],
  },
  {
    key: "smokedIn",
    question: (car) => `Has this ${car} been smoked in?`,
    options: ["No", "Yes"],
  },
  {
    key: "mechIssue",
    question: () => "Are there any mechanical issues or warning lights displayed?",
    options: ["No", "Yes"],
  },
  {
    key: "engineIssue",
    condition: (answers) => answers.mechIssue === "Yes",
    question: () => "Are there engine issues?",
    options: ["No", "Yes"],
  },
  {
    key: "transmissionIssue",
    condition: (answers) => answers.mechIssue === "Yes",
    question: () => "Are there transmission issues?",
    options: ["No", "Yes"],
  },
];

const WithScroll = () => {
  const [answers, setAnswers] = useState({
    carName: "Acura",
  });
  const [visibleSteps, setVisibleSteps] = useState(1);
  const containerRef = useRef(null);

  const handleSelect = (key, value) => {
    setAnswers((prev) => {
      const newAns = { ...prev, [key]: value };
      const nextIndex = getVisibleQuestions(newAns).length;
      setVisibleSteps(nextIndex);
      return newAns;
    });
  };

  const getVisibleQuestions = (ans) => {
    return questions.filter((q) => !q.condition || q.condition(ans));
  };

  useEffect(() => {
    const el = containerRef.current?.lastElementChild;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleSteps]);

  const visibleQuestions = getVisibleQuestions(answers).slice(0, visibleSteps);

  return (
    <div className="qa-container" ref={containerRef}>
      {visibleQuestions.map((q, index) => (
        <div key={q.key} className="qa-question">
          <h3>{typeof q.question === "function" ? q.question(answers.carName) : q.question}</h3>
          {q.options.map((opt) => (
            <label key={opt} className={`qa-option ${answers[q.key] === opt ? "selected" : ""}`}>
              <input
                type="radio"
                name={q.key}
                value={opt}
                checked={answers[q.key] === opt}
                onChange={() => handleSelect(q.key, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {/* Scroll Buttons */}
      <div className="qa-buttons">
        {visibleSteps > 1 && (
          <button onClick={() => setVisibleSteps((prev) => prev - 1)}>
            <FaArrowUp /> Back
          </button>
        )}
        {visibleSteps < getVisibleQuestions(answers).length && (
          <button onClick={() => setVisibleSteps((prev) => prev + 1)}>
            Next <FaArrowDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default WithScroll;
