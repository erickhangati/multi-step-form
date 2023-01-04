import React, { Fragment } from "react";

import Header from "../../UI/Header/Header";
import Confirm from "./Confirm/Confirm";
import Buttons from "./Buttons/Buttons";

const Summary = ({ setStep }) => {
  // Summary heading and description.
  const heading = "Finishing up";
  const message = "Double-check everything looks OK before confirming.";

  return (
    <Fragment>
      {/* Render Header Component */}
      <Header heading={heading} message={message} />

      {/* Render Confirm Component */}
      <Confirm setStep={setStep} />

      {/* Render Buttons Component */}
      <Buttons setStep={setStep} />
    </Fragment>
  );
};

export default Summary;
