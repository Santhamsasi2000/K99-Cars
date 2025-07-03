export const DataQuestions =  [
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
