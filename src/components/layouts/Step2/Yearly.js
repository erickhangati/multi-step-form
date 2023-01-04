import React, { useContext } from "react";

import Container from "./Container/Container";
import Card from "./Card/Card";
import Plans from "./Plans";
import StepContext from "../../../store/step-context";

const Yearly = () => {
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

    // Set to yearly plan.
    stepCtx.setBilled("yearly");

    // Set error to false if it was set when user tried to skip the step without selecting a plan.
    stepCtx.setPlanError(false);
  };

  return (
    <Container>
      {/* Map yearly plans to render then using th card component. */}
      {Plans.yearly.map((plan, index) => (
        <Card
          key={index}
          plan={plan}
          billedYearly={true}
          onClick={planClickHandler.bind(null, plan)}
        />
      ))}
    </Container>
  );
};

export default Yearly;
