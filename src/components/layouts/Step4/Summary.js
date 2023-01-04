import React, { Fragment } from "react";

import Header from "../../UI/Header/Header";
import Confirm from "./Confirm/Confirm";
import Buttons from "./Buttons/Buttons";

const Summary = ({ setStep }) => {
  const heading = "Finishing up";
  const message = "Double-check everything looks OK before confirming.";

  return (
    <Fragment>
      <Header heading={heading} message={message} />
      <Confirm setStep={setStep} />
      <Buttons setStep={setStep} />
    </Fragment>
  );
};

export default Summary;
