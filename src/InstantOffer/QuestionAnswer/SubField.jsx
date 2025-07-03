import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import "./QuestionAnswer.css";
import "./Milege.css";
import { IoPersonOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdClose } from "react-icons/io";

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
  },
  {
    // Show only if accident === "Yes"
    condition: (answers) => answers.accident === "Yes",
    question: () => "How many fenders and benders?",
    field: "fenderCount",
    type: "radio",
    options: ["0", "1", "2 & More"]
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
  },
  {
    // Show only if accident === "Yes"
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
  },
  {
    condition: (answers) => answers.mechIssue === "Yes",
    question: () => "Are any of these warning lights displayed on the dashboard?",
    field: "warningLights",
    type: "checkbox",
    options: ["Check engine", "4x4 needs service", "ABS/Brakes", "Other"]
  },
  {
    condition: (answers) => answers.mechIssue === "Yes",
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
    options: ["0 tire","1 tire","2 tires","3 tires","4 tires" ]
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

const SubField = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ carName: "BMW" });
  const [showMileageModal, setShowMileageModal] = useState(false);
  const [mileageValue, setMileageValue] = useState(""); // temp store before confirmation
 
  const getVisibleSteps = () => {
    return steps.filter((s) => !s.condition || s.condition(answers));
  };

  const visibleSteps = getVisibleSteps();

  const nextStep = () => {
        setStep((prev) => Math.min(prev + 1, visibleSteps.length - 1));
    };
    
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0))
   };

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));

    if(field === "mileage") return; //don't auto-next for mileage;

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

  const handleMileageNext = () =>{
    const mileage = parseInt(answers.mileage || "0");
    if (mileage < 5000)
    {
      setShowMileageModal(true);
    }
    else
    {
      nextStep();
    }
  };

  const current = visibleSteps[step];

  return (
    <>
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
      {/*====== Check Box ======= */}
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
            placeholder="Mileage"
            value={answers[current.field] || ""}
              onChange={(e) => setMileageValue(e.target.value)}
                onkeydown = {(e) => {
                  if(e.key === "Enter") handleMileageNext();
                }}
          />
        </div>
      )}

      {/* Render subField or subFields if present */}
      {current.subField && (!current.subField.condition || current.subField.condition(answers)) && (
        <div className="mt-4">
       
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

      {/* {current.subFields &&
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
        )} */}
      </div>

      <div className="step-footer mx-2">
        {step > 0 && (
          <button className="border-0 rounded-pill px-4 px-sm-3 py-1 fw-semibold d-flex align-items-center gap-2 me-3" onClick={prevStep}>
            <FaArrowUp className="me-1" /> Back
          </button>
        )}
        {step < visibleSteps.length - 1 && (
          <button  className="border-0 rounded-pill px-4 px-sm-3 py-2 fw-semibold d-flex align-items-center gap-2" style={{backgroundColor: " #ffd94f"}}
              onClick={()=>{
                if (current.field === "Mileage")
                {
                  handleMileageNext();
                }
                else
                {
                  nextStep();
                }
              }}>
            Next <FaArrowDown className="ms-1" />
          </button>
        )}
      </div>
      </section>

      {/* Show Mileage Pop Up */}
      {
        showMileageModal && (
          <div className="modal-backdrop" 
          style={{position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: "1050"}}
            onClick={() => setShowMileageModal(false)}>
            <div className="textBox-card shadow d-flex flex-column align-items-center"
            style={{maxWidth: "500px", width: "90%", borderRadius: "16px", backgroundColor: "white",}}
            onClick={(e) => e.stopPropagation()}> 
              <div className="d-flex justify-content-end mb-5" onClick={() => setShowMileageModal(false)}>
                <i className="px-1"
                style={{color: "rgba(33,33,33,.7)", border: "2px solid rgba(33,33,33,.7)", borderRadius: "50%"}}>
                  <IoMdClose/>
                </i>
              </div>
              <div className="d-flex justify-content-center align-items-center w-100 mb-5">
                    <LazyLoadImage style={{width: "200px",height: "100px"}}
                src="/Instant Offer/car-milege.jpeg" threshold={200} effect="blur"/>
              </div>
              <p className="fs-5">just making sure</p>
              <h2 className="fw-bold mb-4">is the milege correct?</h2>
              <p className="text-secondary mb-3">We just want to double-check that your milege entry is correct, since cars that age tend to clock in higher. And this will obviously impact your offer.</p>
              <button className="mb-4 w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
                style={{backgroundColor: " #ffd94f", borderRadius: "28px", padding:"0 24px", minHeight:"56px"}}
                onClick={()=>{
                  showMileageModal(false)
                  nextStep();
                }}>Yep, this is correct</button>
              <button className="w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
                style={{borderRadius: "28px", padding:"0 24px", minHeight:"56px"}} onClick={() => setShowMileageModal(false)}>
                  Re-enter my mileage
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default SubField;
