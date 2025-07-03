import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import "./QuestionAnswer.css";

const steps = [
  {
    question: (answers) => `Do you own the ${answers.carName}?`,
    field: "ownership",
    type: "radio",
    options: [
      "Yes",
      "No, I am still making loan payments.",
      "No, I make lease payments."
    ]
  },
  {
    question: (answers) => `Has the ${answers.carName} ever been in an accident?`,
    field: "accident",
    type: "radio",
    options: ["No", "Yes"],
    subField: {
      condition: (answers) => answers.accident === "Yes",
      question: () => "How many fenders and benders?",
      field: "fenderCount",
      type: "radio",
      options: ["0", "1", "2 & More"]
    }
  },
  {
    question: (answers) => `Does the ${answers.carName} have any frame damage?`,
    field: "frameDamage",
    type: "radio",
    options: ["No", "Yes"]
  },
  {
    question: (answers) => `Does the ${answers.carName} have any flood damage?`,
    field: "floodDamage",
    type: "radio",
    options: ["No", "Yes"]
  },
  {
    question: (answers) => `Has this ${answers.carName} been smoked in?`,
    field: "smokedIn",
    type: "radio",
    options: ["No", "Yes"]
  },
  {
    question: () => `Are there any mechanical issues or warning lights displayed?`,
    field: "mechIssue",
    type: "radio",
    options: ["No", "Yes"],
    subFields: [
      {
        condition: (answers) => answers.mechIssue === "Yes",
        question: () => "Are there engine issues?",
        field: "engineIssue",
        type: "radio",
        options: ["No", "Yes"]
      },
      {
        condition: (answers) => answers.mechIssue === "Yes",
        question: () => "Are there transmission issues?",
        field: "transmissionIssue",
        type: "radio",
        options: ["No", "Yes"]
      }
    ]
  },
  {
    question: () => "Are any of these warning lights displayed on the dashboard?",
    field: "warningLights",
    type: "checkbox",
    options: ["Check engine", "4x4 needs service", "ABS/Brakes", "Other"]
  },
  {
    question: () => "Do any of the following apply?",
    field: "mechanicalConcerns",
    type: "checkbox",
    options: [
      "Issues with brakes",
      "Issues with steering",
      "Issues with suspension",
      "Other major mechanical concerns"
    ]
  },
  {
    question: () => "Are there any panels in need of paint or body work?",
    field: "paintPanels",
    type: "radio",
    options: ["No", "Yes, 1", "Yes, 2", "Yes, 3+"]
  },
  {
    question: () => "Do any tires need to be replaced?",
    field: "tireReplace",
    type: "radio",
    options: ["No", "Yes"]
  },
  {
    question: (answers) => `Do you have a key for your ${answers.carName}?`,
    field: "hasKey",
    type: "radio",
    options: ["Yes", "No"]
  },
  {
    question: (answers) => `What's the mileage on your ${answers.carName}?`,
    field: "mileage",
    type: "text",
    subField: {
      question: () => "I can't see the mileage or am unsure if the number is accurate.",
      field: "mileageUnsure",
      type: "checkbox"
    }
  },
  {
    question: () => "Selling or trading in?",
    field: "sellingOrTrading",
    type: "radio",
    options: ["Selling only", "Trading in", "Not sure"]
  }
];

const QuestionAnswer = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ carName: "BMW" });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      if (field && value && typeof value !== "object") nextStep();
    }, 100);
  };

  const handleMultiSelect = (field, value) => {
    setAnswers((prev) => {
      const current = prev[field] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const current = steps[step];

  return (
    <section className="d-flex flex-column justify-content-between min-vh-100">
      <div className="py-3 py-sm-4 py-md-5 h-100 flex-grow-1">
      <div className="mb-4 d-flex gap-4">
        <div className="d-md-flex align-items-center d-none">
          <span className="" style={{height:"1px", backgroundColor:"#ddd", width: "50px"}}></span>
          <span className="border fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center" 
        style={{width: "40px", height: "40px", color: "#646464"}}>
          P
          </span>
        </div>
        <h2 className="mt-4 heading">{current.question(answers)}</h2>
      </div>

     <div style={{position: "relative"}}>
      <div className="mb-2 d-flex gap-4 justify-content-end" 
        style={{position: "absolute", right:"0"}}>
              <div className="d-md-flex align-items-center d-none">
                 <span className="border fs-5 fw-bold rounded-circle d-flex justify-content-center align-items-center" 
                  style={{width: "40px", height: "40px", color: "#646464"}}>
                    <IoPersonOutline />
                </span>
                <span className="" style={{height:"1px", backgroundColor:"#ddd", width: "50px"}}></span>
            </div>
      </div>
       {current.type === "radio" &&
        current.options.map((val) => (
         <div className="d-flex justify-content-end mb-3 answers"> 
           <div className="form-check border rounded-2 px-5 py-2" key={val}>
            <div>
                 <input
                className="form-check-input me-2"
                type="radio"
                name={current.field}
                value={val}
                checked={answers[current.field] === val}
                onChange={(e) => handleChange(current.field, e.target.value)}
              />
            </div>
            <label className="form-check-label">{val}</label>
           </div>
         </div>
        ))}
     </div>

      {current.type === "checkbox" &&
        current.options.map((val) => (
           <div className="d-flex justify-content-end mb-3 answers">
            <div className="form-check border rounded-2 px-5 py-2" key={val}>
              <input
                className="form-check-input"
                type="checkbox"
                name={val}
                checked={(answers[current.field] || []).includes(val)}
                onChange={() => handleMultiSelect(current.field, val)}
              />
              <label className="form-check-label">{val}</label>
            </div>
           </div>
        ))}

      {current.type === "text" && (
        <div className="d-flex justify-content-end mb-3 answers">
          <input
            className="form-control w-50 p-3"
            type="text"
            placeholder="Enter mileage"
            value={answers[current.field] || ""}
            onChange={(e) => handleChange(current.field, e.target.value)}
          />
        </div>
      )}

      {/* Render subField or subFields if present */}
      {current.subField && (!current.subField.condition || current.subField.condition(answers)) && (
        <div className="mt-4">
          {/* <h5>{current.subField.question(answers)}</h5> */}
          {current.subField.type === "radio" &&
            current.subField.options.map((val) => (
              <div className="form-check" key={val}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={current.subField.field}
                  value={val}
                  checked={answers[current.subField.field] === val}
                  onChange={(e) => handleChange(current.subField.field, e.target.value)}
                />
                <label className="form-check-label">{val}</label>
              </div>
            ))}

          {current.subField.type === "checkbox" && (
            <div className="d-flex justify-content-end mb-3 answers">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={answers[current.subField.field] || false}
                  onChange={(e) =>
                    handleChange(current.subField.field, e.target.checked)
                  }
                />
                <label className="form-check-label">
                  {current.subField.question(answers)}
                </label>
              </div>
            </div>
          )}
        </div>
      )}

      {current.subFields &&
        current.subFields.map(
          (sub) =>
            sub.condition(answers) && (
              <div className="mt-4" key={sub.field}>
                <h5>{sub.question(answers)}</h5>
                {sub.options.map((val) => (
                  <div className="d-flex justify-content-end mb-3 answers">  
                    <div className="form-check" key={val}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={sub.field}
                        value={val}
                        checked={answers[sub.field] === val}
                        onChange={(e) => handleChange(sub.field, e.target.value)}
                      />
                      <label className="form-check-label">{val}</label>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>

      <div className="step-footer mx-2">
        {step > 0 && (
          <button className="border-0 rounded-pill px-4 px-sm-3 py-1 fw-semibold d-flex align-items-center gap-2 me-3" onClick={prevStep}>
            <FaArrowUp className="me-1" /> Back
          </button>
        )}
        {step < steps.length - 1 && (
          <button  className="border-0 rounded-pill px-4 px-sm-3 py-2 fw-semibold d-flex align-items-center gap-2" style={{backgroundColor: " #ffd94f"}}
              onClick={nextStep}>
            Next <FaArrowDown className="ms-1" />
          </button>
        )}
      </div>

    </section>
  );
};

export default QuestionAnswer;
