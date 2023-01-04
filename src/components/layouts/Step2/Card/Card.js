import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";

import styles from "./Card.module.css";

const Card = ({ plan, billedYearly, onClick }) => {
  const stepCtx = useContext(StepContext);

  return (
    <article
      className={`${styles.card}${
        stepCtx.plan.names === plan.names ? ` ${styles.active}` : ""
      }${stepCtx.planError ? ` ${styles.error}` : ""}`}
      onClick={onClick}
    >
      <img src={plan.icon} alt="icon" />
      <div>
        <h2>{plan.names}</h2>
        <p>{`$${plan.price}/${billedYearly ? "yr" : "mo"}`}</p>
        {billedYearly && <span>2 months free</span>}
      </div>
    </article>
  );
};

export default Card;
