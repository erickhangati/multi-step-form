import React, { useContext } from "react";

import Container from "./Container/Container";
import Plans from "./Plans";
import Card from "./Card/Card";
import StepContext from "../../../store/step-context";

const Monthly = () => {
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

    stepCtx.setBilled("monthly");

    stepCtx.setPlanError(false);
  };

  return (
    <Container>
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
