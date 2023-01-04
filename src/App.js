import React, { useState } from "react";

import StepProvider from "./store/StepProvider";
import Sidebar from "./components/layouts/Sidebar/Sidebar";

import Step1 from "./components/layouts/Step1/Step1";
import Step2 from "./components/layouts/Step2/Step2";
import Step3 from "./components/layouts/Step3/Step3";
import Step4 from "./components/layouts/Step4/Step4";

import styles from "./App.module.css";

const App = () => {
  // State for managing the form steps
  const [step, setStep] = useState(1);

  return (
    <StepProvider>
      <main className={styles.app}>
        {/* The sidebar that will render on all the steps */}
        <Sidebar setStep={setStep} />

        {/* The steps components */}
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        {step === 3 && <Step3 setStep={setStep} />}
        {step === 4 && <Step4 setStep={setStep} />}
      </main>
    </StepProvider>
  );
};

export default App;
