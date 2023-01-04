import React, { useContext } from "react";

import Container from "./Container/Container";
import Plans from "./Plans";
import Card from "./Card/Card";
import StepContext from "../../../store/step-context";

const Monthly = () => {
  const stepCtx = useContext(StepContext);

  const planClickHandler = (plan) => {
    // When clicked, if it was selected...then remove plan.
    if (stepCtx.plan.names === plan.names) {
      stepCtx.setPlan({
        names: "",
        price: 0,
      });
      return;
    }

    // When clicked, if it was unselected...then set plan.
    stepCtx.setPlan({
      names: plan.names,
      price: plan.price,
    });

    // Set to monthly plan.
    stepCtx.setBilled("monthly");

    // Set error to false if it was set when user tried to skip the step without selecting a plan.
    stepCtx.setPlanError(false);
  };

  return (
    <Container>
      {/* Map montly plans to render then using th card component. */}
      {Plans.monthly.map((plan, index) => (
        <Card
          key={index}
          plan={plan}
          billedYearly={false}
          onClick={planClickHandler.bind(null, plan)}
        />
      ))}
    </Container>
  );
};

export default Monthly;
