import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // let step = 1;
  const [step, setStep] = useState(1);

  function handlePrev() {
    console.log('previous');
    if (step > 1) {
      setStep(prevStep => {
        return prevStep - 1
      });
    }
  }
  function handleNext() {
    console.log('next');
    if (step < 3) {
      setStep(prevStep => {
        return prevStep + 1
      });
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: "#fff" }} onClick={handlePrev}>Previous</button>
        <button style={{ backgroundColor: '#7950f2', color: "#fff" }} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
