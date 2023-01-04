import React, { useContext } from "react";

import Container from "./Container/Container";
import Card from "./Card/Card";
import Plans from "./Plans";
import StepContext from "../../../store/step-context";

const Yearly = () => {
  const stepCtx = useContext(StepContext);

  const planClickHandler = (plan) => {
    if (stepCtx.plan.names === plan.names) {
      stepCtx.setPlan({
        names: "",
        price: 0,
      });
      return;
    }

    stepCtx.setPlan({
      names: plan.names,
      price: plan.price,
    });

    stepCtx.setBilled("yearly");

    stepCtx.setPlanError(false);
  };

  return (
    <Container>
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
